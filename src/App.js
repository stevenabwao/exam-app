import React from 'react';
import Header from './components/login/Header/Toolbar'
import Login from './components/login/login'
import Register from './components/Register/register'
import ForgetPassword from './components/ForgetPassword/forgetPassword'

import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import ExamApp from './components/ExamApp';


class App extends React.Component {


    render() {


        return (
            <div>
             
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/forgetpassword" exact component={ForgetPassword} />
                        <Route path="/home" exact component={ExamApp} />
                        <Route path="/register" exact component={Register} />
                    </Switch>

                </Router>
            </div>
        )
    }
}
export default App;
