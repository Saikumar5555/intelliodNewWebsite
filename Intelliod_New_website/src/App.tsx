import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AgenticAISuite from './components/AgenticAISuite';
import ASPIRE from './components/ASPIRE';
import IndustryCards from './components/IndustryCards';
import SectorsGrid from './components/SectorsGrid';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <AgenticAISuite />
        <ASPIRE />
        <IndustryCards />
        <SectorsGrid />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
