import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {

  const[weight,setWeight]=useState(0);
  const[height,setHeight]=useState(0);
  const[bmi,setBmi]=useState('');
  const[message,setMessage]=useState('');
  const[bmimessage,setBmimessage]=useState('');
  
  let calcBmi= (event) =>{
    event.preventDefault();
    if(weight===0 || height===0)
    {
      window.alert("Check the values entered.");
    }
    
    else {
      console.log(weight);
      let bmi=(weight/(height*height))*10000;
      setBmi(bmi);
      setBmimessage("Your BMI is: " +bmi)

      if(bmi<18.5)
      {
        setMessage("You are in underweight range.")
      }
      else if(bmi>18.5 && bmi<24.9){
        setMessage("You are in healthy weight range.")
      }
      else if(bmi>24.9 && bmi<29)
      {
        setMessage("You are in overweight range.")
      }

      else if(bmi>29)
      {
        setMessage("You are in obese range.")
      }
    }
  }

  let reload=(e)=>
  {
    window.location.reload();
  }

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <form onSubmit={calcBmi}>
        <div>
          <label>Weight (KGs)</label>
          <input type="text"  value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Height (cm)</label>
          <input type="text"  value={height} onChange={(event)=>setHeight(event.target.value)}></input>
        </div>

        <div>
        <button type="submit" className='btn'>Check</button>
        <button type='submit' onClick={reload}>Check Again</button>
        </div>
        
        <div>
          <h3>{bmimessage}</h3>
          <h4>{message}</h4>
        </div>

      </form>

    </div>
  );
}

export default App;
