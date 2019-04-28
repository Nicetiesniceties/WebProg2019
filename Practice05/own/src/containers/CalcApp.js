import React from 'react';

import CalcButton from '../components/CalcButton';
import { PassThrough } from 'stream';

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curr: '0', 
      op: '',
      buff: ''  
    };
  }

  resetState = () => {
    this.setState({curr: '0', op: '', buff: '', eq_buff: ''})
  }

  sign_switch_handler = () => {
    if(this.state.curr !== "0")
      this.setState((state) => ({curr: (-parseFloat(state.curr)).toString().slice(0, 8)}))
  }
  percentage_handler = () =>
  {
    if(this.state.curr !== "0")
      this.setState((state) => ({curr: (parseFloat(state.curr) / 100).toString().slice(0, 8)})) 
  }
  num_handler = (num) => {
    if(this.state.curr === "0")
      this.setState((state) => ({curr: num.toString()}));
    else if(this.state.op && !this.state.buff)
      this.setState((state) => ({
        curr: num.toString(),
        op: state.op,
        buff: this.state.curr
      })); 
    else
      this.setState((state) => ({curr: (state.curr + num.toString()).slice(0, 8)}));
  }
  dot_handler = () => {
    this.setState((state) => ({curr: state.curr + "."}));
  }
  update_value = (curr, buff, opt) => {
    return eval(
      buff.toString() + 
      opt + 
      curr.toString()
    ).toString().slice(0, 8);
    //return (parseFloat(curr) + parseFloat(buff)).toString();
  }
  eq_handler = () => {
    var temp = this.state.curr;
    if(this.state.eq_buff)
    {
      console.log("eq_buff");
      this.setState(
        (state) => ({
          curr: this.update_value(state.eq_buff, state.curr, state.op), 
          buff: ""
        })
      )
    }
    else if(this.state.op && this.state.buff)
    {
      console.log("normal_buff");
      this.setState(
        (state) => ({
          curr: this.update_value(state.curr, state.buff, state.op), 
          op: state.op, 
          buff: "",
          eq_buff: temp 
        })
      )
    }
    console.log(this.state);
  }
  op_handler = (opt) => {
    var new_value;
    if(this.state.op === '')
      new_value = this.state.curr;
    else if(this.state.op && !this.state.buff)
      new_value = this.state.curr;
    else if(this.state.op && this.state.buff)
      new_value = this.update_value(this.state.curr, this.state.buff, this.state.op);
    this.setState(
      (state) => ({
        curr: new_value, 
        op: opt, 
        buff: "", 
        eq_buff: ""
      })
    )
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.curr}</div>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-btn" onClick={this.resetState}>AC</CalcButton>
            <CalcButton className="calc-btn" onClick={this.sign_switch_handler}>+/-</CalcButton>
            <CalcButton className="calc-btn" onClick={this.percentage_handler}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.op_handler("/")}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.num_handler('7')}>7</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.num_handler('8')}>8</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.num_handler('9')}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.op_handler("*")}>x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.num_handler('4')}>4</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.num_handler('5')}>5</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.num_handler('6')}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={()=>this.op_handler("-")}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.num_handler('1')}>1</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.num_handler('2')}>2</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.num_handler('3')}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.op_handler("+")}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number bigger-btn" onClick={() => this.num_handler('0')}>0</CalcButton>
            <CalcButton className="calc-number" onClick={this.dot_handler}>.</CalcButton>
            <CalcButton className="calc-operator" onClick={this.eq_handler}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
