import { useState } from "react";
import "./DataForm.css";

const DataForm=(props)=>{
   const[enteredName,setEnteredName]=useState('');
   const[enteredAge,setEnteredAge]=useState('');
   const[needCorrection,setCorrection]=useState(true);

const nameChangeHandler=(e)=>{
setEnteredName(e.target.value);

}
const ageChangeHandler=(e)=>{
setEnteredAge(e.target.value);
}

const submitHandler=(e)=>{
    e.preventDefault();

    if(enteredName && enteredAge && enteredAge>0){
      console.log("form submitted");
      const bothData={
      name:enteredName,
      age:enteredAge
      };
      props.dataHandler(bothData);
      setEnteredAge("");
      setEnteredName("");
    }
    else{
      // console.log("err");
      const correctionData={
        needCorrection,
        enteredAge,
        enteredName
      }
      
      props.formCorrection(correctionData);
     
    }
    
   

}


    return(<form className="form" onSubmit={submitHandler}>
        <div className='new-data__controls'>
          <div className='new-data__control'>
            <label>Name</label>
            <input
              type='text'
              value={enteredName}
              onChange={nameChangeHandler}
            />
          </div>
          <div className='new-data__control'>
            <label>Age</label>
            <input
              type='number'
              value={enteredAge}
              onChange={ageChangeHandler}
            />
          </div>
         
        </div>
        <div className='new-data__actions'>
          <button type='submit'>Add data</button>
        </div>
      </form>
    )
}

export default DataForm;