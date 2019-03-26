import React,{Component} from 'react';
import ('./ButtonsPanel.css');
class ButtonsPanel extends Component {

    resetOrReinitCounter = (flag) =>{
        this.props.resetCounterValue(flag);
    }
    halfInitValue = (value) => {
        this.props.halfCounterValue(value);
    }
    render(){
        return(
        <div className="buttons-panel">
            <button onClick = {this.props.changeCounterValue}>Add{this.props.stepChangeValue}</button>
            <button onClick = {() => {this.resetOrReinitCounter (0)}}>Reset</button>
            <button onClick = {() => {this.resetOrReinitCounter (1)}}>ReInit</button>
            <button onClick = {() => {this.halfInitValue (2)}}>HalfInit</button>
        </div>
        )
    }
}
export default ButtonsPanel;
