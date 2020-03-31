import React from 'react'; 
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BinToDec from './pages/binToDec/';

export default function Routes() 
{
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={BinToDec}/>
    

        </Switch>
    </BrowserRouter>
    );
}