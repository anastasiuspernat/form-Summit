import { useState } from 'react';
import Form from "../components/form";

/**
 * Home page component
 * The styles are in the styles/globals.css
 * @returns Home page
 */
export default function Home() {

    /**
     * Handles form submission
     * @param e event received from form submission
     */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log(formData);
    };

    return (
        // Top section, contains logo and text
        <div className="container">
            <div className="row topBack">
                {/* Left column, contains intro */}
                <div className="left-column">
                    <h2 style={{ textAlign: "right", color: "white" }}>
                        BECOME A PART OF OUR COMMUNITY OF 10,000+ LEADING ENTREPRENEURS,
                        ACADEMICS, ARTISTS, ATHLETES, EXPLORERS, PHILANTHROPISTS,
                        SCIENTISTS, AND BEYOND.
                    </h2>
                </div>
                {/* Right column, contains logo */}
                <div className="right-column">
                    <img src="https://summit.co/img/spd2022/logo-summit.png" alt="Summit Logo" style={{ width: 100 }} />
                </div>
            </div>
            {/* Form section, contains form and text */}
            <div className="row formBack">
                {/* Left column, contains form */}
                <div className="left-column">
                    <Form onSubmit={handleSubmit} />
                </div>
                {/* Right column, contains description */}
                <div className="right-column">
                    <p className="summit-community">
                        The Summit Series community is a network of 10,000+ global makers.
                        Join us for Summit events, programming, and experiences, from our
                        signature events and excursions to Powder Mountain, our 10,000 acre
                        ski resort in Northern Utah.
                    </p>
                    <h3 className="summit-curation">OUR CURATION PROCESS</h3>
                    <p className="summit-note">
                        Candidates are interviewed to ensure they are:
                        <hr />
                        A leader in their field
                        <hr />
                        A warm, kind person who resonates with our principles
                    </p>
                </div>
            </div>
            {/* Quote section, contains quote spanning two columns */}
            <div className="row bottomBack">
                <div className="quote">
                    <p>
                        “There are many different networking events around the world, but
                        Summit is unique. A merger of experiential learning, TED-style
                        presentations, art and wellness, Summit is a hands-on,
                        cross-disciplinary mastermind developed by the Millennial
                        generation.” — Inc Magazine
                    </p>
                </div>
            </div>
        </div>
    );

}

