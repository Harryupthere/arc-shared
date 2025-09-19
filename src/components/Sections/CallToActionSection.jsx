import { Link } from 'react-router-dom';
import './CallToActionSection.scss';

const CallToActionSection = () => {
  return (
    <section className="cta-section">
      <div className="container">
           <Link to="/" className="logo" >
            <h2 className="logo-text animate-gradient " style={{textAlign:'center'}}>ARC</h2>
          </Link>
        <div className="cta-content">
          
          <h2>DISCOVER YOUR POTENTIAL<br />AND BECOME AN ARC TRADER</h2>
          
          <div className="cta-buttons">
            <button className="btn btn-primary">ARC Challenge</button>
            {/* <button className="btn btn-outline">Free Trial</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;