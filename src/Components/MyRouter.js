import React from 'react';
import { BrowserRouter, Route, Link,NavLink, Switch} from "react-router-dom";
import Menu from '../Pages/Menu';
import HomePage from '../Pages/HomePage';

function MyRouter(props) {
    return (
        <>
             <Route exact path="/menu" component={Menu}></Route>
        </>
    );
}

export default MyRouter;