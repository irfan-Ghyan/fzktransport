// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';

// const Corprate = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Simulate a successful submission
//     setSubmitted(true);
//   };

//   return (
//     <div className='py-[60px]'>
//       <div className='mb-10 text-center'>
//         <h1 className='text-[32px] md:text-[54px] text-[#0c0c0c] font-bold font-orbitron'>
//           CONTACT US
//         </h1>
//         <p className='text-[14px] md:text-[18px] text-[#0c0c0c] font-bold font-jura mt-6'>
//           We are always here to assist with any questions or concerns you may have.
//         </p>
//         <p className='text-[14px] md:text-[24px] text-[#0c0c0c] font-bold font-jura mt-6'>
//            +971 55 605 0153 - +971 52 493 1838
//         </p>
//       </div>
//       <div className='flex justify-center'>

//         <div className="w-full max-w-md p-8 bg-transparent ">
//           {submitted ? (
//             <p className="text-center text-green-600">Your message has been sent successfully.</p>
//           ) : (
//             <form action="https://getform.io/f/ayvpldxb" method="POST"  onSubmit={handleSubmit} >
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-[#0c0c0c] font-bold mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-[#0c0c0c] font-bold mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="message" className="block text-[#0c0c0c] font-bold mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 bg-transparent rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                   rows="5"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full cursor-pointer px-2 py-[7px] lg:py-[13px] md:py-[13px] font-jura font-normal md:font-bold bg-gradient-to-r from-[#F56545] to-[#ff0a01] text-white ml-2 transition duration-300 flex items-center justify-center relative overflow-hidden rounded-full "
//               >
//                 Send Message
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Corprate;


import React, { useState } from 'react';

const Corprate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='py-[60px]'>
      <div className='mb-10 text-center'>
        <h1 className='text-[32px] md:text-[54px] text-[#0c0c0c] font-bold font-orbitron'>
          CONTACT US
        </h1>
        <p className='text-[14px] md:text-[18px] text-[#0c0c0c] font-bold font-jura mt-6'>
          We are always here to assist with any questions or concerns you may have.
        </p>
        <p className='text-[14px] md:text-[24px] text-[#0c0c0c] font-bold font-jura mt-6'>
           +971 55 605 0153 - +971 52 493 1838
        </p>
      </div>
      <div className='flex justify-center'>
        <div className="w-full max-w-md p-8 bg-transparent ">
          {submitted ? (
            <p className="text-center text-green-600">Your message has been sent successfully.</p>
          ) : (
            <form
              action="https://getform.io/f/ayvpldxb"
              method="POST"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-[#0c0c0c] font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-[#0c0c0c] font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-[#0c0c0c] font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 bg-transparent rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  rows="5"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer px-2 py-[7px] lg:py-[13px] md:py-[13px] font-jura font-normal md:font-bold bg-gradient-to-r from-[#F56545] to-[#ff0a01] text-white ml-2 transition duration-300 flex items-center justify-center relative overflow-hidden rounded-full "
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Corprate;
