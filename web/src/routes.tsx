import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './pages/Login'
import Register from './pages/Register';
import RegisterOk from './pages/RegisterOk/indext';
import PasswordOk from './pages/PasswordOk/indext';
import ResetPassword from './pages/ResetPassword';

function Routes(){
    return(
        <BrowserRouter>
            <Route  exact path="/" component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/register-ok" component={RegisterOk} />
            <Route path="/resetpassword" component={ResetPassword} />
            <Route path="/password-ok" component={PasswordOk} />
        </BrowserRouter>
    )
}

export default Routes;