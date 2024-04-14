"use client";
import React, { useEffect, useState } from "react";
import SocialLinks from "./SocialLinks";

function EmailSection() {
  const [state, setState] = useState({
    confirm: false,
    loading: false,
  });
  useEffect(() => {
    setTimeout(
      () =>
        setState({
          ...state,
          confirm: false,
        }),
      4000
    );
  }, [state.loading]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.username.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    try {
      setState({
        ...state,
        loading: true,
      });
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw responseData;
      } else {
        setState({
          ...state,
          loading: false,
          confirm: true,
        });
        e.target.reset();
      }
    } catch (error) {
      console.error("API Error:", error.message);
    }
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-6 py-8 p-2 gap-4 md:p-8"
    >
      <div>
        <h5 className="text-5xl font-bold text-white my-2">Let's connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-wd">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <SocialLinks />
      </div>
      <div>
        <form onSubmit={submitHandler} className="flex flex-col gap-2">
          <label htmlFor="username" className="block text-white mb-2">
            Name
          </label>
          <input
            type="text"
            name="username"
            placeholder="Your first name.."
            className="block w-full px-3 py-2 border rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <label htmlFor="email" className="block text-white mb-1 mt-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="abc@google.com"
            className="block w-full px-3 py-2 border rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <label htmlFor="subject" className="block text-white mb-1 mt-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Just saying hi"
            className="block w-full px-3 py-2 border rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <label htmlFor="message" className="block text-white mb-1 mt-2">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Let's talk about..."
            className="block w-full px-3 py-2 border rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={state.loading}
          >
            {state.loading ? "Please wait..." : "Send Mail"}
          </button>
        </form>
        {state.confirm && (
          <p className="text-green-600 font-bold mt-4 bg-green-100 px-4 py-2 rounded-md shadow-md">
            Mail sent successfully
          </p>
        )}
      </div>
    </section>
  );
}

export default EmailSection;
