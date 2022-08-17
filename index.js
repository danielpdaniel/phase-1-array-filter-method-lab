// Code your solution here

function findMatching(array, name) {

const newName = name.toUpperCase()

return array.filter(function(obj) {
    return obj.toUpperCase() === newName
})
}

function fuzzyMatch(array, letters) {

const newLetters = letters.toUpperCase()

return array.filter(function(obj){
    return obj.slice(0, 2).toUpperCase() === newLetters
})
}

function matchName(array, stringName) {
return array.filter(function(obj){
    return obj.name === stringName
})
}