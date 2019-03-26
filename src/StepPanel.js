import React ,{Component} from 'react'; 
class StepPanel extends Component {
    
    wartoscInput = () => {
        let wartosc = this.inputStep.value
        this.props.stepValueChange(wartosc)
        
    } 
    render(){
    return (
        <div className="step-panel">
            <label>Krok:  
            <input type = "number" min ="1" max="10" ref={ (data) => {
            this.inputStep = data
        }}
        onChange = {this.wartoscInput}
        />
        </label>
        </div>
    )
}
}
export default StepPanel;
