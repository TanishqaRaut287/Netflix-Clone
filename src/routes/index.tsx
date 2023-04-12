import {Route, Routes as Switch} from 'react-router-dom';
import HomePage from '../screens/Authenticated/Home Page/HomePage';
import Profiles from '../screens/Authenticated/Manage Profiles/Profiles';

import { routes } from '../utils/constants/routes';


 
const Routes = () => {
    return(
        
            <Switch>
                <Route path='/' element={<Profiles />}/>
                <Route path={routes.home} element={<HomePage />}/>
            </Switch>
        
    );
};

export default Routes;