import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {NotFound} from "./pages/NotFound";
import {Navbar} from "./components/Navbar";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";

function App() {
    return (
        <AlertState>
            <BrowserRouter>
                <Navbar/>
                <div className="container pt-4">
                    <Alert/>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="*">
                            <NotFound/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </AlertState>
    );
}

export default App;
