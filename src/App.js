import React, {useState} from "react"
import Display from "./components/Display"
import Button from "./components/Button"
import './App.css';

function App() {
  const [time, setTime]= useState({ms:0,s:0,m:0,h:0});
  const [interv, setInterv]= useState();
  const [status,setStatus]= useState(0)
  const start=()=>{
    run();
    setStatus(1)
    setInterv(setInterval(run,10));
  };
  var  updateMs=time.ms, updateM=time.m,updateS=time.s, updateH=time.h;
  const run=()=>{
    if(updateM===60){
      updateH++;
      updateM=0;
    }
    if(updateS===60){
      updateM++;
      updateS=0;
    }
    if(updateMs===100){
      updateS++;
      updateMs=0
    }
    updateMs++;
    return setTime({ms:updateMs,s:updateS,m:updateM,h:updateH})
  }
  const stop=()=>{
    clearInterval(interv);
    setStatus(2)
  };
  const reset=()=>{
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0,s:0,m:0,h:0})
  };

  return (
    <div className="App">
      <div className="clock-holder">
        <div className="stopwatch">
          <Display time={time}/>         
          <Button start={start} status={status} stop={stop} reset={reset}/>

        </div>
      </div>
      
    </div>
  );
}

export default App;
