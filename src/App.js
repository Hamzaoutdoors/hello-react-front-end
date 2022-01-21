import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Greeting from './pages/Greeting';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/greetings" element={<Greeting />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
