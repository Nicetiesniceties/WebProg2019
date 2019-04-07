import React from 'react';

import CalcButton from '../components/CalcButton';

// Calculator App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {curr: '0', save: '', opt: ''};
  }

  resetState = () => {
    this.setState( {curr: '0', save: '', opt: ''} );
  }
  
  calcPending = () => {
    return eval(
      this.state.save.toString() + 
      this.state.opt + 
      this.state.curr.toString()
    ).toString().slice(0, 8);
  }

  plusMinus = () => {
    if (this.state.curr !== '0') { 
      this.setState((state) => ({
        curr: -parseFloat(state.curr).toString()
      }));
    }
  }

  numHandler = (num) => {
    this.setState((state) => ({
      curr: (state.curr === '0' || state.opt === '=' || (!state.save && state.opt) ) ? num : state.curr + num,
      save: (!state.save && state.opt) ? state.curr : state.save,
      opt: (state.opt === '=') ? '' : state.opt
    }));
  }

  operatorHandler = (opt) => {
    if (this.state.save === '') 
      this.setState( {opt: opt} );
    else 
      this.setState( {curr: this.calcPending(), save: '', opt: opt} ) ;
  };
  
  equalHandler = () => {
    this.setState( (state) => ({
      curr: (state.save && state.opt) ? this.calcPending() : state.curr,
      save: '',
      opt: '='
    }));
  }

  dotHandler = () => {
    this.setState( (state) => ({
      curr: (state.curr.includes('.')) ? state.curr : state.curr + '.',
    }));
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
            <CalcButton onClick={this.resetState}>AC</CalcButton>
            <CalcButton onClick={this.plusMinus}>+/&minus;</CalcButton>
            <CalcButton onClick={()=>this.operatorHandler('%')}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={()=>this.operatorHandler('/')}>&divide;</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={()=>this.numHandler('7')}>7</CalcButton>
            <CalcButton className="calc-number" onClick={()=>this.numHandler('8')}>8</CalcButton>
            <CalcButton className="calc-number" onClick={()=>this.numHandler('9')}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={()=>this.operatorHandler('*')}>&times;</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={()=>this.numHandler('4')}>4</CalcButton>
            <CalcButton className="calc-number" onClick={()=>this.numHandler('5')}>5</CalcButton>
            <CalcButton className="calc-number" onClick={()=>this.numHandler('6')}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={()=>this.operatorHandler('-')}>&minus;</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={()=>this.numHandler('1')}>1</CalcButton>
            <CalcButton className="calc-number" onClick={()=>this.numHandler('2')}>2</CalcButton>
            <CalcButton className="calc-number" onClick={()=>this.numHandler('3')}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={()=>this.operatorHandler('+')}>+</CalcButton> 
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number bigger-btn" onClick={()=>this.numHandler('0')}>0</CalcButton>
            <CalcButton className="calc-number" onClick={this.dotHandler}>.</CalcButton>
            <CalcButton className="calc-opt" onClick={this.equalHandler}>=</CalcButton> 
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
