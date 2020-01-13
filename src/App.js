import React from 'react';
import Login from './components/login/login'
import Register from './components/Register/register'
import ForgetPassword from './components/ForgetPassword/forgetPassword'
import Exams from './components/exams/exams'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import ExamApp from './components/ExamApp';

import '../src/components/ExamApp.css'
class App extends React.Component {


    render() {


        return (
            <div >
             
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/forgetpassword" exact component={ForgetPassword} />
                        <Route path="/home" exact component={ExamApp} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/exams" exact component={Exams} />
                    </Switch>

                </Router>
            </div>
        )
    }
}
export default App;
