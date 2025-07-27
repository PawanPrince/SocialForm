import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3n2jnvf", "template_ectclsf", form.current, "mI3epPY0XT1CdnS_Y")
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div className="flex items-center border rounded-lg px-4 py-2">
            <User className="text-gray-500 mr-2" />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full border-none outline-none"
            />
          </div>
          <div className="flex items-center border rounded-lg px-4 py-2">
            <Mail className="text-gray-500 mr-2" />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full border-none outline-none"
            />
          </div>
          <div className="flex items-start border rounded-lg px-4 py-2">
            <MessageSquare className="text-gray-500 mr-2 mt-1" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full border-none outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center items-center bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            <Send className="mr-2" size={18} />
            Send Message
          </button>
        </form>

        {status === "success" && (
          <div className="flex items-center justify-center text-green-600 mt-2">
            <CheckCircle className="mr-2" /> Message sent successfully!
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center justify-center text-red-600 mt-2">
            <AlertCircle className="mr-2" /> Something went wrong. Try again.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
