import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import logo from "../assets/dagadev_logo.webp";
import ThemeToggle from "./common/ThemeToggle";

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  const validateHideNavbar = () => {
    if (window.scrollY > 50) {
      setIsHidden(true);
    }

    return;
  }

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      variants={{
        hidden: { y: "-50%" },
        visible: { y: "0%" },
      }}
      transition={{ duration: 0.2 }}
      className='sticky top-0 left-0 w-full z-50'
      onMouseEnter={() => setIsHidden(false)}
      onMouseLeave={() => validateHideNavbar()}
    >
      <div className='navbar md:w-3/4 md:mx-auto bg-base-100 border-b border-base-200 rounded-md shadow-sm px-4'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                ></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
            >
              <li>
                  <a
                  href='/#'
                  className='text-base-content no-underline text-[14px] font-[600]'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/#about'
                  className='text-base-content no-underline text-[14px] font-[600]'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='/#experience'
                  className='text-base-content no-underline text-[14px] font-[600]'
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href='/#projects'
                  className='text-base-content no-underline text-[14px] font-[600]'
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='/contact'
                  className='text-base-content no-underline text-[14px] font-[600]'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <a href='/#'>
            <img
              src={logo.src}
              alt='dagadev-logo'
              className='w-24 h-12 aspect-square'
            />
          </a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a
                href='/#'
                className='text-base-content no-underline text-[14px] font-[600]'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='/#about'
                className='text-base-content no-underline text-[14px] font-[600]'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='/#experience'
                className='text-base-content no-underline text-[14px] font-[600]'
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href='/#projects'
                className='text-base-content no-underline text-[14px] font-[600]'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='/contact'
                className='text-base-content no-underline text-[14px] font-[600]'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='navbar-end flex items-center gap-2'>
          <ThemeToggle />
          <a
            href='/contact'
            className='text-base-100 bg-primary hover:bg-primary-focus border-neutral no-underline text-[14px] font-[600] badge badge-secondary py-4 w-[82px]'
          >
            Let's talk
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
