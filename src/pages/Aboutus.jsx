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
                                    At Arc, we believe that everyone should have the opportunity to trade and invest in the financial markets. Our mission is to provide a seamless and user-friendly platform that empowers individuals to achieve their financial goals through trading.
                                </p>
                                <p>
                                    Founded in 2023, Arc has quickly become a leading name in the trading industry. Our team of experienced professionals is dedicated to delivering innovative solutions that meet the evolving needs of traders worldwide.
                                </p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fugit, corporis perferendis voluptatum culpa voluptate natus. Laudantium obcaecati enim animi ducimus earum eligendi consequuntur autem! Qui et nihil quibusdam delectus!</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fugit, corporis perferendis voluptatum culpa voluptate natus. Laudantium obcaecati enim animi ducimus earum eligendi consequuntur autem! Qui et nihil quibusdam delectus!</p>

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
                                    Our mission is simple: to offer traders the opportunity to succeed with real liquidity and
                                    professional support. At ARC, we are dedicated to providing transparent, market-driven
                                    solutions that empower traders at every level.
                                    </p>
                                    <p>
                                    Built by traders who understand the market's
                                    complexities and backed by experts who bring industry-leading knowledge, we aim to deliver an
                                    unparalleled trading experience with integrity and excellence.
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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni asperiores eaque, itaque molestiae reprehenderit consectetur dolorum excepturi suscipit fuga debitis nobis unde delectus, non dolorem, saepe pariatur accusamus voluptatem deleniti! </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni asperiores eaque, itaque molestiae reprehenderit consectetur dolorum excepturi suscipit fuga debitis nobis unde delectus, non dolorem, saepe pariatur accusamus voluptatem deleniti! </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutUs;