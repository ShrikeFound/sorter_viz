import './App.scss';
import React, {Component} from 'react'
import BubbleSort from './components/BubbleSort'
import AlgorithmPicker from './components/AlgorithmPicker'

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

                <AlgorithmPicker handleChange={this.handleChange} sortingOptions={this.state.sortingOptions}/>

                <div className="algorithm-steps">
                    <h3>Algorithm steps displayed here</h3>
                  {this.state.sortingMethod === "bubble sort" && (<>
                      <li>
                        Our bubble-sort algorithm looks like this:
                      </li>
                      <li>
                        for i -> 0 to arrayLength
                      </li>
                      <li>
                        for j -> 0 to (arrayLength - i - 1)
                      </li>
                      <li>
                        if arr[j] > arr[j + 1]
                      </li>
                      <li>
                        swap(arr[j], arr[j + 1])}
                      </li>
                      <li>
                        So our steps for processing data looks like this:
                      </li>
                    <BubbleSort data={this.state.initialData}/>
                  </>)
                  }
                </div>
            </>
        )
    }
}


export default App


//Alright! So I'm thinking we can start with a couple components:
//a
