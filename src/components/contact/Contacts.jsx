"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from "react-hot-toast";

export default function Contacts() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  // 
  // const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const onSubmit = async (data) => {
    console.log(data, "hello")
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_WEB3FORMS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: data.name,
          email: data.email,
          message: data.message,
          phone: data.phone,
        }),
      });

      const result = await response.json();
      if (result) {
        toast.success("Thank you! Your message has been sent successfully.")
        reset();
      } else {
        toast.error("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Network error! Please check your internet connection and try again.");
    }

  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-16 max-w-6xl">

      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-base-content/60 text-sm sm:text-base max-w-md mx-auto mt-3 leading-relaxed">
          Have a project in mind or want to collaborate? Feel free to drop a message!
        </p>
        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">

        <div className="flex flex-col justify-between space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Have a project in mind? Let’s talk.</h3>
            <p className="text-base-content/70 text-base leading-relaxed">
              I’m currently open to new career opportunities, full-stack roles, and project collaborations. If you have an idea in mind or just want to say hi, feel free to drop a message — I’ll get back to you as soon as possible!
            </p>
          </div>
          <div className="space-y-4">
            {/* email */}
            <div className="flex items-center gap-4 bg-base-200/50 p-4 rounded-xl border border-base-content/5">
              <div className="p-3 bg-primary/10 text-primary rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-base-content/50 font-medium">Mail Me</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tanjidkhan.dev@gmail.com" className="text-sm sm:text-base font-semibold hover:text-primary transition-colors">tanjidkhan.dev@gmail.com</a>
              </div>
            </div>
            {/* WhatsApp*/}
            <div className="flex items-center gap-4 bg-base-200/50 p-4 rounded-xl border border-base-content/5">
              <div className="p-3 bg-green-500/10 text-green-500 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.636-1.023-5.115-2.884-6.978C16.53 1.899 14.053.87 11.417.87c-5.442 0-9.865 4.42-9.868 9.865-.001 1.649.499 3.255 1.447 4.845l-.993 3.623 3.712-.974zm12.357-5.321c-.329-.165-1.948-.962-2.247-1.071-.3-.11-.518-.165-.736.165-.218.33-.842 1.071-1.032 1.291-.19.22-.38.247-.709.083-.329-.165-1.389-.512-2.646-1.633-.977-.872-1.637-1.95-1.829-2.28-.192-.33-.02-.509.145-.672.149-.147.33-.385.495-.578.165-.193.22-.33.329-.55.11-.22.055-.413-.028-.578-.083-.165-.736-1.774-1.009-2.434-.266-.64-.539-.554-.736-.564-.19-.01-.408-.011-.626-.011-.218 0-.573.082-.873.413-.3.33-1.144 1.118-1.144 2.724 0 1.607 1.17 3.161 1.334 3.382.165.222 2.302 3.515 5.576 4.922.779.336 1.387.537 1.86.688.783.249 1.497.214 2.06.131.628-.092 1.948-.797 2.222-1.567.273-.769.273-1.43.192-1.567-.081-.138-.293-.22-.622-.385z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-base-content/50 font-medium">Chat on WhatsApp</p>
                <a
                  href="https://wa.me/01831562894"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-semibold hover:text-green-500 transition-colors"
                >
                  +880 1831562894
                </a>
              </div>
            </div>

            {/*  */}
            <div className="flex items-center gap-4 bg-base-200/50 p-4 rounded-xl border border-base-content/5">
              <div className="p-3 bg-primary/10 text-primary rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-base-content/50 font-medium">Location</p>
                <p className="text-sm sm:text-base font-semibold">Sirajganj, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* */}
          <div>
            <p className="text-sm font-bold text-base-content/40 uppercase tracking-wider mb-3">Follow Me</p>
            <div className="flex gap-4">
              {/* LinkedIn */}
              <a href="www.linkedin.com/in/md-tanjid-khan" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-circle btn-primary hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/mdtanjidkhan" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-circle btn-neutral">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="bg-base-200/40 backdrop-blur-md border border-base-content/10 p-6 sm:p-8 rounded-3xl shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* name input */}
            <div className="form-control w-full">
              <label className="label"><span className="label-text font-semibold">Your Name</span></label>
              <input
                type="text"
                placeholder="John Doe"
                className={`input input-bordered w-full bg-base-100 rounded-xl focus:outline-primary ${errors.name ? 'border-error' : ''}`}
                {...register("name", { required: "Name is required" })}

              />
              {errors.name && <span className="text-error text-xs mt-1">{errors.name.message}</span>}
            </div>

            {/* email */}
            <div className="form-control w-full">
              <label className="label"><span className="label-text font-semibold">Your Email</span></label>
              <input
                type="email"
                placeholder="john@example.com"
                className={`input input-bordered w-full bg-base-100 rounded-xl focus:outline-primary ${errors.email ? 'border-error' : ''}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <span className="text-error text-xs mt-1">{errors.email.message}</span>}
            </div>
            {/*  */}
            <div className="form-control w-full">
              <label className="label"><span className="label-text font-semibold">Your Phone Number</span></label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className={`input input-bordered w-full bg-base-100 rounded-xl focus:outline-primary ${errors.phone ? 'border-error' : ''}`}
                {...register("phone",
                  {
                    pattern: {
                      value: /^[0-9-+]{11,14}$/,
                      message: "Please enter a valid phone number"
                    }
                  })}

              />
              {errors.phone && <span className="text-error text-xs mt-1">{errors.phone.message}</span>}
            </div>

            {/*  */}
            <div className="form-control w-full">
              <label className="label"><span className="label-text font-semibold">Message</span></label>
              <textarea
                rows="4"
                placeholder="Type your message here..."
                className={`textarea textarea-bordered w-full bg-base-100 rounded-xl focus:outline-primary text-base ${errors.message ? 'border-error' : ''}`}
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 10, message: "Message should be at least 10 characters long" }
                })}
              ></textarea>
              {errors.message && <span className="text-error text-xs mt-1">{errors.message.message}</span>}
            </div>

            {/*  */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full rounded-xl normal-case font-bold shadow-lg gap-2 mt-2"
            >
              {isSubmitting ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>

  );
}