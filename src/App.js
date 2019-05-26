import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: "0",
      equation: ""
    }
    this.numInput = this.numInput.bind(this);
    this.operInput = this.operInput.bind(this);
    this.decInput = this.decInput.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  numInput(e){

  }

  operInput(e){

  }

  decInput(e){
    
  }

  clearInput(){
    this.setState({
      display: "0",
      equation: ""
    });
  }

  calculate(){

  }

  render() {
    return (
      <div class="container">
        <Display equation={this.state.equation} display={this.state.display} />
        <Button id="clear" value="clear" display="AC" class="row-3 col-1" click={this.clearInput} />
        <Button id="sign" value="+/-" display="±" class="row-3 col-2" />
        <Button id="percent" value="%" display="%" class="row-3 col-3" />
        <Button id="divide" value="/" display="÷" class="oper row-3 col-4" click={this.operInput} />
        <Button id="seven" value="7" display="7" class="num row-4 col-1" click={this.numInput} />
        <Button id="eight" value="8" display="8" class="num row-4 col-2" click={this.numInput} />
        <Button id="nine" value="9" display="9" class="num row-4 col-3" click={this.numInput} />
        <Button id="multiply" value="*" display="×" class="oper row-4 col-4" click={this.operInput} />
        <Button id="four" value="4" display="4" class="num row-5 col-1" click={this.numInput} />
        <Button id="five" value="5" display="5" class="num row-5 col-2" click={this.numInput} />
        <Button id="six" value="6" display="6" class="num row-5 col-3" click={this.numInput} />
        <Button id="subtract" value="-" display="−" class="oper row-5 col-4" click={this.operInput} />
        <Button id="one" value="1" display="1" class="num row-6 col-1" click={this.numInput} />
        <Button id="two" value="2" display="2" class="num row-6 col-2" click={this.numInput} />
        <Button id="three" value="3" display="3" class="num row-6 col-3" click={this.numInput} />
        <Button id="add" value="+" display="+" class="oper row-6 col-4" click={this.operInput} />
        <Button id="zero" value="0" display="0" class="num row-7 col-1-2" click={this.numInput} />
        <Button id="decimal" value="." display="." class="num row-7 col-3" click={this.decInput} />
        <Button id="equals" value="=" display="=" class="oper row-7 col-4" click={this.calculate} />
      </div>
    );
  }
}

const Display = props => <div id="calc-display" className="row-1-2 col-1-4"><span id="eq">{props.equation}</span><span id="dis">{props.display}</span></div>;

const Button = props => <button type="button" id={props.id} value={props.value} className={props.class} onClick={props.click}>{props.display}</button>;

export default Calculator;
