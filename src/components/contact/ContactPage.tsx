import { useRef, useState } from "react";
import { sendEmail } from "../services/email";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!form.current) return;

    try {
      await sendEmail(form.current);
      form.current.reset();
      setIsSent(true);
    } catch (error) {
      console.error(error);
    }

    setIsSubmitting(false);
    setTimeout(() => {
      setIsSent(false);
    }, 3500);
    event.currentTarget.reset();
  };

  return (
    <section className='py-16 px-4 md:px-6 lg:px-8 bg-base-100'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-8'>Get in Touch :)</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <form ref={form} onSubmit={handleSubmit} className='space-y-4'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text text-lg'>Your Name</span>
                </label>
                <input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  className='input input-bordered w-full'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text text-lg'>Your Email</span>
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='Your Email'
                  className='input input-bordered w-full'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text text-lg'>Your Message</span>
                </label>
                <textarea
                  placeholder='Your Message'
                  name='message'
                  className='textarea textarea-bordered w-full min-h-[150px]'
                  required
                ></textarea>
              </div>
              <button
                type='submit'
                className={`btn btn-outline w-full ${
                  isSubmitting ? "loading" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          <div className='space-y-6'>
            <div className='flex items-center space-x-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
              <span>diegogarciag63@gmail.com</span>
            </div>
            <div className='flex items-center space-x-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                />
              </svg>
              <span>+57 (320) 2923961</span>
            </div>
            <div className='flex items-center space-x-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
              <span>Cúcuta, Norte de Santander, Colombia</span>
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Social Media:</h3>
              <ul className='flex w-full justify-start items-center gap-6 mt-2 md:gap-10 reveal'>
                <li className='hover:scale-110 transition-transform hover:text-[#FFD700]'>
                  <div
                    className='p-0 transition-transform hover:scale-105 tooltip'
                    data-tip='My Github Profile'
                  >
                    <a
                      href='https://github.com/Ripdiegozz'
                      target='_blank'
                      className='text-4xl'
                      aria-label='My Github Profile'
                    >
                      <i className='fa-brands fa-github'></i>
                    </a>
                  </div>
                </li>
                <li className='hover:scale-110 transition-transform hover:text-[#FFD700]'>
                  <div
                    className='p-0 transition-transform hover:scale-105 tooltip'
                    data-tip='My Linkedin'
                  >
                    <a
                      href='https://www.linkedin.com/in/dagadev/'
                      target='_blank'
                      className='text-4xl'
                      aria-label='My Linkedin'
                    >
                      <i className='fa-brands fa-linkedin'></i>
                    </a>
                  </div>
                </li>
                <li className='hover:scale-110 transition-transform hover:text-[#FFD700]'>
                  <div
                    className='p-0 transition-transform hover:scale-105 tooltip'
                    data-tip='My Twitter'
                  >
                    <a
                      href='https://x.com/rip_diegozz'
                      target='_blank'
                      className='text-4xl'
                      aria-label='My Twitter'
                    >
                      <i className='fa-brands fa-x-twitter'></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {isSent && (
        <div className='toast toast-bottom toast-center'>
          <div className='alert alert-success text-white font-bold'>
            <span>
              Mail sent!
              <br />I will get back to you as soon as possible. Thanks!
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
