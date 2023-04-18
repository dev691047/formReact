
import ListItems from "./ListItems";

const List=(prop)=>{
    return(<div>
       {
         prop.data.map(v=>(
             <ListItems
             key={v.id}
             name={v.name}
             age={v.age}
             />           
         ))
        
       }
        {
            console.log(prop.data)
        } 
    </div>)
}

export default List;

//if you dont give data(array) in the app.js to data then 
// it will throw error here we are calling map function beacuse map wants an array