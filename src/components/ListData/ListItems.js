import "./ListData.css"

const ListItems=(props)=>{
    return(<div className="list-items">
        <span className="span1">
            {props.name}
        </span>
        <span className="span2">{props.age}</span>  
           
    </div>)
}

export default ListItems;