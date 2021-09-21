import { Experience } from "../Experience/Experience";

import React from 'react';

const experiences = [
    {
        "id": "1",
        "title": "iFood",
        "image": "./ifood.svg",
        "subtitle": "Backend Developer",
        "timePeriod": "(2021 - Present)",
        "description": "Development of microservices based on product demands for the Merchant Delivery team. The main stack is composed of Golang (Mainly echo for web servers), PostgreSQL, AWS Lambda, SQS/SNS, Kubernetes and Gitlab CI/CD.",
        "color": "text-defaultRed-500"
    },
    {
        "id": "2",
        "title": "Upwork",
        "image": "./upwork.svg",
        "subtitle": "Freelance Software Developer",
        "timePeriod": "(2019 - Present)",
        "description": "Worked with different clients in 8 different projects related to Software development and Webscraping.",
        "color": "text-defaultGreen-500"
    },
]

export const Curriculum = React.forwardRef((props, ref) => {
    const {curRef} = ref.current;
    return (
        <div ref={curRef} className='flex flex-col md:gap-12 my-36 m-auto w-4/5'>
            <h1 className='section'>Past experiences</h1>
            {experiences.map(exp => {
                return (<Experience 
                    key={exp.id} 
                    title={exp.title}
                    style={exp.style}
                    color={exp.color}
                    subtitle={exp.subtitle}
                    image={exp.image}
                    timePeriod={exp.timePeriod}
                    description={exp.description}></Experience>
                );
            })}
        </div>
    );
});