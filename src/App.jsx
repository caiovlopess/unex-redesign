import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Units from "./components/Units";
import Testimonials from "./components/Testimonials";
import News from "./components/News";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Benefits />
        <About />
        <Units />
        <Testimonials />
        <News />
        <LeadForm />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}

export default App;