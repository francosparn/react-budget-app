import React, { useState, useEffect } from 'react';
import Index from './components/Index';
import Form from './components/Form';
import List from './components/List';
import ControlBudget from './components/ControlBudget';
import Footer from './components/Footer';

function App() {

  // Define the state
  const [ budget, saveBudget ] = useState(0);
  const [ rest, saveRest ] = useState(0);
  const [ username, saveUsername ] = useState('');
  const [ showindex, updateIndex] = useState(true);
  const [ spendings, saveSpendings ] = useState([]);
  const [ spending, saveSpending] = useState({});
  const [ createSpending, saveCreateSpending] = useState(false);

  // Update the rest with useEffect
  useEffect(() => {
    if(createSpending){
      
      // Add the new budget
      saveSpendings([
        ...spendings,
        spending
      ]);

      // Subtract from current budget
      const restBudget = rest - spending.amount;
      saveRest(restBudget);

      // Reset
      saveCreateSpending(false);
    }
  }, [spending, createSpending, rest, spendings]);

  return (
      <header>
      <nav className="navbar navbar-dark">
        <a className="navbar-brand" href="/">
          <img src="assets/img/logo.png" alt="Logo" /> 
            <span className="title"> Budget</span>App
        </a>
      </nav>
      <div className="container main my-5">
        { showindex ?
          <Index 
          saveUsername={saveUsername}
          saveBudget={saveBudget}
          saveRest={saveRest}
          updateIndex={updateIndex}
        />
        :
        <div className="row">
          <div className="col-md-6">
            <Form
              username={username}
              saveSpending={saveSpending}
              saveCreateSpending={saveCreateSpending}
              budget={budget}
              rest={rest}
            />
          </div>
          <div className="col-md-6">
            <List 
              spendings={spendings}
            />
            <ControlBudget
              budget={budget}
              rest={rest}
            />
          </div>
        </div>
        }   
        </div>
        <div className="footer">
          <Footer />
        </div>   
      </header>
  );
}

export default App;
