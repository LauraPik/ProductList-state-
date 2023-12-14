import { useState, userId } from "react";
let productId = 0;

 const AddList = (props) =>{
    const [formData, setFromData]= useState({
        'id': '',
        'itemName': '',
        'itemPrice': '',
        'itemAmount':''


    })
    const handleChange = (event)=>{
        setFromData(
        {
            ...formData,
            [event.target.name]:event.target.value


        }
        )
    }

    const submitHandle = (event) =>{
        event.preventDefault();
        productId = productId + 1;
        // formData.Id = productId;
        props.onSave({...formData, id: productId})
        console.log(formData)

    }
    
    
    return(
  
        <form className="form" onSubmit={submitHandle}>
            <div className="form-group">
                <input disabled value={formData.id} onChange={handleChange} type="text" name="Id" placeholder="Prekes id:" className=" m-1 form-control" />
            </div>
            <div className="form-group" >
                <input value={formData.itemName} onChange={handleChange} type="text" name="itemName" placeholder="Prkes pavadinimas" className=" m-1 form-control"/>
            </div>
            <div className="form-group" >
                <input value={formData.itemPrice} onChange={handleChange} type="number" name="itemPrice" placeholder="Prkes kaina" className=" m-1 form-control"/>
            </div>
            <div className="form-group" >
                <input value={formData.itemAmount} onChange={handleChange} type="number" name="itemAmount" placeholder="Prkes kiekis" className=" m-1 form-control"/>
            </div>
            <div className="form-group">
                <button  type="submit" className="btn btn-primary">Saugoti</button>
            </div>
        </form>
   
    )
}

export default AddList