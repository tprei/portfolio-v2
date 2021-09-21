import React from 'react';

export const Navbar = React.forwardRef((props, ref) => {
    const {aboutRef, curRef, footerRef} = ref.current;
    return (
        <nav className='flex flex-col md:flex-row w-full align-start md:justify-between font-serif'>
            <div className='flex justify-center ml-5 mt-5 md:flex-row'>
                <img className='w-8 mt-4' src='./coffee-icon.svg' alt='coffee icon'></img>
                <div className='flex ml-3 mt-3 flex-col flex-shrink-0'>
                    <b>Thiago Pinheiro</b>
                    <p>Fullstack Developer</p>
                </div>
            </div>
            <div className='flex flex-row justify-center mt-3 md:mr-10 md:mt-10 gap-3 md:gap-10 font-sans text-red'>
                <b onClick={() => {aboutRef.current.scrollIntoView({behavior: 'smooth'})}} className='cursor-pointer transform transition duration-200 hover:scale-110'>About me</b>
                <b onClick={() => {curRef.current.scrollIntoView({behavior: 'smooth'})}} className='cursor-pointer transform transition duration-200 hover:scale-110'>Past experience</b>
                <b onClick={() => {footerRef.current.scrollIntoView({behavior: 'smooth'})}} className='cursor-pointer transform transition duration-200 hover:scale-110'>Contact</b>
                <a className='transform transition duration-75 hover:scale-110' href='https://github.com/tprei/portfolio-v2'>
                    <img src='github-icon.svg' alt='gitub icon'/>
                </a>
            </div>
        </nav>
    );
});