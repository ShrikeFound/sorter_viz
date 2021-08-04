import './App.scss';
import React, {Component} from 'react'
import BubbleSort from './components/BubbleSort'

class App extends Component{
    constructor() {
        super()
        this.state = {
            initialData: [100,40,25,45,12,0,983,50,22,396,374,308],
            sortingMethod: "bubble sort",
            sortingOptions: ["bubble sort","merge sort","some other sort","another sort","last sort(?)"]
        }

    }

    handleChange = (evt) =>{
        const newSortingMethod = evt.target.value
        this.setState({sortingMethod: newSortingMethod})
    }


    render(){
        return(
            <>
                <h1>Sorting Algorithm Visualizations</h1>
                <div className="initial-data">
                    <h3>Information Panel</h3>
                    <p>Initial Data:</p>
                    <p>{`[${this.state.initialData}]`}</p>
                    <p>{`Sorting Method: ${this.state.sortingMethod}`}</p>
                </div>


                {/* TODO: this should be a separate component */}
                <div className="algorithm-picker">
                    <h3>Select a Sorting Algorithm</h3>
                    <select value={this.state.sortingMethod} onChange ={(evt) =>this.handleChange(evt)}>
                        {this.state.sortingOptions.map((value,index) =>{
                            return <option key={index} value ={value}>{value}</option>
                        })}
                    </select>
                </div>

                <div className="algorithm-steps">
                    <h3>Algorithm steps displayed here</h3>
                    {this.state.sortingMethod === "bubble sort" && <BubbleSort data={this.state.initialData}/>}
                </div>
            </>
        )
    }
}


export default App


//Alright! So I'm thinking we can start with a couple components:
//a
