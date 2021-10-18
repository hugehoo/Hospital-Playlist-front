import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../style/App.css';
import Loading from "./Loading";

const Main = lazy(() => import("./Main"))
const TestPage = lazy(() => import("./TestPage"))
const ResultPage = lazy(() => import("./ResultPage"))
const ErrorPage = lazy(() => import("./ErrorPage"))

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Suspense fallback={<Loading/>}>
                    <header className="App-header">
                        <Switch>
                            <Route path="/" component={Main} exact/>
                            <Route path="/testpage" component={TestPage}/>
                            <Route path="/resultpage/:id" component={ResultPage}/>
                            {/*404*/}
                            <Route component={ErrorPage}/>
                        </Switch>
                    </header>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
