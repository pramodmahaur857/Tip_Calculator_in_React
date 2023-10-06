import React from 'react';
import Amount from "./Amount";
import CostumerList from "./CostumerList";
import Total from "./Total";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fInput:{
        amount:"",
        service:"",
        costumer:"",
        result: ""
      },
      showOutput:false,
      arr:[]
    }
  }
  update(e){
    const data = {...this.state}
    data.fInput[e.target.name] = e.target.value;
    this.setState(data)
  }
  addata(){
    const data = {...this.state}
    if(data.fInput.amount===""){
      alert("Please fill all the Detals")
    }else if(data.fInput.costumer===""){
      alert("Please fill all the Detals")
    }else if(data.fInput.service===""){
      alert("Please fill all the Detals")
    }else{
      data.arr.push(data.fInput)
      data.fInput["result"] = (Number(data.fInput.amount)*Number(data.fInput.service))/100
      data.fInput = {
         amount:"",
          service:"",
          costumer:"",
          result: 0
      }
      this.setState(data)
    } 
  }
  calculate(){
    const data = {...this.state};
    if(data.arr.length===0){
      alert("Please add the data to the table")
    }else{
      data.showOutput = true;
      this.setState(data)
    }
  }
  render(){
    return<div className="container">
      <div className="sub">
        <div className="header">
          <h2>Tip Calculator</h2>
          <div>Build in react</div>
        </div>
        <Amount update = {this.update.bind(this)} addata = {this.addata.bind(this)}
          empty= {this.state.fInput}/>
        <CostumerList costumer = {this.state.arr}/>
        <div className="cal"> <button onClick={()=>this.calculate()}>caculate tip and costumer</button></div>
        {
          this.state.showOutput && (
            <Total final={this.state.arr}/>
          )
        }
        <div className="footer">2020 Tip-Calculator</div>
      </div>
      
    </div>
  }
}

export default App;