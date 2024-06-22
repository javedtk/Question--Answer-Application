import UserNavbar from './UserNavbar';
import Home from '../Home';
import UserQA from './UserQA';
import ViewQA from './ViewQA';
import UserAskedQuestion from './UserAskedQuestion'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './Chat';

function UserHome() {    //Admin home page display method
  return (

    //routing paths for admin operations
    <Router>
      <UserNavbar/>
      <Switch>
        <Route path="/" component={Home} exact />
   
        <Route path="/userqa" component={UserQA} exact />

        <Route path="/view/:id" component={ViewQA} exact />

        <Route path="/useraskedquestion" component={UserAskedQuestion} exact />
        <Route path="/chat" component={Chat} exact />

       
      </Switch>
    </Router>
  );
}

export default UserHome;

