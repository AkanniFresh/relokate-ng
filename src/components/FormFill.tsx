import React,{useState } from 'react'
import { Link } from 'wouter'

const FormFill = () => {
  const [formStatus, setFormStatus] = useState<'failed' | 'sending' | 'sent' | undefined>()

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setFormStatus('sending')
      const url = 'https://formspree.io/f/myzeqlyj'

      const formData = new FormData(e.currentTarget);
      const urlEncodedData = new URLSearchParams();
      
      formData.forEach((value, key) => {
        urlEncodedData.append(key, value.toString());
      });

      const response = await fetch(
        url, {
          method: "POST",
          body: urlEncodedData.toString(),
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "accept": "application/json"
          }
        }
      )

      if (response.ok && response.status === 200) {
        setFormStatus('sent')
        const body = await response.json()
        console.log(body)
      }
    } catch (error: any) {
      setFormStatus('failed')
      alert("Error occurred, try again");
    }
    
  }

  const minDateString = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')

    const dateStr = `${year}-${month}-${day}`
    console.log(dateStr)
    return dateStr
  }

  if (formStatus === 'sent') {
    return (
      <div className='bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4 mx-auto my-10'>
        <div className='flex flex-col items-center justify-center w-full'>
          <div className='my-4'>
          <img className='w-20' src="./logos/Reliable.gif" alt="" />
          </div>

          <div className='text-center'>

            <h2 className='text-lg font-bold'>Your booking has been sent successfully</h2>
            <p className='text-gray-600'>You'll hear from us soon</p>
            <p className='text-gray-600'>Thank you for using our service</p>

          </div>
          <Link href='/home'>
          <a>
          <button
          className="bg-[#203864] text-white px-4 py-2 rounded hover:bg-[#203864]/90 transition text-sm my-6">Go Back Home</button>
          </a>
          </Link>
        
        </div>
      </div>
    )
  }


  return (
    <form id='form-fill' action='https://formspree.io/f/myzeqlyj' method='POST'
      className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl space-y-4 mx-auto" onSubmit={(e) => submitHandler(e)}>
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Book an appointment
      </h2>
      <p className="text-md font-semibold text-center text-gray-800">
        It's only take a few minutes
      </p>

      <div className='flex flex-col md:flex-row lg:flex-row justify-between gap-y-4'>

      <div>
        <label htmlFor="name" className="block text-gray-700 mb-1">
          Name
        </label>
        <input
        placeholder='John Doe'
          type="text"
          id="name"
          name="name"
         
          className="w-full md:w-[230px] lg:w-[230px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#203864]"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 mb-1">
          Email
        </label>
        <input
          placeholder='example@gmail.com'
          type="email"
          id="email"
          name="email"
        
          className="w-full md:w-[230px] lg:w-[230px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#203864]"
          required
        />
      </div>
      </div>

      <div className='flex flex-col md:flex-row lg:flex-row justify-between gap-y-4'>

      <div>
        <label htmlFor="phone" className="block text-gray-700 mb-1">
          Phone
        </label>
        <input
          placeholder='+23455554444'
          type="number"
          id="phone"
          name="phone"
        
          className="w-full md:w-[230px] lg:w-[230px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#203864]"
          required
        />
      </div>

      <div>
        <label htmlFor="language" className="block text-gray-700 mb-1">
          Preferred Language
        </label>
        <select
          id="language"
          name="language"
          className="w-full md:w-[230px] lg:w-[230px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#203864]"
          required
        >
          <option value="" disabled>
            Available Languages
          </option>
          <option value="English">English</option>
          <option value="Yoruba">Yoruba</option>
          <option value="Igbo" disabled>Igbo</option>
          <option value="Hausa" disabled>Hausa</option>
        </select>
      </div>

      </div>

      <div className='flex flex-col md:flex-row lg:flex-row justify-between gap-y-4'>

      <div>
        <label htmlFor="services" className="block text-gray-700 mb-1">
          Services
        </label>
        <select
          id="services"
          name="services"
          className="w-full md:w-[230px] lg:w-[230px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#203864]"
          required
        >
          {/* <option value="" disabled>
            Available Languages
          </option> */}
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="Tour">Tour</option>
          <option value="Scholarship">Scholarship</option>
          <option value="Document(s) Review">Document(s) Review</option>
          <option value="Statement of Purpose">Statement of Purpose(SOP)</option>
          <option value="IELTS Prep">IELTS Preparation</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="channel" className="block text-gray-700 mb-1">
          Meeting Channel
        </label>
        <select
          id="channel"
          name="channel"
          className="w-full md:w-[230px] lg:w-[230px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#203864]"
          required
        >
          {/* <option value="" disabled>
            Available Languages
          </option> */}
          <option value="Whatsapp">Whatsapp</option>
          <option value="Zoom">Zoom</option>
          <option value="Google Meet">Google Meet</option>
        </select>
      </div>
      </div>


      <div className='flex flex-col md:flex-row lg:flex-row justify-between gap-y-4'>

      <div>
      <label htmlFor="date" className="block text-gray-700 mb-1">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          min={minDateString()}
        
          className="!w-full md:w-[230px] lg:w-[230px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#203864]"
          required
        />
      </div>
      
      <div>
      <label htmlFor="time" className="block text-gray-700 mb-1">
          Time
        </label>
        <input
        placeholder='e.g 2:00 PM'
          type="text"
          id="time"
          name="time"
         
          className="!w-full md:w-[230px] lg:w-[230px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#203864]"
          required
        />
      </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 mb-1 mt-5">
          Additional Message
        </label>
        <textarea
          placeholder="Do you have any additional info you'll like us to know about? if yes kindly share"
          id="text"
          name="text"
          className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#203864]"
         >
          </textarea>
      </div>

        <p className='mt-4 text-sm text-gray-600 font-bold'>Kindly note that booking a physical or virtual consultation will attract a fee of #5,000 naira</p>
      

      <button
        type="submit"
        className={
          `flex gap-2 justify-center items-center w-full bg-[#203864] text-white py-2 rounded-lg hover:bg-[#203864]/90 transition duration-300 ${formStatus === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}`
        }
      >
        {
          formStatus === 'sending' && (
            <svg
              className="animate-spin h-5 w-5 text-white"
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
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )
        }
        {
          formStatus === "failed" ?
          "Submit Again"
          :
          formStatus === "sending" ?
          "Sending..."
          :
          "Submit"
        }
      </button>
    </form>
  )
}

export default FormFill