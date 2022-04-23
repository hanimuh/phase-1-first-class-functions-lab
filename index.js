// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(arr) {return arr.slice(0,2)}
returnFirstTwoDrivers(drivers)

function returnLastTwoDrivers(arr){ return arr.slice(-2)} 
returnLastTwoDrivers(drivers)


let selectingDrivers = 
    [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
    ]

function createFareMultiplier(int){
    return function (fare){
        return fare*int
    }
}

const fareDoubler= function(fn){
    return fn*2
}

const fareTripler= function(fn){
    return fn*3
}

function selectDifferentDrivers(arr=[], fn){
    return fn(arr)
}