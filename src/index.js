import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Login  from './pages/Login';
import EmployeeList from './pages/EmployeeList';
import CreateEmployee from './pages/CreateEmployee';
//import Counter from './pages/Counter';
import { Provider } from 'react-redux';
import { store } from './store/store';
import UpdateEmployee from './pages/UpdateEmployee';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      {/* <Counter/> */}
      <Routes>
         {/* <Route path="/counter" element = {<Counter/>}/> */}
         <Route path="/list" element = {<EmployeeList/>}/>
         <Route path="/create" element = {<CreateEmployee/>}/>
         <Route path="/:id" element = {<UpdateEmployee/>}/>
         <Route path="/" element = {<Login/>}/>
      </Routes>
    </Provider>
    </BrowserRouter>
    // <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
