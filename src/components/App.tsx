import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import '../style/App.css';
import Main from "./Main";
import TestPage from "./TestPage"
import ResultPage from "./ResultPage";


function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                <header className="App-header">
                    <Switch>
                        <Route path="/" component={Main} exact/>
                        <Route path="/testpage" component={TestPage}/>
                        <Route path="/resultpage" component={ResultPage}/>
                    </Switch>
                </header>
            </Suspense>
        </div>
    );
}

export default App;
