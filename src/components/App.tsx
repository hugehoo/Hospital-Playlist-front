import React, {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import '../style/App.css';
// import Main from "./Main";
// import TestPage from "./TestPage"
// import ResultPage from "./ResultPage";
// import TempPage from "./TempPage";
// import ErrorPage from "./ErrorPage";

const MainPage = lazy(() => import("./Main"))
const TestPage = lazy(() => import("./TestPage"))
const TempPage = lazy(() => import(".//TempPage"))
const ResultPage = lazy(() => import("./ResultPage"))
const ErrorPage = lazy(() => import("./ErrorPage"))

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                <header className="App-header">
                        <Switch>
                            <Route exact path="/" component={MainPage}/>
                            <Route path="/testpage" component={TestPage}/>
                            <Route path="/temppage" component={TempPage}/>
                            <Route path="/resultpage" component={ResultPage}/>
                            <Route component={ErrorPage}/>
                        </Switch>
                </header>
            </Suspense>
        </div>
    );
}

export default App;
