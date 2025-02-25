"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    setEmailSubmitted(false); // Reset success state
    setErrorMessage(""); // Clear previous errors

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
      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to send message");
      }

      console.log("Message sent:", resData.message);
      setEmailSubmitted(true); // Show success
      e.target.reset(); // Reset form fields
    } catch (error) {
      console.error("Error during fetch:", error);
      setErrorMessage(
        error.message || "An error occurred while sending the message."
      );
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <section
      id="contact"
      className="py-12 lg:py-16 bg-background text-foreground relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Side - Connect */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h5 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 lg:mb-6 leading-tight">
            Let’s Connect
          </h5>
          <p className="text-txt_primary text-lg sm:text-xl max-w-md leading-relaxed mb-6">
            I’m currently looking for new opportunities—my inbox is always open.
            Whether you have a question or just want to say hi, I’ll get back to
            you!
          </p>
          <div className="socials flex flex-row gap-4">
            {[
              {
                href: "https://github.com/smbhathiya",
                src: "/github-icon.svg",
                alt: "Github",
              },
              {
                href: "https://www.linkedin.com/in/bhathiya-lakshan-91579722a/",
                src: "/linkedin-icon.svg",
                alt: "LinkedIn",
              },
              {
                href: "https://wa.me/+94768941816",
                src: "/whatsapp-icon.svg",
                alt: "WhatsApp",
              },
            ].map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={social.href} target="_blank">
                  <Image
                    src={social.src}
                    alt={`${social.alt} Icon`}
                    width={40}
                    height={40}
                    className="text-primary hover:text-secondary transition-colors duration-300"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col"
        >
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="text-foreground text-sm sm:text-base font-medium mb-2 block"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-box_primary border border-primary/30 text-foreground text-sm sm:text-base rounded-lg w-full p-3 placeholder-txt_secondary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                placeholder="john@example.com"
                disabled={isLoading}
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="text-foreground text-sm sm:text-base font-medium mb-2 block"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-box_primary border border-primary/30 text-foreground text-sm sm:text-base rounded-lg w-full p-3 placeholder-txt_secondary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                placeholder="Just saying hi"
                disabled={isLoading}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-foreground text-sm sm:text-base font-medium mb-2 block"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-box_primary border border-primary/30 text-foreground text-sm sm:text-base rounded-lg w-full p-3 placeholder-txt_secondary h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                placeholder="Let's talk about..."
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              className={`font-semibold text-base sm:text-lg py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center ${
                isLoading
                  ? "bg-primary/70 cursor-not-allowed"
                  : emailSubmitted
                  ? "bg-green-500 text-foreground"
                  : errorMessage
                  ? "bg-red-500 text-foreground"
                  : "bg-primary text-foreground hover:bg-secondary hover:shadow-[0_0_12px_rgba(255,179,71,0.5)]"
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin w-5 h-5 text-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Loading
                </span>
              ) : emailSubmitted ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Success
                </span>
              ) : errorMessage ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Failed
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
