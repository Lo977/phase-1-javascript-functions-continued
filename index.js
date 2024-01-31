// code your solution here
function saturdayFun(target = "roller-skate") {

  return `This Saturday, I want to ${target}!`
}
function mondayWork(target = 'go to the office') {
  return `This Monday, I will ${target}.`
}

function wrapAdjective(parameter = "*") {
  return function(string = "special") {
    return `You are ${parameter}${string}${parameter}!`
 
 }
}