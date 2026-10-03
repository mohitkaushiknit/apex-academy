import React, { useState } from "react";

/* =========================================================
   QUICK CUSTOMIZATION
   Change the values below for a new coaching institute demo.
========================================================= */

const institute = {
    name: "Apex Academy",
    shortName: "APEX",
    tagline: "Learn. Prepare. Achieve.",
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    email: "hello@apexacademy.in",
    address: "Model Town, Jind, Haryana",
    hours: "Mon – Sat · 8:00 AM – 8:00 PM"
};

const stats = [
    { value: "12+", label: "Years of Excellence" },
    { value: "8,500+", label: "Students Mentored" },
    { value: "96%", label: "Board Success Rate" },
    { value: "150+", label: "Top Rankers" }
];

const programs = [
    {
        number: "01",
        title: "JEE Preparation",
        description:
            "Structured preparation for JEE Main & Advanced with concept building, problem solving and regular testing.",
        tags: ["JEE Main", "JEE Advanced", "Class 11–12"],
        featured: true
    },
    {
        number: "02",
        title: "NEET Preparation",
        description:
            "Focused Physics, Chemistry and Biology preparation with NCERT-first learning and exam-oriented practice.",
        tags: ["NEET", "Class 11–12", "Dropper Batch"],
        featured: false
    },
    {
        number: "03",
        title: "Foundation Program",
        description:
            "Build strong academic fundamentals early with guided learning for Classes 8–10.",
        tags: ["Class 8–10", "Olympiads", "Foundation"],
        featured: false
    },
    {
        number: "04",
        title: "School Tuition",
        description:
            "Small-batch tuition designed to improve concepts, school performance and exam confidence.",
        tags: ["CBSE", "Classes 6–12", "Small Batches"],
        featured: false
    }
];

const reasons = [
    {
        icon: "◎",
        title: "Concept-first teaching",
        text: "We focus on understanding before memorisation, so students can solve unfamiliar problems with confidence."
    },
    {
        icon: "↗",
        title: "Regular performance tracking",
        text: "Tests, analysis and mentor feedback help students understand exactly where they need to improve."
    },
    {
        icon: "◇",
        title: "Experienced faculty",
        text: "Subject specialists bring structured classroom teaching, doubt support and exam-focused guidance."
    },
    {
        icon: "✓",
        title: "Personal attention",
        text: "Small batches and mentor interaction help students stay consistent throughout their preparation."
    }
];

const results = [
    {
        rank: "AIR 184",
        exam: "JEE Advanced",
        student: "Aarav Sharma",
        detail: "99.72 percentile · 2025"
    },
    {
        rank: "AIR 412",
        exam: "NEET",
        student: "Ananya Gupta",
        detail: "680 / 720 · 2025"
    },
    {
        rank: "99.4%",
        exam: "CBSE Class XII",
        student: "Rohan Verma",
        detail: "Science Stream · 2025"
    },
    {
        rank: "99.1%",
        exam: "JEE Main",
        student: "Priyanshi Jain",
        detail: "2025 Session 2"
    }
];

const faculty = [
    {
        name: "Dr. Rajiv Mehta",
        subject: "Physics",
        experience: "15+ years experience",
        image:
            "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80"
    },
    {
        name: "Neha Sharma",
        subject: "Chemistry",
        experience: "12+ years experience",
        image:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80"
    },
    {
        name: "Amit Kapoor",
        subject: "Mathematics",
        experience: "14+ years experience",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80"
    }
];

const testimonials = [
    {
        quote:
            "The biggest difference was the regular testing and personal feedback. I knew exactly what I needed to improve every month.",
        name: "Aarav Sharma",
        meta: "JEE Advanced · AIR 184"
    },
    {
        quote:
            "The teachers explain difficult topics in a very practical way. My confidence improved significantly within a few months.",
        name: "Ananya Gupta",
        meta: "NEET · 680/720"
    },
    {
        quote:
            "Apex gave me a proper study structure. The mentors kept me accountable without making preparation stressful.",
        name: "Rohan Verma",
        meta: "CBSE Class XII · 99.4%"
    }
];

const faqs = [
    {
        question: "Which classes do you offer?",
        answer:
            "We offer programs from Class 6 to 12, along with dedicated JEE and NEET preparation batches."
    },
    {
        question: "Do you provide a demo class?",
        answer:
            "Yes. Students can attend a counselling session and explore a suitable batch before admission."
    },
    {
        question: "Are there separate batches for JEE and NEET?",
        answer:
            "Yes. JEE and NEET programs follow separate subject plans, test patterns and preparation schedules."
    },
    {
        question: "How large are the batches?",
        answer:
            "We keep batches intentionally limited so faculty can provide meaningful attention and doubt support."
    },
    {
        question: "Do you provide regular tests?",
        answer:
            "Yes. Students receive regular tests, performance analysis and mentor feedback as part of the program."
    }
];

/* =========================================================
   ICONS
========================================================= */

function ArrowIcon() {
    return <span className="arrow-icon">↗</span>;
}

function CheckIcon() {
    return <span className="check-icon">✓</span>;
}

/* =========================================================
   NAVBAR
========================================================= */

function Navbar({ onEnquire }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="navbar">
            <div className="container nav-inner">
                <a href="#top" className="brand" onClick={closeMenu}>
                    <span className="brand-mark">A</span>
                    <span>
                        <strong>{institute.name}</strong>
                        <small>ACADEMIC EXCELLENCE - created by Mohit</small>
                    </span>
                </a>

                <button
                    className="mobile-menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    {menuOpen ? "×" : "☰"}
                </button>

                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a href="#programs" onClick={closeMenu}>
                        Programs
                    </a>
                    <a href="#results" onClick={closeMenu}>
                        Results
                    </a>
                    <a href="#faculty" onClick={closeMenu}>
                        Faculty
                    </a>
                    <a href="#about" onClick={closeMenu}>
                        Why Apex
                    </a>
                    <a href="#faq" onClick={closeMenu}>
                        FAQ
                    </a>

                    <button
                        className="nav-cta"
                        onClick={() => {
                            closeMenu();
                            onEnquire();
                        }}
                    >
                        Enquire Now <ArrowIcon />
                    </button>
                </nav>
            </div>
        </header>
    );
}

/* =========================================================
   HERO
========================================================= */

function Hero({ onEnquire }) {
    return (
        <section className="hero" id="top">
            <div className="hero-glow glow-one" />
            <div className="hero-glow glow-two" />

            <div className="container hero-grid">
                <div className="hero-content">
                    <div className="eyebrow">
                        <span className="eyebrow-dot" />
                        Admissions Open · 2026–27
                    </div>

                    <h1>
                        Build the
                        <span> confidence </span>
                        to achieve more.
                    </h1>

                    <p className="hero-text">
                        Structured preparation, experienced faculty and personal
                        mentorship for students aiming higher in JEE, NEET, Foundation
                        and school academics.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary" onClick={onEnquire}>
                            Book Free Counselling <ArrowIcon />
                        </button>

                        <a className="btn btn-secondary" href="#programs">
                            Explore Programs
                        </a>
                    </div>

                    <div className="hero-proof">
                        <div className="avatar-stack">
                            <span>AS</span>
                            <span>AG</span>
                            <span>RV</span>
                            <span>+</span>
                        </div>

                        <div>
                            <strong>8,500+ students</strong>
                            <small>have trusted our classrooms</small>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-image">
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
                            alt="Students studying together"
                        />

                        <div className="image-overlay" />

                        <div className="hero-card card-rank">
                            <div className="mini-icon">★</div>
                            <div>
                                <strong>150+</strong>
                                <span>Top Rankers</span>
                            </div>
                        </div>

                        <div className="hero-card card-score">
                            <div className="score-ring">96%</div>
                            <div>
                                <strong>Success Rate</strong>
                                <span>Board results</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-decoration">
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div>

            <div className="container hero-bottom">
                <div className="trust-item">
                    <span>✓</span>
                    Experienced faculty
                </div>
                <div className="trust-item">
                    <span>✓</span>
                    Personal mentorship
                </div>
                <div className="trust-item">
                    <span>✓</span>
                    Regular test series
                </div>
                <div className="trust-item">
                    <span>✓</span>
                    Doubt support
                </div>
            </div>
        </section>
    );
}

/* =========================================================
   STATS
========================================================= */

function Stats() {
    return (
        <section className="stats-section">
            <div className="container stats-grid">
                {stats.map((stat) => (
                    <div className="stat" key={stat.label}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* =========================================================
   PROGRAMS
========================================================= */

function Programs({ onEnquire }) {
    return (
        <section className="section programs-section" id="programs">
            <div className="container">
                <div className="section-heading">
                    <div>
                        <span className="section-label">OUR PROGRAMS</span>
                        <h2>Choose the path that fits your goal.</h2>
                    </div>

                    <p>
                        Focused programs built around strong fundamentals, consistent
                        practice and measurable progress.
                    </p>
                </div>

                <div className="program-grid">
                    {programs.map((program) => (
                        <article
                            className={`program-card ${program.featured ? "featured" : ""}`}
                            key={program.title}
                        >
                            <div className="program-top">
                                <span>{program.number}</span>

                                {program.featured && (
                                    <span className="popular-tag">MOST POPULAR</span>
                                )}
                            </div>

                            <h3>{program.title}</h3>

                            <p>{program.description}</p>

                            <div className="program-tags">
                                {program.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>

                            <button onClick={onEnquire} className="program-link">
                                Get Course Details <ArrowIcon />
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* =========================================================
   WHY APEX
========================================================= */

function WhyApex() {
    return (
        <section className="section about-section" id="about">
            <div className="container about-grid">
                <div className="about-image-wrap">
                    <img
                        src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=85"
                        alt="Teacher helping students"
                    />

                    <div className="experience-card">
                        <strong>12+</strong>
                        <span>Years of<br />teaching excellence</span>
                    </div>
                </div>

                <div className="about-content">
                    <span className="section-label">WHY APEX</span>

                    <h2>
                        More than classes.
                        <br />
                        <span>A complete preparation system.</span>
                    </h2>

                    <p className="lead">
                        Great results come from the right combination of teaching,
                        practice, feedback and consistency. Our system is designed around
                        all four.
                    </p>

                    <div className="reason-list">
                        {reasons.map((reason) => (
                            <div className="reason" key={reason.title}>
                                <div className="reason-icon">{reason.icon}</div>

                                <div>
                                    <h3>{reason.title}</h3>
                                    <p>{reason.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* =========================================================
   RESULTS
========================================================= */

function Results() {
    return (
        <section className="section results-section" id="results">
            <div className="container">
                <div className="results-heading">
                    <div>
                        <span className="section-label">RESULTS THAT SPEAK</span>
                        <h2>Consistent preparation.<br />Measurable outcomes.</h2>
                    </div>

                    <p>
                        Our students have consistently performed across competitive
                        examinations and school boards.
                    </p>
                </div>

                <div className="results-grid">
                    {results.map((result) => (
                        <article className="result-card" key={result.student}>
                            <div className="result-rank">{result.rank}</div>
                            <span className="result-exam">{result.exam}</span>
                            <h3>{result.student}</h3>
                            <p>{result.detail}</p>
                        </article>
                    ))}
                </div>

                <div className="results-note">
                    <span>✦</span>
                    Results shown are representative sample data for this website demo.
                </div>
            </div>
        </section>
    );
}

/* =========================================================
   FACULTY
========================================================= */

function Faculty({ onEnquire }) {
    return (
        <section className="section faculty-section" id="faculty">
            <div className="container">
                <div className="section-heading">
                    <div>
                        <span className="section-label">OUR FACULTY</span>
                        <h2>Learn from people<br />who know the path.</h2>
                    </div>

                    <button className="text-button" onClick={onEnquire}>
                        Talk to a Counsellor <ArrowIcon />
                    </button>
                </div>

                <div className="faculty-grid">
                    {faculty.map((member) => (
                        <article className="faculty-card" key={member.name}>
                            <div className="faculty-image">
                                <img src={member.image} alt={member.name} />
                            </div>

                            <div className="faculty-info">
                                <span>{member.subject}</span>
                                <h3>{member.name}</h3>
                                <p>{member.experience}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* =========================================================
   TESTIMONIALS
========================================================= */

function Testimonials() {
    return (
        <section className="section testimonial-section">
            <div className="container">
                <div className="center-heading">
                    <span className="section-label">STUDENT EXPERIENCES</span>
                    <h2>What our students say.</h2>
                </div>

                <div className="testimonial-grid">
                    {testimonials.map((item) => (
                        <article className="testimonial-card" key={item.name}>
                            <div className="quote-mark">“</div>

                            <div className="stars">★★★★★</div>

                            <p>{item.quote}</p>

                            <div className="testimonial-person">
                                <div className="person-avatar">
                                    {item.name
                                        .split(" ")
                                        .map((word) => word[0])
                                        .join("")}
                                </div>

                                <div>
                                    <strong>{item.name}</strong>
                                    <span>{item.meta}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* =========================================================
   CTA
========================================================= */

function CTA({ onEnquire }) {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-box">
                    <div className="cta-decoration" />

                    <div className="cta-content">
                        <span className="section-label light">START WITH A CONVERSATION</span>

                        <h2>
                            Not sure which program
                            <br />
                            is right for you?
                        </h2>

                        <p>
                            Talk to our academic counsellor and get a personalised
                            recommendation for your preparation.
                        </p>

                        <button className="btn btn-light" onClick={onEnquire}>
                            Book Free Counselling <ArrowIcon />
                        </button>
                    </div>

                    <div className="cta-side">
                        <div className="cta-number">01</div>
                        <div>
                            <strong>Share your goals</strong>
                            <span>Tell us about the student and target exam.</span>
                        </div>

                        <div className="cta-line" />

                        <div className="cta-number">02</div>
                        <div>
                            <strong>Get a plan</strong>
                            <span>Our counsellor suggests the right program.</span>
                        </div>

                        <div className="cta-line" />

                        <div className="cta-number">03</div>
                        <div>
                            <strong>Take the next step</strong>
                            <span>Visit the centre or begin your admission process.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* =========================================================
   FAQ
========================================================= */

function FAQ() {
    const [active, setActive] = useState(0);

    return (
        <section className="section faq-section" id="faq">
            <div className="container faq-grid">
                <div>
                    <span className="section-label">FAQ</span>

                    <h2>
                        Questions parents
                        <br />
                        usually ask.
                    </h2>

                    <p>
                        Still have a question? Our counsellors can help you understand
                        batches, schedules and program options.
                    </p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => {
                        const isActive = active === index;

                        return (
                            <div className={`faq-item ${isActive ? "active" : ""}`} key={faq.question}>
                                <button
                                    className="faq-question"
                                    onClick={() => setActive(isActive ? -1 : index)}
                                >
                                    <span>{faq.question}</span>
                                    <span className="faq-plus">{isActive ? "−" : "+"}</span>
                                </button>

                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* =========================================================
   LEAD FORM
========================================================= */

function LeadForm() {
    const initialForm = {
        name: "",
        phone: "",
        course: "",
        qualification: "",
        message: ""
    };

    const [form, setForm] = useState(initialForm);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });

        setError("");
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!form.name.trim()) {
            setError("Please enter your name.");
            return;
        }

        if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
            setError("Please enter a valid 10-digit Indian mobile number.");
            return;
        }

        if (!form.course) {
            setError("Please select a course.");
            return;
        }

        setSubmitted(true);
    }

    return (
        <section className="section enquiry-section" id="enquiry">
            <div className="container enquiry-grid">
                <div className="enquiry-copy">
                    <span className="section-label">ADMISSION ENQUIRY</span>

                    <h2>
                        Take the first step
                        <br />
                        towards your goal.
                    </h2>

                    <p>
                        Fill in the form and our academic counsellor will contact you to
                        discuss the right program, batch and preparation plan.
                    </p>

                    <div className="enquiry-benefits">
                        <div>
                            <CheckIcon />
                            Free academic counselling
                        </div>

                        <div>
                            <CheckIcon />
                            Program & batch guidance
                        </div>

                        <div>
                            <CheckIcon />
                            No obligation to enrol
                        </div>
                    </div>

                    <div className="direct-contact">
                        <span>Prefer to call?</span>
                        <a href={`tel:${institute.phone.replace(/\s/g, "")}`}>
                            {institute.phone}
                        </a>
                    </div>
                </div>

                <div className="form-card">
                    {!submitted ? (
                        <>
                            <div className="form-header">
                                <span className="form-step">FREE COUNSELLING</span>
                                <h3>Start your enquiry</h3>
                                <p>We'll get back to you shortly.</p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <label>
                                        Your name *
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={form.name}
                                            onChange={handleChange}
                                        />
                                    </label>

                                    <label>
                                        Phone number *
                                        <input
                                            type="tel"
                                            name="phone"
                                            inputMode="numeric"
                                            maxLength="10"
                                            placeholder="10-digit mobile number"
                                            value={form.phone}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>

                                <div className="form-row">
                                    <label>
                                        Interested in *
                                        <select
                                            name="course"
                                            value={form.course}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select a program</option>
                                            <option value="JEE Preparation">JEE Preparation</option>
                                            <option value="NEET Preparation">NEET Preparation</option>
                                            <option value="Foundation">Foundation</option>
                                            <option value="School Tuition">School Tuition</option>
                                        </select>
                                    </label>

                                    <label>
                                        Class / qualification
                                        <input
                                            type="text"
                                            name="qualification"
                                            placeholder="e.g. Class 11"
                                            value={form.qualification}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>

                                <label>
                                    Message <span>(optional)</span>
                                    <textarea
                                        name="message"
                                        rows="3"
                                        placeholder="Tell us what you're looking for..."
                                        value={form.message}
                                        onChange={handleChange}
                                    />
                                </label>

                                {error && <div className="form-error">{error}</div>}

                                <button className="btn btn-primary form-submit" type="submit">
                                    Submit Enquiry <ArrowIcon />
                                </button>

                                <small className="form-note">
                                    Your information is used only to respond to this enquiry.
                                </small>
                            </form>
                        </>
                    ) : (
                        <div className="success-state">
                            <div className="success-icon">✓</div>

                            <span className="form-step">ENQUIRY RECEIVED</span>

                            <h3>Thank you, {form.name.split(" ")[0]}.</h3>

                            <p>
                                Your counselling request has been submitted successfully.
                                Our academic counsellor will contact you shortly.
                            </p>

                            <button
                                className="btn btn-secondary"
                                onClick={() => {
                                    setSubmitted(false);
                                    setForm(initialForm);
                                }}
                            >
                                Submit Another Enquiry
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

/* =========================================================
   LOCATION
========================================================= */

function Location() {
    return (
        <section className="location-section">
            <div className="container location-grid">
                <div className="location-map">
                    <div className="map-grid" />

                    <div className="map-pin">
                        <span>⌖</span>
                    </div>

                    <div className="map-label">
                        <strong>{institute.name}</strong>
                        <span>{institute.address}</span>
                    </div>
                </div>

                <div className="location-content">
                    <span className="section-label">VISIT US</span>

                    <h2>Let's meet in person.</h2>

                    <p>
                        Visit our centre for counselling, batch information and a
                        conversation with our academic team.
                    </p>

                    <div className="contact-details">
                        <div>
                            <span>LOCATION</span>
                            <strong>{institute.address}</strong>
                        </div>

                        <div>
                            <span>CALL US</span>
                            <a href={`tel:${institute.phone.replace(/\s/g, "")}`}>
                                {institute.phone}
                            </a>
                        </div>

                        <div>
                            <span>WORKING HOURS</span>
                            <strong>{institute.hours}</strong>
                        </div>
                    </div>

                    <a
                        className="btn btn-primary"
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Get Directions <ArrowIcon />
                    </a>
                </div>
            </div>
        </section>
    );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer({ onEnquire }) {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#top" className="brand">
                            <span className="brand-mark">A</span>

                            <span>
                                <strong>{institute.name}</strong>
                                <small>ACADEMIC EXCELLENCE</small>
                            </span>
                        </a>

                        <p>
                            Structured preparation and personal mentorship for ambitious
                            students.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div>
                            <span>EXPLORE</span>
                            <a href="#programs">Programs</a>
                            <a href="#results">Results</a>
                            <a href="#faculty">Faculty</a>
                            <a href="#faq">FAQ</a>
                        </div>

                        <div>
                            <span>CONTACT</span>
                            <a href={`tel:${institute.phone.replace(/\s/g, "")}`}>
                                {institute.phone}
                            </a>
                            <a href={`mailto:${institute.email}`}>{institute.email}</a>
                            <a href="#enquiry" onClick={onEnquire}>
                                Admission Enquiry
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© 2026 {institute.name}. All rights reserved.</span>
                    <span>Learn. Prepare. Achieve.</span>
                </div>
            </div>
        </footer>
    );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
    function scrollToEnquiry() {
        document.getElementById("enquiry")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    return (
        <>
            <Navbar onEnquire={scrollToEnquiry} />

            <main>
                <Hero onEnquire={scrollToEnquiry} />
                <Stats />
                <Programs onEnquire={scrollToEnquiry} />
                <WhyApex />
                <Results />
                <Faculty onEnquire={scrollToEnquiry} />
                <Testimonials />
                <CTA onEnquire={scrollToEnquiry} />
                <FAQ />
                <LeadForm />
                <Location />
            </main>

            <Footer onEnquire={scrollToEnquiry} />

            <a
                className="floating-whatsapp"
                href={`https://wa.me/${institute.whatsapp}?text=Hello%20Apex%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses.`}
                target="_blank"
                rel="noreferrer"
                aria-label="Contact on WhatsApp"
            >
                <span>◉</span>
                <small>WhatsApp</small>
            </a>
        </>
    );
}