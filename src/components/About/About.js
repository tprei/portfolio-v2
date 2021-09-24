import React from 'react';
import {Skills} from '../Skills/Skills'

const skills = [
    {
        'id': '1',
        'label': 'Frontend',
        'values': ['React', 'TailwindCSS', 'Material UI']
    },
    {
        'id': '2',
        'label': 'Backend',
        'values': ['Go (Gin & Echo)', 'Node.js (Express)', 'Python (Flask)']
    },
    {
        'id': '3',
        'label': 'Cloud',
        'values': [
            'SNS/SQS',
            'Lambda',
            'App Engine',
            'Cloud Run',
            'Firestore',
            'PostgreSQL',
            'ScyllaDB',
            'Kubernetes', 
            'Docker', 
            'Terraform'
        ]
    },
];


export const About = React.forwardRef((props, ref) => {
    const {aboutRef} = ref.current;
    return (
        <div ref={aboutRef} className='flex text-green text-center flex-col gap-10 m-auto w-4/5'>
            <div className='text-green text-justify font-serif'>
                <h1 className='section'>About me</h1>
                <div className='flex flex-col gap-5 md:mt-10'>
                    <p>I am very <b>passionate</b> about creating things and learning about technology. I have had many personal projects and I’m always learning new things. </p>
                    <p> Currently I’m working on a personal project called <b className='text-red font-bold'>USPY</b>, a platform for students to seek information about subjects and professors, you can find more details <a href='https://github.com/Projeto-USPY' className='font-bold underline'>here</a>.</p>
                    <p> Below are some tools I have worked with:</p>
                </div>
            </div>
            <Skills objects={skills}/>
            <p>and others!</p>
        </div>
    );
});