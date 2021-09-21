import './App.css';

import {Navbar} from './components/Navbar/Navbar'
import {Home} from './components/Home/Home'
import {About} from './components/About/About'
import {Curriculum} from './components/Curriculum/Curriculum'
import {Footer} from './components/Footer/Footer'

function App() {
    return (
        <>
            <Navbar/>
            <Home/>
            <About id='about'/>
            <Curriculum id='past-experience'/>
            <Footer id='footer'/>
        </>
    );
}

export default App;