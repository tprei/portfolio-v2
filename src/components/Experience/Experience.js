export const Experience = (props) => {
    const {title, color, subtitle, timePeriod, description, image} = props;
    return (
        <div className='max-h-64 my-12 md:flex font-serif md:flex-row md:gap-16 text-justify md:justify-between'>
            <div className='flex flex-col gap-3.5 font-sans text-green'>
                <b className={`text-4xl ${color}`}>{title}</b>
                <b>{subtitle}</b>
                <b>{timePeriod}</b>
                <p>{description}</p>
            </div>
            <img className='invisible md:visible md:w-52 transform transition duration-200 hover:scale-105' src={image} alt='experience logo'/>
        </div>
    );
}