import React, {Suspense, lazy} from 'react';
import {Route, Switch} from 'react-router-dom';
import '../style/App.css';

const Main = lazy(() => import("./Main"))
const TestPage = lazy(() => import("./TestPage"))
const ResultPage = lazy(() => import("./ResultPage"))
const ErrorPage = lazy(() => import("./ErrorPage"))
const TempPage = lazy(() => import("./TempPage"))

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                <header className="App-header">
                    <Switch>
                        <Route path="/" component={Main} exact/>
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
