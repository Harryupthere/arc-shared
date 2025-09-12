import HeroSection from '../components/Sections/HeroSection';
import TradersSection from '../components/Sections/TradersSection';
import ProcessSection from '../components/Sections/ProcessSection';
import ObjectivesSection from '../components/Sections/ObjectivesSection';
import BenefitsSection from '../components/Sections/BenefitsSection';
import CustomerSupportSection from '../components/Sections/CustomerSupportSection';
import TestimonialsSection from '../components/Sections/TestimonialsSection';
import CallToActionSection from '../components/Sections/CallToActionSection';
import PricingTable from './pricingTable/PricingTable';

const Home = () => {
  return (
    <>
      <HeroSection />
      <TradersSection />
      <ProcessSection />
      <BenefitsSection />
      {/* <CustomerSupportSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <ObjectivesSection /> */}
      <PricingTable/>
      <CallToActionSection />
    </>
  );
};

export default Home;