import React from 'react';
import styles from './RootLayout.module.css'

function Header() {
    return (
        <>
            <section className='fixed left-10 py-2 max-w-full mx-auto'>
                <div className={`${styles.homeHeader}     flex flex-row justify-between items-center  `}>
                    <div className='p-5'>
                        <img className={`${styles.oliveLogo} w-40`} src='./assets/Olive-png-logo 1.svg'></img>
                    </div>

                    <div>
                        <ul className='flex flex-row  items-center gap-10 text-xs font-semibold '>
                            <li className={`${styles.navLinks}`}>
                                HOME
                            </li>
                            <li className={`${styles.navLinks}`}>
                                ABOUT US
                            </li>
                            <li className={`${styles.navLinks}`}>
                                OUR SERVICES
                            </li>
                            <li className={`${styles.navLinks}`}>
                                OUR FEATURES
                            </li>
                            <li className={`${styles.navLinks}`}>
                                GALLERY
                            </li>
                            <li className={`${styles.navLinks}`}>
                                CONTACT US
                            </li>

                        </ul>
                    </div>
                    <div className='p-5'>
                        <button className={`${styles.makeAppoinmentButton} flex flex-row justify-center items-center gap-2 w-48 h-10 `}><span className={`${styles.makeAppoinmentSpan}`}>Make an Appointment</span><svg className={`${styles.makeAppoinmentsvg}`} xmlns="http://www.w3.org/2000/svg" width="19" height="13" viewBox="0 0 19 13" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3275 1.70901C11.0584 1.0699 10.9026 0.480908 10.8784 0.0935674L12.3755 0C12.385 0.151864 12.4735 0.565454 12.7099 1.12692C12.9395 1.67208 13.2885 2.30823 13.7768 2.911C14.7444 4.10542 16.2464 5.16064 18.5018 5.16064V5.36274V6.66064V6.86274C18.5017 6.86274 18.5016 6.86274 18.5015 6.86274V6.94471H17.4465C15.7655 7.21454 14.5848 8.11492 13.7768 9.11237C13.2885 9.71515 12.9395 10.3513 12.7099 10.8965C12.4735 11.4579 12.385 11.8715 12.3755 12.0234L10.8784 11.9298C10.9026 11.5425 11.0584 10.9535 11.3275 10.3144C11.6035 9.65895 12.0212 8.89654 12.6113 8.16815C12.9588 7.73916 13.3672 7.3213 13.8411 6.94471H0V5.44471H14.3435C13.6498 4.98287 13.0761 4.42901 12.6113 3.85523C12.0212 3.12684 11.6035 2.36443 11.3275 1.70901Z" fill="white" />
                        </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header