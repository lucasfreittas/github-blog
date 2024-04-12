import { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { Issues } from '../Pages/Issues';

export function Router(){
    return(
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/issue' element={ <Issues/> }/>
        </Routes>
    );
};