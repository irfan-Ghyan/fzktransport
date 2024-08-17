'use client';

import React, { useState } from 'react';
import { supabase } from '../../../supabase'; 

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
  
      const { data, error } = await supabase
        .from('newsletter')
        .insert([{ email: query }]);

      if (error) {
        throw error;
      }

      console.log('Email submitted:', data);

      // Clear the input field after submission and set submission state
      setQuery('');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting email:', error);
      setErrorMessage('There was an error submitting your email. Please try again.');
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value === '') {
      setErrorMessage('');
    }
  };

  return (
    <div className="container mx-auto max-w-full overflow-hidden py-[109px] px-4 md:px-0">
      <h1 className="text-white font-orbitron text-[24px] md:text-[42px] text-center font-black mb-2">
        {isSubmitted ? 'THANK YOU FOR SUBSCRIBING' : 'SIGN UP TO OUR NEWSLETTER TO RECEIVE A 10% COUPON'}
      </h1>
      <p className="text-white font-jura text-[14px] md:text-[18px] font-bold text-center mb-6">
        {isSubmitted ? 'Join our community of codemod champions & migration experts.' : 'Stay updated with our latest news and offers.'}
      </p>
      {errorMessage && (
        <p className="text-red-500 text-center mb-6">{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col items-center space-y-4">
        <div className='flex w-full md:w-[496px] h-[44px] justify-center'>
          <input
            type="email"
            value={query}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="button-slanted text-white w-[240px] md:w-[423px] h-[44px] font-jura font-normal lg:font-medium bg-[#2E2545] rounded-tl-lg pl-[10px] md:pl-[54px] pr-[10px] py-[13px] mr-[-10px] lg:mr-[-30px] focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
            required
          />
          <button
            type="submit"
            className="button-slanted w-[100px] md:w-[158px] h-[44px] font-jura font-bold text-white bg-gradient-to-r from-[#7E51F8] to-[#D00746] transition duration-300 rounded-tl-lg rounded-br-lg z-10"
          >
            <span className='button-slanted-content'>SUBMIT</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
