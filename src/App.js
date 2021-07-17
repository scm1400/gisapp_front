import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import TopMenuComponent from "./componnents/TopMenuComponent";
function App() {

    //const baseUrl = "http://localhost:8080";
    
    return (
        <div className="App">
            <div>
                <TopMenuComponent>
                </TopMenuComponent>
            </div>
        </div>
    );
}


export default App;
