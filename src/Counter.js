// Przykład komponentu funkcyjnego

// import React from 'react';
// const Counter = () => {
//     return(
//         <div className="counter">Licznik</div>
//     );
// };
// export default Counter;

// Przykład komponentu Klasowego
import React, { Component } from 'react'
import "./Counter.css"
import ButtonsPanel from './ButtonsPanel'
import StepPanel from './StepPanel'

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counterValue: this.props.initValue,
            stepCounter:  1 
        }
    }
    changeStep = (flag) => {
        this.setState( () =>{
            return({
               stepCounter: flag ,
            })
       });
       
    }

    changeValue = () => {
       this.setState( (prevState) =>{
            return({
                counterValue: parseInt(prevState.counterValue) + parseInt(prevState.stepCounter)  ,
            })
       });
    }
    resetCounter = (flag) => {
        
        if(flag === 0){
            this.setState({
                counterValue: 0,
            })
        }else if(flag === 1){
            this.setState({
                counterValue: this.props.initValue,
            })
        // }else if(flag === ){
        //     this.setState({
        //         counterValue: this.props.initValue /2,
        //     })
    }
}
    halfCounter = (value) => {
        if(value === 2){
            this.setState({
                counterValue: this.props.initValue * 2,
    })
    }
}
    render() {
        return ( 
        <div className = "counter" > 
        Licznik: 
            <span className = "value">

            {this.state.counterValue}
            
            </span> 
        
            <ButtonsPanel 
            changeCounterValue = {this.changeValue}
            resetCounterValue = {this.resetCounter}
            halfCounterValue = {this.halfCounter}
            stepChangeValue = {this.state.stepCounter}
            />
            <StepPanel 
            stepValueChange = {this.changeStep}
            />
        </div>
        )
    }
}
export default Counter;