import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Technology } from "../../types/technology";
import type { Highlight } from "../../types/highlight";

type JobInfoModalProps = {
  jobTitle: string;
  jobCompany: string;
  startDate: Date;
  endDate: Date | null;
  highlights: Highlight[];
  jobDescription: string;
  techStack: Technology[];
};

const JobInfoModal = ({
  jobTitle,
  jobCompany,
  startDate,
  endDate,
  highlights,
  jobDescription,
  techStack = [],
}: JobInfoModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className='flex flex-col justify-center py-2'>
      {/* Button to open modal */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleModal}
        className='btn btn-outline'
      >
        See more
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center w-full overflow-x-hidden md:w-[70vw] lg:w-[60vw] md:mx-auto'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleModal}
          >
            <motion.div
              className='bg-white rounded-lg shadow-lg border w-full overflow-x-hidden md:w-[70vw] lg:w-[60vw] md:mx-auto'
              initial={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                scale: 0.5,
              }}
              animate={{
                width: "90vw",
                height: "80vh",
                borderRadius: "10px",
                scale: 1,
              }}
              exit={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                scale: 0.5,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence>
                <motion.div
                  className='p-6 md:p-12 h-full w-full overflow-x-hidden md:w-[70vw] lg:w-[60vw] md:mx-auto'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <div className='w-full flex items-start py-2 md:my-0 md:items-center justify-between'>
                    <h2 className='text-2xl font-bold'>
                      <span className='text-blue-500'>{jobTitle}</span> at{" "}
                      {jobCompany}
                    </h2>
                    <button
                      onClick={toggleModal}
                      className='text-black text-xl'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </button>
                  </div>
                  <p className='text-gray-700 mb-4'>
                    <span className='font-bold'>Date: </span>
                    {startDate.toLocaleDateString()} -{" "}
                    {endDate ? endDate.toLocaleDateString() : "Present"}
                  </p>
                  <p className='text-gray-700 my-4 w-full md:w-3/4'>
                    {jobDescription}
                  </p>
                  <div className='py-4'>
                    <h3 className='py-2'>Tech Stack</h3>
                    <ul className='flex flex-row flex-wrap gap-2 items-center justify-start'>
                      {techStack.map((tech) => (
                        <li className='mr-2'>
                          <div className='tooltip' data-tip={tech.name}>
                            <img
                              src={`https://skillicons.dev/icons?i=${tech.icon}`}
                              alt={tech.name}
                              className='h-10 w-10 hover:scale-125 transition-transform'
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className='py-2'>Highlights</h3>
                    <ul className='grid grid-cols-1 md:grid-cols-2 list-disc list-inside gap-6'>
                      {highlights.map((highlight, index) => (
                        <li
                          className='text-gray-700'
                          key={`${index}-${highlight.title}`}
                        >
                          {highlight.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JobInfoModal;
