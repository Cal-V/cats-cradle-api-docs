import './App.css';
import { useState } from 'react';
import RouteDoc from './RouteDoc';

const routes = require("./routes.json")

function App() {

    const [route,setRoute] = useState({})


    return (
        <div className='container'>
        <div className='sidebar'>{routes.map(routeData => (
            <p><a className={routeData.name == route.name ? "focus" : ""} onClick={() => {setRoute(routeData);window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>{routeData.name}</a></p>
        ))}</div>
        <RouteDoc routeData={route} />
        </div>
    );
}

export default App;
