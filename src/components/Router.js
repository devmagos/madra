import React from 'react';
import {BrowserRouter as R, Route,} from 'react-router-dom';
import Login from './Login';
import Registration from './Registration'
import Contact from './Contact'

const CustomRouter = () => {
    return(
        <R>
            <Route path='/' exact component={Login}></Route>
            <Route path='/Login' component={Login}></Route>
            <Route path='/Registration' component={Registration}></Route>
            <Route path='/Contact' component={Contact}></Route>
            
        </R>
    );
}

export default CustomRouter;