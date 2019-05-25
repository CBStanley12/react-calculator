import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: "0",
      equation: ""
    }
  }

  render() {
    return (
      <div>
        <Button id="clear" value="clear" display="AC" />
        <Button id="sign" value="+/-" display="±" />
        <Button id="percent" value="%" display="%" />
        <Button id="divide" value="/" display="÷" />
        <Button id="seven" value="7" display="7" />
        <Button id="eight" value="8" display="8" />
        <Button id="nine" value="9" display="9" />
        <Button id="multiply" value="*" display="×" />
        <Button id="four" value="4" display="4" />
        <Button id="five" value="5" display="5" />
        <Button id="six" value="6" display="6" />
        <Button id="subtract" value="-" display="−" />
        <Button id="one" value="1" display="1" />
        <Button id="two" value="2" display="2" />
        <Button id="three" value="3" display="3" />
        <Button id="add" value="+" display="+" />
        <Button id="zero" value="0" display="0" />
        <Button id="decimal" value="." display="." />
        <Button id="equals" value="=" display="=" />
      </div>
    );
  }
}

const Button = props => <button type="button" id={props.id} value={props.value}>{props.display}</button>;

export default Calculator;
