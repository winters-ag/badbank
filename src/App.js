import logo                        from './logo.svg';
import About                       from './about.js';
import Home                        from './bankfiles/home.js';
import Alldata                     from './bankfiles/alldata.js'
import Balance                     from './bankfiles/balance.js'
import Context                     from './bankfiles/context.js'
import CreateAccount               from './bankfiles/createaccount.js'
import Deposit                     from './bankfiles/deposit.js'
import Login                       from './bankfiles/login.js'
import Withdraw                    from './bankfiles/withdraw.js'
import Nav                         from './bankfiles/navbar.js';
import React                       from 'react';
import                                  'react-bootstrap';
import                                  './App.css';
import  {Route,Routes, HashRouter} from 'react-router-dom';
import { UserContext }                 from './index.js'


function App() {
  return (
    <>
      <HashRouter>
          <Nav />
          <UserContext.Provider value={{users:[{name:'Alan', email:'test@gmail.com',password:'pass123',balance:'5000'}]}}>
            <Routes>
                <Route path="/"                 exact          element={<Home />}     />
                <Route path="/alldata/"         exact          element={<Alldata />}    />
                <Route path="/balance/"         exact          element={<Balance />} />
                <Route path="/context/"         exact          element={<Context />} />
                <Route path="/createaccount/"   exact          element={<CreateAccount />} />
                <Route path="/deposit/"         exact          element={<Deposit />} />
                <Route path="/login/"           exact          element={<Login />} />
                <Route path="/withdraw/"        exact          element={<Withdraw />} />
            </Routes>
          </UserContext.Provider>
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
