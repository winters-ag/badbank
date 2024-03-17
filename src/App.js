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
import BankNav                     from './bankfiles/navbar.js';
import React                       from 'react';
import {useState,useEffect}        from 'react';
import axios                       from 'axios'
import                                  './App.css';
import {Route,Routes, HashRouter}  from 'react-router-dom';
import { UserContext }             from './index.js'


function App() {

  const [accounts,setAccounts]             = useState([]);
  const [transactions, setTransactions]    = useState([]);

  useEffect(() => {
    axios.get('accounts.json')
      .then(response => {
        console.log(response);
        setAccounts(response.data);
      })

    axios.get('transactions.json')
    .then(response => {
      console.log(response);
      setTransactions(response.data);
    })
  }, []);
  return (
    <>
      <HashRouter>
          <BankNav />
          <UserContext.Provider value={{accounts:accounts,transactions:transactions}}>
            <Routes>
                <Route path="/"                 exact          element={<Home />}    />
                <Route path="/alldata/"         exact          element={<Alldata />} />
                <Route path="/balance/"         exact          element={<Balance />} />
                <Route path="/context/"         exact          element={<Context />} />
                <Route path="/createaccount/"   exact          element={<CreateAccount />} />
                <Route path="/deposit/"         exact          element={<Deposit />} />
                <Route path="/login/"           exact          element={<Login />} />
                <Route path="/withdraw/"        exact          element={<Withdraw />}/>
            </Routes>
          </UserContext.Provider>
      </HashRouter>

    </>
  );
}

export default App;
