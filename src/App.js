import logo from './logo.svg';
import Home from './home.js';
import About from './about.js';
import Products from './products.js'
import Nav from './nav.js';
import React from 'react';
import 'react-bootstrap';
import './App.css';
import  {Route,Routes, HashRouter} from 'react-router-dom';

export const UserContext = React.createContext(null);


function App() {
  return (
    <>
      <HashRouter>
        <div>
          <h1>Routing - Hello World</h1>
            <Nav />
          <hr />
          <UserContext.Provider value={({users:['peter']})}>
            <Routes>
                <Route path="/"          exact        element={<Home />}     />
                <Route path="/about/"    exact        element={<About />}    />
                <Route path="/products/" exact        element={<Products />} />
            </Routes>
          </UserContext.Provider>
        </div>
      </HashRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
