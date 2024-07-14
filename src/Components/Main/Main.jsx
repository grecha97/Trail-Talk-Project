import CardContainer from './Cards/CardContainer'
import Dictionary from './Dictionary/Dictionary'
import './Main.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const Main = () => {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Dictionary />} />
            <Route path="/game" element={<CardContainer />}/>
        </Routes>
    </Router>
    );
}

export default Main
