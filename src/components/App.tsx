import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../style/App.css';

const Main = lazy(() => import("./Main"))
const TestPage = lazy(() => import("./TestPage"))
const ResultPage = lazy(() => import("./ResultPage"))
const ErrorPage = lazy(() => import("./ErrorPage"))
const TempPage = lazy(() => import("./TempPage"))

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Suspense fallback={ <div className="ping">
                    <img src="../images/슬의.jpeg" alt=""/>
                </div>}>
                    <header className="App-header">
                        <Switch>
                            <Route path="/" component={Main} exact/>
                            <Route path="/testpage" component={TestPage}/>
                            <Route path="/temppage" component={TempPage}/>
                            <Route path="/resultpage/:id" component={ResultPage}/>
                            <Route component={ErrorPage}/>
                        </Switch>
                    </header>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
