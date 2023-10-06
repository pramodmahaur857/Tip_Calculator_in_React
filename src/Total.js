import React from "react"
import "./Amount.css";
const style = {
    div:{
      height: "11vh",
    border: " 2px solid pink",
    }
    
}
class Total extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    const  re = this.props.final
    let costumer =0;
    let tip =0;
    for(let i = 0;i<re.length;i++){
      costumer += 1;
      tip += re[i].result
    }
    return<div style={{...style.div}}>
       <table>
         <thead>
           <tr>
             <th> Total costumers</th>
             <th>Totaal Tip</th>
           </tr>
           <tr>
             <td>{costumer}</td>
             <td>{tip}</td>
           </tr>
         </thead>
       </table> 
    </div>
  }
}
export default Total;