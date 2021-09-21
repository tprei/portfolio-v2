export const Home = () => {
    return (
        <>
        <div className='flex p-6 flex-col md:gap-3 md:flex-row md:justify-center items-center'>
           <div className='flex flex-col pl-4 pr-4 mt-8 gap-2'>
                <div className='text-6xl md:text-8xl font-bold text-orange'>Hi there!</div>
                <div className='md:text-2xl text-green'>I'm Thiago, a software developer based in São Paulo.</div>
                <div className='mt-1 flex flex-row gap-4 '>
                    <a className='transform transition duration-150 hover:scale-110 hover:rotate-6' href='https://github.com/tprei'>
                        <img className='w-8' src='./github-icon.svg' alt='github icon'></img>
                    </a>
                    <a className='transform transition duration-150 hover:scale-110 hover:rotate-6' href='https://linkedin.com/in/thiagopreischadt'>
                        <img className='w-8' src='./linkedin-icon.svg' alt='linkedin icon'></img>
                    </a>
                </div>
           </div>
            <img className='min-w-16 max-w-xs md:max-w-md' src='./cropped-coffee.gif' alt='coffee cup'/>
        </div>
        </>
    );
}