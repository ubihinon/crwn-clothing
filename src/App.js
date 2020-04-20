import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth} from "./firebase/firebase.utils";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header currentUser={this.state.currentUser} />
                    <Switch>
                        <Route exact path='/'>
                            <HomePage/>
                        </Route>
                        <Route exact path='/shop'>
                            <ShopPage/>
                        </Route>
                        <Route exact path='/signin'>
                            <SignInAndSignUpPage/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
