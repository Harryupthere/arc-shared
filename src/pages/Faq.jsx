import { useEffect, useRef, useState } from "react";
import './FAQ.scss';
import faqData from "./FaqData";

const FAQ = () => {
    const faqCategories = Object.keys(faqData);
    const midPoint = Math.ceil(faqCategories.length / 2);
    const firstColumn = faqCategories.slice(0, midPoint);
    const secondColumn = faqCategories.slice(midPoint);

    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleAccordion = (id) => {
        setOpenQuestion(openQuestion === id ? null : id);
    };

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.4;
        }
    }, []);

    return (
        <>
            <div className="faq-page">                
                <section className="faq-hero">
                    <div className="hero-background">
                        <div className="network-overlay"></div>
                    </div>
                    <div className="hero-content">
                        <h1 className="hero-title">FAQ</h1>
                        <form className="search-form">
                            <input
                                type="search"
                                className="search-input"
                                placeholder="Search"
                            />
                            <span className="search-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                                </svg>
                            </span>
                        </form>
                    </div>
                </section>

                <section className="faq-content">
                    <div className="container">
                        <div className="faq-grid">
                            {[firstColumn, secondColumn].map((column, colIndex) => (
                                <div key={colIndex} className="faq-column">
                                    {column.map((category, index) => (
                                        <div key={index} className="faq-category">
                                            <h2 className="category-title">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z"></path>
                                                </svg>
                                                {category.replace(/([A-Z])/g, " $1")}
                                            </h2>
                                            <div className="faq-items">
                                                {faqData[category].map((elm) => (
                                                    <div key={elm.id} className="faq-item">
                                                        <button
                                                            className="faq-question"
                                                            onClick={() => toggleAccordion(elm.id)}
                                                        >
                                                            <span className="question-text">{elm.question}</span>
                                                            <span className="toggle-icon">
                                                                {openQuestion === elm.id ? "−" : "+"}
                                                            </span>
                                                        </button>
                                                        {openQuestion === elm.id && (
                                                            <div className="faq-answer">
                                                                <p>{elm.answer}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default FAQ;