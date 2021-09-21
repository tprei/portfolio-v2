import { forwardRef, useState } from 'react';
import emailjs from 'emailjs-com';

const DEFAULT_NAME_VALUE = 'Write your name';
const DEFAULT_EMAIL_VALUE = 'Write your email';
const DEFAULT_DESC_VALUE = 'Write your description';

export const Footer = forwardRef((props, ref) => {
    const {footerRef} = ref.current;

    const [nameValue, setNameValue] = useState(DEFAULT_NAME_VALUE);
    const [emailValue, setEmailValue] = useState(DEFAULT_EMAIL_VALUE);
    const [descValue, setDescValue] = useState(DEFAULT_DESC_VALUE);

    const [emailSent, setEmailSent] = useState(false);

    const handleTextAreaClick = (event) => {
        if (event.target.value.includes(DEFAULT_NAME_VALUE)) {
            setNameValue('');
        } else if (event.target.value.includes(DEFAULT_EMAIL_VALUE)) {
            setEmailValue('');
        } else if (event.target.value.includes(DEFAULT_DESC_VALUE)) {
            setDescValue('');
        }
    }

    const handleFormSubmit = () => {
        if (nameValue === DEFAULT_NAME_VALUE || emailValue === DEFAULT_EMAIL_VALUE || descValue === DEFAULT_DESC_VALUE) {
            return;
        } else if (nameValue === "" || emailValue === "" || descValue === "") {
            return;
        }

        if (!emailValue.match(".+@.+")) {
            return;
        }

        emailjs.send('service_portfolio', 'template_2frrc4x', {
            'from_name': nameValue,
            'from_email': emailValue,
            'message': descValue,
        }, 'user_TN9sS1lV66EylzBcQngiF').then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            setEmailSent(true);
        }, function(error) {
            console.log('FAILED...', error);
        });
    }

    return (
        <div ref={footerRef} className='w-full flex gap-10 flex-col pt-10 md:flex-row bg-red'>
            <img className='mx-auto mt-36 md:h-72 transform -rotate-12' src='./letter.svg' alt='letter'></img>
            <div className='mx-auto flex flex-col'>
                <h1 className='section'>Contact me</h1>
                <div className='flex flex-col gap-3 text-defaultGray-500 text-opacity-70'>
                    <textarea 
                        style={{'resize': 'none'}}
                        type='text'
                        className='rounded-lg pt-2 pl-2 h-10'
                        value={nameValue}
                        onSelect={handleTextAreaClick} 
                        onChange={(event)=>{setNameValue(event.target.value)}}>
                    </textarea>
                    <textarea 
                        style={{'resize': 'none'}} 
                        type='text'
                        className='rounded-lg pt-2 pl-2 h-10'
                        value={emailValue}
                        onSelect={handleTextAreaClick} 
                        onChange={(event)=>{setEmailValue(event.target.value)}}>
                    </textarea>
                    <textarea 
                        style={{'resize': 'none'}} 
                        type='text'
                        className='h-48 mb-10 rounded-lg pt-2 pl-2'
                        value={descValue}
                        onSelect={handleTextAreaClick} 
                        onChange={(event)=>{setDescValue(event.target.value)}}>
                    </textarea>
                </div>
                {emailSent ? <img className='mb-10 ml-auto h-10' src='./checkmark.svg' alt='checkmark'/> : <button onClick={handleFormSubmit} className='text-red font-bold mb-10 ml-auto py-3 px-5 bg-orange rounded-md'>Send</button>}
            </div>
        </div>
    );
});