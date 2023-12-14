


const TableForList = (props) => {
    
    return(
       <div>
        <table className ="table">
  <tbody>
    <tr>
      <th scope="row">{props.id}</th>
      
      <td>{props.itemName}</td>
      <td>{props.itemPrice}</td>
      <td>{props.itemAmount}</td>
    </tr>
  </tbody>
</table>
        
       </div>
    );
}

export default TableForList