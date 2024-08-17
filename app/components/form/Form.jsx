// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     companyName: '',
//     phone: '',
//     email: '',
//     type: '',
//     hearAboutUs: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.firstName) newErrors.firstName = 'First name is required';
//     if (!formData.lastName) newErrors.lastName = 'Last name is required';
//     if (!formData.companyName) newErrors.companyName = 'Company name is required';
//     if (!formData.phone) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = 'Phone number must be 10 digits';
//     }
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email address is invalid';
//     }
//     if (!formData.type) newErrors.type = 'Trip type is required';
//     if (!formData.hearAboutUs) newErrors.hearAboutUs = 'This field is required';

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log('Form data:', formData);
//       setIsSubmitted(true);

//       setFormData({
//         firstName: '',
//         lastName: '',
//         companyName: '',
//         phone: '',
//         email: '',
//         type: '',
//         hearAboutUs: '',
//         message: '',
//       });
//     }
//   };

//   return (
//     <div className='flex items-center justify-center py-[20px] lg:py-[40px] xl:py-[80px]'>
//       <div className="w-full max-w-2xl px-4">
//         <h2 className="text-[32px] lg:text-[42px] text-white font-black font-orbitron">Get In Touch Today to Book Your Educational Trip</h2>
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className='xl:flex justify-between'>
//             <div>
//               <label htmlFor="firstName" className="block text-[14px] font-medium font-jura text-white py-2">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="Enter your first name"
//                 id="firstName"
//                 className="mt-1 p-4 block w-full xl:w-[316px] bg-[#2C1864C2] py-[10px] text-[14px] font-medium font-jura placeholder-white placeholder-opacity-20"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
//             </div>
//             <div className='xl:ml-[14px]'>
//               <label htmlFor="lastName" className="block text-[14px] font-medium font-jura text-white py-2">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Enter your last name"
//                 id="lastName"
//                 className="mt-1 p-4 block w-full xl:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-medium font-jura placeholder-white placeholder-opacity-20"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
//             </div>
//           </div>

//           <div className='xl:flex justify-between'>
//             <div>
//               <label htmlFor="companyName" className="block text-[14px] font-medium font-jura text-white py-2">
//                 Company Name
//               </label>
//               <input
//                 type="text"
//                 name="companyName"
//                 placeholder="Enter your company name"
//                 id="companyName"
//                 className="mt-1 p-4 block w-full xl:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-medium font-jura placeholder-white placeholder-opacity-20"
//                 value={formData.companyName}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.companyName && <p className="text-red-500 text-xs">{errors.companyName}</p>}
//             </div>
//             <div className='xl:ml-[14px]'>
//               <label htmlFor="phone" className="block text-[14px] font-medium font-jura text-white py-2">
//                 Phone
//               </label>
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Enter your phone"
//                 id="phone"
//                 className="mt-1 p-4 block w-full xl:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-medium font-jura placeholder-white placeholder-opacity-20"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
//             </div>
//           </div>

//           <div className='xl:flex justify-between'>
//             <div>
//               <label htmlFor="email" className="block text-[14px] font-medium font-jura text-white py-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 id="email"
//                 className="mt-1 p-4 block w-full xl:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-medium font-jura placeholder-white placeholder-opacity-20"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
//             </div>
//             <div className='xl:ml-[14px]'>
//               <label htmlFor="type" className="block text-[14px] font-medium font-jura text-white py-2">
//                 Trip Type
//               </label>
//               <select
//                 name="type"
//                 id="type"
//                 className="mt-1 p-4 block w-full xl:w-[316px] bg-[#2C1864C2] py-[10px] text-[14px] font-medium text-white font-jura placeholder-white placeholder-opacity-20"
//                 value={formData.type}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" className='text-[14px] font-medium w-full xl:w-[316px] font-jura text-white placeholder-white'>Select type</option>
//                 <option value="Type 1" className='text-[14px] w-full lg:w-[316px] font-medium font-jura text-white placeholder-white'>Type 1</option>
//                 <option value="Type 2" className='text-[14px] w-full lg:w-[316px] font-medium font-jura text-white placeholder-white'>Type 2</option>
//                 <option value="Type 3" className='text-[14px] w-full lg:w-[316px] font-medium font-jura text-white placeholder-white'>Type 3</option>
//               </select>
//               {errors.type && <p className="text-red-500 text-xs">{errors.type}</p>}
//             </div>
//           </div>

//           <div>
//             <label htmlFor="hearAboutUs" className="block text-[14px] w-full font-medium font-jura text-white placeholder-white py-2">
//               How did you hear about us?
//             </label>
//             <select
//               name="hearAboutUs"
//               id="hearAboutUs"
//               className="mt-1 p-4 block w-full lg:w-[316px] xl:w-[646px] bg-[#2C1864C2] text-white py-[10px]"
//               value={formData.hearAboutUs}
//               onChange={handleChange}
//               required
//             >
//               <option value="" className='text-[14px] font-medium font-jura text-white w-full xl:w-[316px] placeholder-white '>Select an option</option>
//               <option value="Option 1" className='text-[14px] w-full lg:w-[316px] font-medium font-jura text-white placeholder-white'>Option 1</option>
//               <option value="Option 2" className='text-[14px] w-full lg:w-[316px] font-medium font-jura text-white placeholder-white'>Option 2</option>
//               <option value="Option 3" className='text-[14px] w-full lg:w-[316px] font-medium font-jura text-white placeholder-white'>Option 3</option>
//             </select>
//             {errors.hearAboutUs && <p className="text-red-500 text-xs">{errors.hearAboutUs}</p>}
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-[14px] font-medium font-jura text-white py-2">
//               Additional Informationf
//             </label>
//             <textarea
//               name="message"
//               id="message"
//               placeholder="Select event type"
//               rows="4"
//               className="mt-1 p-4 block w-full lg:w-[316px] xl:w-[646px] bg-[#2C1864C2] py-[10px] text-[14px] font-medium font-jura text-white placeholder-white placeholder-opacity-20"
//               value={formData.message}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div className='xl:flex justify-between py-4'>
//             <div className="w-full lg:flex justify-between">
//               <div className='flex py-4'>
//                 <input
//                   type="radio"
//                   className="square-radio form-radio"
//                   name="contactMethod"
//                   value="phone"
//                   checked={formData.contactMethod === 'phone'}
//                   onChange={handleChange}
//                 />
//                 <span className="ml-2 text-[14px] font-medium font-jura text-white">Vestibulum faucibus odio vitae arcu auctor lectus.</span>
//               </div>
//               <div>
//                 <button type="submit" className='button-slanted text-[14px] font-medium font-jura text-white w-[200px] lg:w-[233px] h-[44px] buton px-8 bg-gradient-to-r from-[#7E51F8] to-[#D00746] transition duration-300 rounded-tl-lg rounded-br-lg border-0'>
//                   <span className='button-slanted-content'>SUBMIT</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {isSubmitted && (
//              <div className="bg-[#2AC67029] text-[#2AC670] p-4 rounded-lg mt-4 flex">
//              <Image src="/assets/images/success-submit.png" alt="alt" height={12} width={12} className='w-[16px] h-[16px] mt-[4px]'/>
//             <p className='ml-[8px]'>Your form has been successfully submitted!</p>
//           </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { supabase } from '../../../supabase';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    phone: '',
    email: '',
    type: '',
    hearAboutUs: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.type) newErrors.type = 'Trip type is required';
    if (!formData.hearAboutUs) newErrors.hearAboutUs = 'This field is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);

      try {
        const { data, error } = await supabase
          .from('contacts')
          .insert([
            {
              first_name: formData.firstName,
              last_name: formData.lastName,
              company_name: formData.companyName,
              phone: formData.phone,
              email: formData.email,
              trip_type: formData.type,
              hear_about_us: formData.hearAboutUs,
              message: formData.message,
            },
          ]);

        if (error) {
          throw error;
        }

        console.log('Data:', data);
        setIsSubmitted(true);

        setFormData({
          firstName: '',
          lastName: '',
          companyName: '',
          phone: '',
          email: '',
          type: '',
          hearAboutUs: '',
          message: '',
        });
      } catch (error) {
        console.error('Error adding data:', error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center py-[20px] lg:py-[40px] xl:py-[80px]">
      <div className="w-full max-w-2xl px-4">
        <h2 className="text-[32px] lg:text-[42px] text-white font-black font-orbitron">
          Get In Touch Today to Book Your Educational Trip
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="xl:flex justify-between">
            <div>
              <label
                htmlFor="firstName"
                className="block text-[14px] font-medium font-jura text-white py-2 placeholder-white placeholder-opacity-20"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                id="firstName"
                className="mt-1 p-4 block w-full xl:w-[316px] bg-[#2C1864C2] text-white py-[10px] text-[14px] font-medium font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs">{errors.firstName}</p>
              )}
            </div>
            <div className="xl:ml-[14px]">
              <label
                htmlFor="lastName"
                className="block text-[14px] font-medium font-jura text-white py-2"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                id="lastName"
                className="mt-1 p-4 block w-full xl:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-medium font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="xl:flex justify-between">
            <div>
              <label
                htmlFor="companyName"
                className="block text-[14px] font-medium font-jura text-white py-2"
              >
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter your company name"
                id="companyName"
                className="mt-1 p-4 block w-full xl:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-medium font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
              {errors.companyName && (
                <p className="text-red-500 text-xs">{errors.companyName}</p>
              )}
            </div>
            <div className="xl:ml-[14px]">
              <label
                htmlFor="phone"
                className="block text-[14px] font-medium font-jura text-white py-2"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone"
                id="phone"
                className="mt-1 p-4 block w-full xl:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-medium font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="xl:flex justify-between">
            <div>
              <label
                htmlFor="email"
                className="block text-[14px] font-medium font-jura text-white py-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                id="email"
                className="mt-1 p-4 block w-full xl:w-[316px] bg-[#2C1864C2] py-[10px] text-white text-[14px] font-medium font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>
            <div className="xl:ml-[14px]">
              <label
                htmlFor="type"
                className="block text-[14px] font-medium font-jura text-white py-2"
              >
                Trip Type
              </label>
              <select
                name="type"
                id="type"
                className="mt-1 p-4 block w-full xl:w-[316px] bg-[#2C1864C2] py-[10px] text-[14px] font-medium text-white font-jura placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option
                  value=""
                  className="text-[14px] font-medium w-full xl:w-[316px] font-jura text-white placeholder-white"
                >
                  Select type
                </option>
                <option
                  value="Type 1"
                  className="text-[14px] w-full lg:w-[316px] font-medium font-jura text-white placeholder-white"
                >
                  Type 1
                </option>
                <option
                  value="Type 2"
                  className="text-[14px] w-full lg:w-[316px] font-medium font-jura text-white placeholder-white"
                >
                  Type 2
                </option>
                <option
                  value="Type 3"
                  className="text-[14px] w-full lg:w-[316px] font-medium font-jura text-white placeholder-white"
                >
                  Type 3
                </option>
              </select>
              {errors.type && (
                <p className="text-red-500 text-xs">{errors.type}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="hearAboutUs"
              className="block text-[14px] w-full font-medium font-jura text-white placeholder-white py-2"
            >
              How did you hear about us?
            </label>
            <select
              name="hearAboutUs"
              id="hearAboutUs"
              className="mt-1 p-4 block w-full lg:w-[316px] xl:w-[646px] bg-[#2C1864C2] text-white py-[10px] focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
              value={formData.hearAboutUs}
              onChange={handleChange}
              required
            >
              <option
                value=""
                className="text-[14px] font-medium font-jura text-white w-full xl:w-[316px] placeholder-white "
              >
                Select an option
              </option>
              <option
                value="Option 1"
                className="text-[14px] w-full lg:w-[316px] font-medium font-jura text-white placeholder-white"
              >
                Option 1
              </option>
              <option
                value="Option 2"
                className="text-[14px] w-full lg:w-[316px] font-medium font-jura text-white placeholder-white"
              >
                Option 2
              </option>
              <option
                value="Option 3"
                className="text-[14px] w-full lg:w-[316px] font-medium font-jura text-white placeholder-white"
              >
                Option 3
              </option>
            </select>
            {errors.hearAboutUs && (
              <p className="text-red-500 text-xs">{errors.hearAboutUs}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-[14px] font-medium font-jura text-white py-2"
            >
              Additional Information
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Select event type"
              rows="4"
              className="mt-1 p-4 block w-full lg:w-[316px] xl:w-[646px] bg-[#2C1864C2] py-[10px] text-[14px] font-medium font-jura text-white placeholder-white placeholder-opacity-20 focus:outline-none focus:ring-0 focus:bg-[#1a1a2e] focus:text-[#ffffff]"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="xl:flex justify-between py-4">
            <div className="w-full lg:flex justify-between">
              <div className="flex py-4">
                <input
                  type="radio"
                  className="square-radio form-radio"
                  name="contactMethod"
                  value="phone"
                  checked={formData.contactMethod === 'phone'}
                  onChange={handleChange}
                />
                <span className="ml-2 text-[14px] font-medium font-jura text-white">
                  Vestibulum faucibus odio vitae arcu auctor lectus.
                </span>
              </div>
              <div>
                <button
                  type="submit"
                  className="button-slanted text-[14px] font-medium font-jura text-white w-[200px] lg:w-[233px] h-[44px] buton px-8 bg-gradient-to-r from-[#7E51F8] to-[#D00746] transition duration-300 rounded-tl-lg rounded-br-lg border-0"
                >
                  <span className="button-slanted-content">SUBMIT</span>
                </button>
              </div>
            </div>
          </div>

          {isSubmitted && (
            <div className="bg-[#2AC67029] text-[#2AC670] p-4 rounded-lg mt-4 flex">
              <Image
                src="/assets/images/success-submit.png"
                alt="alt"
                height={12}
                width={12}
                className="w-[16px] h-[16px] mt-[4px]"
              />
              <p className="ml-[8px]">
                Your form has been successfully submitted!
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
