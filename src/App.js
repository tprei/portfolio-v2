import './App.css';

import {useRef} from 'react';

import {Navbar} from './components/Navbar/Navbar'
import {Home} from './components/Home/Home'
import {About} from './components/About/About'
import {Curriculum} from './components/Curriculum/Curriculum'
import {Footer} from './components/Footer/Footer'

function App() {
    const aboutRef = useRef(null);
    const curRef = useRef(null);
    const footerRef = useRef(null);

    const refs = useRef({aboutRef: aboutRef, curRef: curRef, footerRef: footerRef});
    return (
        <>
            <Navbar ref={refs}/>
            <Home/>
            <About ref={refs}/>
            <Curriculum ref={refs}/>
            <Footer ref={refs}/>
        </>
    );
}

export default App;