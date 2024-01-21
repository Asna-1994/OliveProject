import React from 'react';
import styles from './Home.module.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <main className=''>
        <div className={`${styles.bannerBackground} w-full  px-11`}>
           
            <section>
                <div className=' py-24 px-3 '>
                    <div className='mt-24'>  <h6 className={`${styles.homeHeading}`}>Are You at a Point
                        Where You Know Your
                        Life Has to Change?</h6>

                    </div>
                    <div className=''>
                        <p className={`${styles.homePara} mt-4`}>Are you searching for more peace,
                            Fulfillment, and a sense of
                            purpose? At Olive, we understand the intricacy of the human
                            mind.
                        </p>
                        </div>
                        <div className={`${styles.Homebuttons} mt-4 flex flex-row gap-4`}>
                            <button className={`${styles.ourPackagesButton} flex flex-row justify-center items-center gap-3`}>
                                <span className={`${styles.ourPackagesSpan}`}> Our Packages</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 25 17" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3492 2.16796C14.9956 1.32793 14.7989 0.571147 14.769 0.0935674L16.2661 0C16.2812 0.242103 16.4107 0.823481 16.7317 1.58587C17.0458 2.33195 17.5231 3.20216 18.1919 4.02771C19.5205 5.66768 21.5921 7.12333 24.6935 7.12333V7.39321V7.50259H24.6941V9.00259H23.2649C20.9398 9.3701 19.3051 10.6148 18.1919 11.9888C17.5231 12.8144 17.0458 13.6846 16.7317 14.4307C16.4107 15.1931 16.2812 15.7744 16.2661 16.0165L14.769 15.923C14.7989 15.4454 14.9956 14.6886 15.3492 13.8486C15.7098 12.9922 16.2558 11.9958 17.0264 11.0446C17.6229 10.3083 18.3559 9.59791 19.2397 9.00259H0V7.50259H20.0506C18.7944 6.83017 17.7967 5.92272 17.0264 4.97193C16.2558 4.02077 15.7098 3.0243 15.3492 2.16796Z" fill="white" />
                                </svg>
                            </button>
                            <button className={`${styles.ourServicesButton} flex flex-row justify-center items-center gap-3`}>
                                <span className={`${styles.ourPackagesSpan}`}> Our Services</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 25 17" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3492 2.16796C14.9956 1.32793 14.7989 0.571147 14.769 0.0935674L16.2661 0C16.2812 0.242103 16.4107 0.823481 16.7317 1.58587C17.0458 2.33195 17.5231 3.20216 18.1919 4.02771C19.5205 5.66768 21.5921 7.12333 24.6935 7.12333V7.39321V7.50259H24.6941V9.00259H23.2649C20.9398 9.3701 19.3051 10.6148 18.1919 11.9888C17.5231 12.8144 17.0458 13.6846 16.7317 14.4307C16.4107 15.1931 16.2812 15.7744 16.2661 16.0165L14.769 15.923C14.7989 15.4454 14.9956 14.6886 15.3492 13.8486C15.7098 12.9922 16.2558 11.9958 17.0264 11.0446C17.6229 10.3083 18.3559 9.59791 19.2397 9.00259H0V7.50259H20.0506C18.7944 6.83017 17.7967 5.92272 17.0264 4.97193C16.2558 4.02077 15.7098 3.0243 15.3492 2.16796Z" fill="white" />
                                </svg>
                            </button>
                        </div>

                        <div className=' flex flex-row justify-end items-center gap-2'>
                            <span className= {`${styles.zeroToSixSpan}`}>01 /<span className= {`${styles.SixSpan}`}>06</span> </span>
                            <img className="w-14" src='./assets/Left.svg'></img>
                            <img className='w-14' src='./assets/Right.svg'></img>

                        </div>
                        </div>

                     

                   


               
            </section>
        </div>
        </main>
    )
}

export default Home