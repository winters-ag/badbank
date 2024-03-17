import React from 'react'
import {Card, UserContext} from '../index.js'

function Alldata() {
  const [data, setData] = React.useState('');

  const ctx = React.useContext(UserContext);
  let accounts = ctx.accounts;
  let transactions = ctx.transactions;

  React.useEffect(() => {
    fetch('/account/all')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(JSON.stringify(data));
      })
  })

  return (
    <>
      <h3>All Data:</h3>
      {data}
      <div className="container">
        <div className = "row align-items-start">
          <div className="col">
            <Card
              bgcolor="warning"
              header="Accounts"
              body={
                accounts.sort((a,b) => b.id - a.id )
                .map((item) => {
                  return <Card 
                    key={item.id}
                    bgcolor="primary" 
                    header={`Account Email: ${item.email} || Account Number:${item.id}`} 
                    body={item.name + ' || Current Balance ' + item.balance}/>
                })}
              />
          </div>
          <div className="col">
            <Card
              bgcolor="primary"
              header="Transactions"
              body={
                transactions.sort((a,b) => a.timestamp - b.timestamp)
                .map((item) => {
                  return <Card
                    key={item.transactionNumber}
                    bgcolor="success"
                    header={`Account Number: ${item.account} || Transaction Type:  ${item.type}`}
                    body={`Transaction Amount: ${item.amount} || Running Balance: ${item.balance}`}
                  />
                })
              }
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Alldata;