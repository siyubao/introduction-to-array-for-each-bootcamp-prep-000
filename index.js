function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 10).toString()
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}
