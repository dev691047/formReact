
import './App.css';
import { useState } from 'react';
import NewData from './components/Newdata/NewData';
import List from "./components/ListData/List";

const obj=[
  ];


function App() {
  const[data,setData]=useState(obj);
  const[correct,setCorrect]=useState(true);
  const[comment,setComment]=useState('');
  // const[floatText,setFloattext]=useState(false);

  const dataHandler=(values)=>{
    
   setData((prevData)=>{
    return [...prevData,values]
   });
  }

 const formCorrection=(v)=>{
 
    if(!v.enteredName && !v.enteredAge){
      setCorrect(false);
      setComment('enter name and age')
      console.log("enter name and age")
    }else if(!v.enteredAge){
     console.log("enter age");
     setComment('enter age')
     setCorrect(false);
  
    }else if(!v.enteredName){
      console.log("enter name");
      setComment(("enter name"))
      setCorrect(false);
    }else if(v.enteredAge<1){
      setCorrect(false);
      setComment("enter age greater than 1");
      console.log("enter age greater than 1")
    
    }
  }

  const clickHandler=()=>{
    setCorrect(true)
  }

  
  return (
       <div className="App">
            {!correct && <div className={`float-main `}>
              <div className='float-text'>
               <span className='app-span'>{comment}</span>
               <button className='btn' onClick={clickHandler}>ok</button>
              </div>
             
            </div>
            }
            <div className={`${!correct?'hide':null}`}>
            <NewData
             dataHandler={dataHandler}
             formCorrection={formCorrection}
            />

           <div className="list-div">
            <List  data={data}/>
           </div>
            </div>
            
          
    </div>
  );
}

export default App;
