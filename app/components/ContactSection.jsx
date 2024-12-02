"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };

        try {
            const response = await fetch(endpoint, options);

            // Check if the response is successful
            if (!response.ok) {
                const errorData = await response.json(); // Get error details from response
                setErrorMessage(errorData.error || "An error occurred while sending the message.");
                throw new Error(errorData.error || 'Failed to send message');
            }

            const resData = await response.json();

            if (resData.error) {
                console.error('Error:', resData.error);
                setErrorMessage(resData.error); // Show error from API if any
            } else {
                console.log("Message sent:", resData.message);
                setEmailSubmitted(true);
                setErrorMessage(''); // Clear any previous errors if successful
            }
        } catch (error) {
            console.error('Error during fetch:', error); // Log the error in the console
            setErrorMessage(error.message); // Display error message to the user
        }
    };

    return (
        <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
            <div className="z-10">
                <h5 className="text-2xl font-bold text-secondary my-2">Let&apos;s Connect</h5>
                <p className="text-txt_primary mb-4 max-w-md">
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/your-username">
                        <Image src="/github-icon.svg" alt="Github Icon" width={45} height={45} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/your-username">
                        <Image src="/linkedin-icon.svg" alt="Linkedin Icon" width={45} height={45} />
                    </Link>
                    <Link href="https://wa.me/your-phone-number">
                        <Image src="/whatsapp-icon.svg" alt="Whatsapp Icon" width={45} height={45} />
                    </Link>
                </div>
            </div>
            <div>
                {emailSubmitted ? (
                    <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
                ) : (
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                                Your email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                                Subject
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Just saying hi"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary hover:bg-ternary duration-300 text-black font-bold py-2.5 px-5 rounded-lg w-full"
                        >
                            Send Message
                        </button>
                    </form>
                )}
                {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
            </div>
        </section>
    );
};

export default ContactSection;
