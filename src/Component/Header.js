import React from 'react'
import home from "./Home";
import Navbar from '../Navbar';
import { Switch ,Route, Redirect } from "react-router-dom";
import Ourdetails from './Ourdetails';
import CustomerRgistration from './CustomerRgistration';
import DsaRegi from './DsaRegi';
import VenderRegi from './VenderRegi';
import Placeorder from './Placeorder';

const Header = () => {
    return (
        <>
        <Navbar/>
        <Switch>        
            <Route exact path="/" component={home} />
            <Route exact path="/Ourdetails" component={Ourdetails} />
            <Route exact path="/CustomerRgistration" component={CustomerRgistration} />

            <Route exact path="/DsaRegi" component={DsaRegi} />
            <Route exact path="/VenderRegi" component={VenderRegi} />
            <Route exact path="/Placeorder" component={Placeorder} />            
             
            <Redirect to="/" />
        </Switch>
            
        </>
    )
}

export default Header
