import React, { useState } from "react";

function App() {
  const [city,setCity]=useState("");
  const [result,setResult]=useState("");
  const changeHandler =e=>{
    setCity(e.target.value);
  }
  const submitHandler=e=>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=>response.json()
    ).then(data=>{
      const kelvin=data.main.temp;
      const celsuis=kelvin-273.15;
      setResult("Temperature at"+" "+city+"\n"+Math.round(celsuis)+"°C");
      setCity("");
    }).catch(error=>console.log(error));
  }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Weather App</h4>
            <form onSubmit={submitHandler}>
              <input type="text" name="city" value={city} onChange={changeHandler}></input><br/><br/>
              <input type="submit" value="Get Temperature" ></input>
            </form>
            <h1>{result}</h1>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
