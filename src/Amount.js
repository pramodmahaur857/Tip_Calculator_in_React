import React from "react";
import "./Amount.css";

const style = {
  inbox:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-evenly",
    height:"40",
    alignItems:"center",
    border: "2px solid green",
    marginTop:"15px"
  }
}

class Amount extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      
    }
  }
  render(){
    return <div style={{...style.inbox}}>
      <div>Enter your bill amount</div>
      <div style={{width:"90%",textAlign:"center"}}><input style={{width:"90%"}} type="number" name="amount" onChange={(e)=>this.props.update(e)} value={this.props.empty.amount} placeholder="1000"></input></div>
       <hr style={{width:"100%"}}></hr> 
      <div className="service">
        How was the service?
        <select className="select" name="service" value={this.props.empty.service} onChange={(e)=>this.props.update(e)} >
          <option value=""> Choose</option>
          <option value="20">Excellent 20% </option>
          <option value="10"> Moderate 10% </option>
          <option value="5"> Bad 5% </option>
        </select>
        <input type="text" name="costumer" value = {this.props.empty.costumer} onChange={(e)=>this.props.update(e)} placeholder="Costumer Name"></input>
        <input type="button" className="btn"  value="Add costumer" 
          onClick = {()=>this.props.addata()}></input>
      </div>
    </div>
  }
}
export default Amount;