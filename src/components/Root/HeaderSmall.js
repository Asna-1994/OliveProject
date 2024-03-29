import React from 'react';
import styles from './RootLayout.module.css'


function Header() {
  return (
    <>
      <div className={`${styles.headerDiv} w-full h-8 flex flex-row justify-between items-center `}>
        <div className={`${styles.FirstHeaderDiv} flex flex-row  items-center  gap-1`}>
          <svg className={`${styles.mailSVG}`} xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
            <path d="M16 18H6C3 18 1 16.5 1 13V6C1 2.5 3 1 6 1H16C19 1 21 2.5 21 6V13C21 16.5 19 18 16 18Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 6.5L12.87 9C11.84 9.82 10.15 9.82 9.12 9L6 6.5" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <span className={`${styles.mailId}`}>oliverehabcenter@gmail.com</span>

        </div>
        <div className={`${styles.phoneNumberDiv} flex flex-row items-center gap-2`}>
          <svg className={`${styles.phoneSVG}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2.67962 0.794063L2.76658 0.707107C3.1571 0.316583 3.79027 0.316582 4.18079 0.707106L6.34552 2.87184C6.73605 3.26236 6.73605 3.89553 6.34552 4.28605L4.81622 5.81536C4.5488 6.08278 4.4825 6.49132 4.65163 6.82958C5.62936 8.78504 7.21496 10.3706 9.17041 11.3484C9.50868 11.5175 9.91722 11.4512 10.1846 11.1838L11.7139 9.65448C12.1045 9.26395 12.7376 9.26395 13.1282 9.65447L15.2929 11.8192C15.6834 12.2097 15.6834 12.8429 15.2929 13.2334L15.2059 13.3204C13.0946 15.4317 9.75202 15.6693 7.3633 13.8777L6.99699 13.603C5.25346 12.2954 3.70464 10.7465 2.39699 9.00301L2.12226 8.6367C0.330722 6.24798 0.568269 2.90541 2.67962 0.794063Z" fill="white" />
          </svg>
          <span className={`${styles.twentyFourSpan}`}>24/7:</span>
          <span className={`${styles.phoneNoSpan}`}>+91 9744 575 705</span>


        </div>
      </div>
    </>
  )
}

export default Header