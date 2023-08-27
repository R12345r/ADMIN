import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import FormPage from './pages/FormPage';
import RegistrationPage from './pages/RegistrationPage';
import MultiStepFormPage from './pages/MultiStepFormPage';
import Sidebar from './components/Sidebar'; // Import the Sidebar component

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow p-4">
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/registration" component={RegistrationPage} />
            <Route path="/multistepform" component={MultiStepFormPage} />
            <Route path="/form" component={FormPage} /> 

            {/* Add more routes here */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
