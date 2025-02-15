import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { Container, ToastContainer } from "react-bootstrap";
import Particle from "../Particle";
// import 'react-toastify/dist/ReactToastify.css';

const ContactSkills = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_56i6sct", // Replace with your EmailJS Service ID
                "template_n3dblxb", // Replace with your EmailJS Template ID
                form.current,
                "43V1b7MEoPiuxvrOz" // Replace with your EmailJS Public Key
            )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.error("Error sending email:", error.text);
                    alert("Failed to send message.");
                }
            );

        // Reset form fields after submission
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <Container fluid className="about-section ">
            <Particle />
            <section className="down-box w-50 mx-auto" id="contact">
                <div className="contactSkills">
                    {/* Contact Form */}
                    <div className="contact-info">
                        <div className="main-text text-center">
                            <h2 className="heading">Contact Me</h2>
                            <span>Get in touch with me</span>
                        </div>
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                {/* First Name */}
                                <div className="col-md-6">
                                    <label htmlFor="firstName" className="form-label">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="form-control bg-transparent text-white"
                                        placeholder="Enter your first name"
                                        required
                                    />
                                </div>
                                {/* Last Name */}
                                <div className="col-md-6">
                                    <label htmlFor="lastName" className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="form-control bg-transparent text-white"
                                        placeholder="Enter your last name"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="form-control bg-transparent text-white"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* Subject */}
                            <div className="mb-3">
                                <label htmlFor="subject" className="form-label">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="form-control bg-transparent text-white"
                                    placeholder="Enter your subject"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="form-control bg-transparent text-white"
                                    placeholder="Write your message here"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary w-100">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </section>
        </Container>
    );
};

export default ContactSkills;
