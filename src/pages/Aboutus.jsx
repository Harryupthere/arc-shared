import { Container } from "@mui/material";
import { ShadeImage } from "../components/common/iconImage";
import imageMap from "../utlis/helper";
import './Aboutus.scss';
const AboutUs = () => {

    return (
        <>
            <div className="faq-page about-us-page">
                <picture className="shade-left roated-90"  >
                    <ShadeImage />
                </picture>
                <picture className="shade-right" >
                    <ShadeImage />
                </picture>
                <section className="faq-hero">
                    <div className="hero-background">
                        <div className="network-overlay"></div>
                    </div>
                    <div className="hero-content">
                        <h1 className="hero-title">About Us</h1>
                    </div>
                </section>

                <section className="about-us-section">
                    <div className="container">
                        <div className="two-section">
                            <div className="image">
                                <img src={imageMap['story.jpg']} alt="About Us" />
                            </div>
                            <div className="content">
                                <h2>Our Story</h2>
                                <p>
                                    At ARC Funding, we’ve been exactly where you are now.
                                    We know the struggle of putting in endless hours of study, refining strategies, and proving consistency — only to be held back by one thing: capital.
                                </p>
                                <p>
                                    This prop firm wasn’t built by outsiders. ARC Funding was built by real traders, backed by industry professionals. We’ve walked the same path, felt the same frustrations, and know firsthand how it feels to be ready for the next step but limited by access to funds.
                                </p>
                                <p>Here’s how we make it possible:</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fugit, corporis perferendis voluptatum culpa voluptate natus. Laudantium obcaecati enim animi ducimus earum eligendi consequuntur autem! Qui et nihil quibusdam delectus!</p>
                                <ul>
                                    <li>Traders who pass our evaluation gain access to this capital.</li>

                                    <li>Every position is monitored with strict risk controls so our investors feel secure.</li>

                                    <li>Profits are shared fairly: traders keep the majority (up to 80–90%), investors earn reliable returns, and ARC reinvests a small share to keep expanding opportunities.</li>

                                    <li>We didn’t just build another prop firm. We built a platform where ambition meets opportunity, where traders can finally showcase their skills without the limits of personal capital.</li>

                                    <li>Because at ARC, we’ve been in your shoes. And now, we’re here to back you every step of the way.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-us-section">
                    <div className="container">
                        <div className="two-section">
                            <div className="content">
                                <h2>Our Mission</h2>
                                <p>
                                   At ARC Funding, our mission is simple: to empower skilled traders by giving them the capital, tools, and support they need to thrive.
We believe talent should never be wasted because of limited resources. That’s why we connect ambitious traders with the backing of trusted investors and the guidance of experienced professionals.
Our goal is to create a fair, transparent, and sustainable ecosystem where traders can unlock their potential, investors feel secure, and ARC continues to grow as a bridge between the two.
                                </p>
                            </div>
                            <div className="image">
                                <img src={imageMap['mission.jpg']} alt="About Us" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-us-section">
                    <div className="container">
                        <div className="two-section">
                            <div className="image">
                                <img src={imageMap['team.jpg']} alt="About Us" />
                            </div>
                            <div className="content">
                                <h2>Our Team</h2>
                                <p>ARC Funding was built by real traders who understand the challenges of the markets and is backed by industry professionals with decades of combined experience in trading, risk management, and finance.</p>
                                <p>We are more than just a firm — we are a team of mentors, strategists, and risk managers who know what it takes to succeed in today’s fast-moving markets. Every policy, every rule, and every opportunity we create comes from firsthand experience and a deep commitment to supporting traders.</p>
                                <p>Our team is united by one vision: to give traders the freedom to prove their skills and trade without limits.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutUs;