import AddList from "../AddList/AddList";
import TableForList from "../TableForList/TableForList";
import TableHead from "../tableHead/TableHead";
import { useState } from "react";

const Main = ()=>{
  
    const [posts, setPosts] = useState([])

    const handleListData = (data) =>{
        setPosts((prevData)=>{
            return[data,...prevData]
        })
    }

    console.log(posts)

    return(
        <main>
            <div className="conatainer">
            <h1>Prekes</h1>
            <p>Suveskite preke:</p>
            <AddList onSave = {handleListData}/>
            <TableHead />
            {posts.map((post)=>
                <TableForList key={post.id} id ={post.id} itemName ={post.itemName} itemPrice ={post.itemPrice} itemAmount ={post.itemAmount}/>
            )}
           
            </div> 

        </main>
    );
}

export default Main;

