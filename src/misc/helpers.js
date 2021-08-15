

//--------------------------
//sorting functions go here:
//--------------------------

//bubble sort from Kelen

const bubbleSortArray = arr => {
  console.log(arr)
  const initialArray = new Array(...arr)
  const sortingSteps = []

  for (let i = 0; i < initialArray.length; i++) {
    for (let j = 0; j < initialArray.length - i - 1; j++) {
      sortingSteps.push([...initialArray])
      // console.log(sortingSteps)
      if (initialArray[j] > initialArray[j + 1]) {
        [initialArray[j], initialArray[j + 1]] = [initialArray[j + 1], initialArray[j]]
      }
    }
  }

  return [initialArray,sortingSteps]
}