import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn 
    //     </a>
    //   </header>

    //   <h1>Invitation to our wedding</h1>
    // </div>
    <div className='main-div'>
      
      <h1>RSVP FORM</h1>
      <p>HOPE TO SEE YOU SOON</p>

      <label>Name</label>
      <input type='text' placeholder='Name'></input>

      <label>Surname</label>
      <input type='text' placeholder='Surname'></input>

      <label>Email address</label>
      <input type='email' placeholder='email address'></input>

      <label>Date of birth</label>
      <input type='date'></input>

      <label>Contact number</label>
      <input type='number' placeholder='0786866166'></input>
      <br />
      <button type='submit' className='btn' >Submit</button>
    </div>
  );
}

export default App;
