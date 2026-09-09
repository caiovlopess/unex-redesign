import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import { UNEX_KNOWLEDGE_BASE } from './knowledgeBase.js';

const app = express();

app.use(cors());
app.use(express.json());

// =====================================================
// CONFIGURAÇÃO
// =====================================================

if (!process.env.GEMINI_API_KEY) {
  console.error(
    '[ERRO] GEMINI_API_KEY não definida no arquivo .env'
  );
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Gemini Flash atual
const MODEL_NAME = 'gemini-3.8-flash';

// =====================================================
// PROMPT DO SISTEMA
// =====================================================

const SYSTEM_PROMPT = `Você é o assistente virtual de atendimento a candidatos da Unex,
uma universidade. Seu trabalho é tirar dúvidas de candidatos sobre cursos,
unidades/campi e o processo seletivo (vestibular).

Use APENAS as informações abaixo para responder.

Se a resposta não estiver na base de conhecimento, diga claramente que
você não possui essa informação e oriente a pessoa a falar com a
secretaria ou central de atendimento.

NUNCA invente:
- datas;
- preços;
- notas de corte;
- horários;
- endereços;
- cursos;
- informações sobre vestibular;
- ou qualquer outro dado que não esteja na base.

--- BASE DE CONHECIMENTO ---
${UNEX_KNOWLEDGE_BASE}
--- FIM DA BASE DE CONHECIMENTO ---

Regras de estilo:
- Respostas curtas e diretas.
- Preferencialmente 2 a 4 frases.
- Tom acolhedor e direto.
- Não use markdown pesado.
- Não use títulos ou listas longas.
- Escreva como um atendente de chat.
- Se a pergunta não tiver relação com a Unex, cursos, unidades ou vestibular,
  redirecione gentilmente o assunto para esses temas.
`;

// =====================================================
// FUNÇÃO PARA ESPERAR
// =====================================================

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// =====================================================
// CHAT
// =====================================================

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    console.log('\n📩 Mensagem recebida:', message);

    // -----------------------------------------------
    // Validação
    // -----------------------------------------------

    if (
      !message ||
      typeof message !== 'string' ||
      !message.trim()
    ) {
      return res.status(400).json({
        error: 'Mensagem inválida.',
      });
    }

    // -----------------------------------------------
    // Histórico
    // -----------------------------------------------

    const formattedHistory = Array.isArray(history)
      ? history
          .filter(
            (h) =>
              h &&
              typeof h.text === 'string' &&
              h.text.trim() &&
              (h.role === 'user' || h.role === 'model')
          )
          .slice(-20)
          .map((h) => ({
            role: h.role,
            parts: [
              {
                text: h.text,
              },
            ],
          }))
      : [];

    // Adicionamos a mensagem atual ao histórico
    const contents = [
      ...formattedHistory,
      {
        role: 'user',
        parts: [
          {
            text: message.trim(),
          },
        ],
      },
    ];

    console.log('🤖 Enviando mensagem para Gemini...');
    console.log('📚 Histórico:', formattedHistory.length, 'mensagens');

    // -----------------------------------------------
    // Configuração da geração
    // -----------------------------------------------

    const config = {
      systemInstruction: SYSTEM_PROMPT,

      maxOutputTokens: 300,
    };

    // -----------------------------------------------
    // Tentativas automáticas
    // -----------------------------------------------

    let response = null;
    let lastError = null;

    const MAX_ATTEMPTS = 3;

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      try {
        console.log(
          `🔄 Tentativa ${attempt}/${MAX_ATTEMPTS}`
        );

        response = await ai.models.generateContent({
          model: MODEL_NAME,
          contents,
          config,
        });

        console.log('✅ Gemini respondeu!');

        break;
      } catch (error) {
        lastError = error;

        console.error(
          `❌ Tentativa ${attempt} falhou:`,
          error?.message || error
        );

        // Alguns erros da API podem vir com status
        const status =
          error?.status ||
          error?.response?.status ||
          error?.code;

        // Retry apenas para erros temporários
        const shouldRetry =
          status === 429 ||
          status === 500 ||
          status === 502 ||
          status === 503 ||
          status === 504;

        if (!shouldRetry || attempt === MAX_ATTEMPTS) {
          throw error;
        }

        const waitTime = attempt * 2000;

        console.log(
          `⏳ Aguardando ${waitTime / 1000}s antes de tentar novamente...`
        );

        await sleep(waitTime);
      }
    }

    // -----------------------------------------------
    // Verifica resposta
    // -----------------------------------------------

    if (!response) {
      throw lastError || new Error('O Gemini não retornou resposta.');
    }

    const reply = response.text?.trim();

    if (!reply) {
      throw new Error(
        'O Gemini retornou uma resposta vazia.'
      );
    }

    console.log('💬 Resposta:', reply);

    // -----------------------------------------------
    // Retorna para o React
    // -----------------------------------------------

    return res.json({
      reply,
    });
  } catch (error) {
    console.error('\n❌ ERRO EM /api/chat:');
    console.error(error);

    // -----------------------------------------------
    // Erro 503 / indisponibilidade
    // -----------------------------------------------

    const status =
      error?.status ||
      error?.response?.status ||
      error?.code;

    if (
      status === 503 ||
      status === 429
    ) {
      return res.status(503).json({
        error:
          'O assistente está recebendo muitas solicitações no momento. Tente novamente em alguns segundos.',
      });
    }

    // -----------------------------------------------
    // Erro geral
    // -----------------------------------------------

    return res.status(500).json({
      error:
        'Não consegui processar sua mensagem agora. Tente novamente em instantes.',
    });
  }
});

// =====================================================
// HEALTH CHECK
// =====================================================

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    model: MODEL_NAME,
  });
});

// =====================================================
// SERVIDOR
// =====================================================

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(
    `🚀 Servidor do chatbot rodando em http://localhost:${PORT}`
  );

  console.log(
    `🤖 Modelo: ${MODEL_NAME}`
  );
});