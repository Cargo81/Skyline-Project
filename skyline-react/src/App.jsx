import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyChoose from "./components/WhyChoose";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyChoose />
        <QuoteForm />
        <Footer />
      </main>
    </>
  );
}
