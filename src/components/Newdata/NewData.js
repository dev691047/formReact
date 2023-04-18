import DataForm from "./DataForm"

const NewData=(props)=>{

    const onSubmitdataHandler=(value)=>{
        const dataWithId={
            id:Math.random().toString(),
            ...value
        }
    props.dataHandler(dataWithId);
    }
    const formCorrection=(v)=>{
    // console.log(v);
    props.formCorrection(v);
    }

    return (<div>
     <DataForm 
      dataHandler={onSubmitdataHandler}
      formCorrection={formCorrection}
      />    
    </div>)
}

export default NewData;