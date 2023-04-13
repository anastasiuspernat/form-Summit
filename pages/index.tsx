import { useState } from 'react';
import Form from "./form";


const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const validatePhone = (phone: string) => {
    const re = /^\d{10,15}$/;
    return re.test(phone);
};

export default function Home() {


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log(formData);
    };

    return (
        <div className="container">
            <div className="row topBack">
                <div className="left-column">
                    <h2 style={{ textAlign: "right", color: "white" }}>
                        BECOME A PART OF OUR COMMUNITY OF 10,000+ LEADING ENTREPRENEURS,
                        ACADEMICS, ARTISTS, ATHLETES, EXPLORERS, PHILANTHROPISTS,
                        SCIENTISTS, AND BEYOND.
                    </h2>
                </div>
                <div className="right-column">
                    <img src="https://summit.co/img/spd2022/logo-summit.png" alt="Summit Logo" style={{width: 100}} />
                </div>
            </div>
            <div className="row formBack">
                <div className="left-column">
                    <Form />
                </div>
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
                        <hr/>
                        A leader in their field 
                        <hr/>
                        A warm, kind person who resonates with our principles
                    </p>
                </div>
            </div>
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

