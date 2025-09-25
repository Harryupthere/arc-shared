import HeroSection from '../components/Sections/HeroSection';
import ProcessSection from '../components/Sections/ProcessSection';
import CallToActionSection from '../components/Sections/CallToActionSection';
import PricingTable from './pricingTable/PricingTable';

const Home = () => {
  return (
    <>
    <div style={{background: "linear-gradient(135deg, var(--dark-bg) 0%, var(--darker-bg) 100%);"}}>
      <div data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="100"
        data-aos-offset="0">
        <HeroSection />
      </div>
      </div>
      {/* <TradersSection /> */}
      <div data-aos="fade-up">
        <ProcessSection />
      </div>
      {/* <BenefitsSection /> */}
      {/* <CustomerSupportSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <ObjectivesSection /> */}
      <div data-aos="fade-up">
        <PricingTable />
      </div>
      <div data-aos="fade-up">

        <CallToActionSection />
      </div>
    </>
  );
};

export default Home;