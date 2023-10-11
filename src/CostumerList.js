import React from "react"

const style = {
  main:{
    minHeight:"30vh",
    border:"2px solid pink",
    marginTop:"15px",
    fontFamily:"Arial",
    lineHight:"10px",
    fontSize:"14px"
  },
  text:{
    textAlign:"center",
    fontSize:"20px",
    fontWeight:"bold"
  }
}

class CostumerList extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return<div style={{...style.main}}>
      <div style={{...style.text}}>Costumer List</div>
      <div style={{border:"0.1px solid gray"}}>
      </div>
      <div style={{padding:"0px 5px 5px 0px"}}>
      <ul style={{lineHeight:"24px"}}>
        {this.props.costumer.map((data,index)=>{
        return <li key={index}>{data.costumer} offereing a tip of {data.result} rupee</li>
        })}
      </ul>
        </div>
    </div>
  }
}
export default CostumerList;