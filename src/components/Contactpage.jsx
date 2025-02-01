import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#130726] to-[#1a0933] flex items-center justify-center p-6">
      <div className="w-full mt-15 mb-15 max-w-md bg-white text-[#130726] p-8 shadow-inner ring-1 ring-[#1a0933] rounded-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-[#130726] text-opacity-80 text-sm mt-2">We'd love to hear from you!</p>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block font-medium">Full Name</label>
            <input 
              id="name" 
              required 
              className="w-full bg-white text-[#130726] text-sm border border-[#1a0933] p-3 rounded shadow-md focus:ring-[#1a0933] focus:ring-2 outline-none"
              placeholder="Enter your full name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block font-medium">Email</label>
            <input 
              id="email" 
              type="email" 
              required 
              className="w-full bg-white text-[#130726] text-sm border border-[#1a0933] p-3 rounded shadow-md focus:ring-[#1a0933] focus:ring-2 outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="block font-medium">Phone Number</label>
            <input 
              id="phone" 
              type="tel" 
              required 
              className="w-full bg-white text-[#130726] text-sm border border-[#1a0933] p-3 rounded shadow-md focus:ring-[#1a0933] focus:ring-2 outline-none"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="college" className="block font-medium">College/Institution</label>
            <input 
              id="college" 
              required 
              className="w-full bg-white text-[#130726] text-sm border border-[#1a0933] p-3 rounded shadow-md focus:ring-[#1a0933] focus:ring-2 outline-none"
              placeholder="Enter your college name"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#1a0933] hover:bg-[#130726] text-white text-sm font-bold py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
