// PS D:\React_Js_Learning> npx create-react-app my-app
// PS D:\React_Js_Learning\my-app> npm start
// PS D:\React_Js_Learning\my-app> npm run build
// PS D:\React_Js_Learning\my-app> npm install react-router-dom
//rcep

import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import NewsForm from './components/NewsForm';
// Previous text-utils was done using function-based component. Now we are using a class-based component.

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar title="News24Daily"/>
        <div className="container">
          <Routes>
            <Route exact path="/business" element={<NewsForm key="business" pagesize={20} country="us" category="business"/>} />
            <Route exact path="/entertainment" element={<NewsForm key="entertainment" pagesize={20} country="us" category="entertainment"/>} />
            <Route exact path="/" element={<NewsForm key="general" pagesize={20} country="us" category="general" />} />
            <Route exact path="/health" element={<NewsForm key="health" pagesize={20} country="us" category="health" />} />
            <Route exact path="/science" element={<NewsForm key="science" pagesize={20} country="us" category="science" />} />
            <Route exact path="/sports" element={<NewsForm key="sports" pagesize={20} country="us" category="sports" />} />
            <Route exact path="/technology" element={<NewsForm key="technology" pagesize={20} country="us" category="technology" />} />
          </Routes>
        </div>
        </div>
      </Router>
    );
  }
}
