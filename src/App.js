import './App.scss';
import React, { Component } from 'react'
import AlgorithmPicker from './components/AlgorithmPicker'
import AlgorithmSteps from './components/AlgorithmSteps';

class App extends Component {
  constructor() {
    super()
    this.state = {
      initialData: [100, 40, 25, 45, 12, 0, 983, 50, 22, 396, 374, 308],
      sortingMethod: "bubble sort",
      sortingOptions: ["bubble sort", "merge sort", "some other sort", "another sort", "last sort(?)"],
      sortedSteps: []
    }

  }

  // update to switch future 'render steps' state off
  handleAlgorithmSelect = (evt) => {
    const newSortingMethod = evt.target.value
    this.setState({ sortingMethod: newSortingMethod })
  }

  updateSortedSteps = (sortingSteps) => {
    console.log("new sorting steps: ", sortingSteps)
    this.setState({ sortedSteps: sortingSteps })
  }


  render() {
    console.log("current sorted steps: ", this.state.sortedSteps)
    return (
      <>
        <h1>Sorting Algorithm Visualizations</h1>
        <div className="initial-data">
          <h3>Information Panel</h3>
          <p>Initial Data:</p>
          <p>{`[${this.state.initialData}]`}</p>
          <p>{`Sorting Method: ${this.state.sortingMethod}`}</p>
        </div>

        <AlgorithmPicker handleAlgorithmSelect={this.handleChange} sortingOptions={this.state.sortingOptions} updateSortedSteps={this.updateSortedSteps} />

        {/* if sorting method is bubble sort, we can display the pseudocode and the sorting steps */}
        {this.state.sortingMethod === "bubble sort" && <AlgorithmSteps initialData={this.state.initialData} updateSortedSteps={this.updateSortedSteps} sortedSteps={this.state.sortedSteps} />}

      </>
    )
  }
}


export default App


//Alright! So I'm thinking we can start with a couple components:
//a
