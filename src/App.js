import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route exact path='/shop'>
                        <ShopPage />
                    </Route>
                    <Route exact path='/signin'>
                        <SignInAndSignUpPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
