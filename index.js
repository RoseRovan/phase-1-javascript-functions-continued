// code your solution here
// const log = console.log;
function saturdayFun(defaultActivity = 'roller-skate'){
    return `This Saturday, I want to ${defaultActivity}!`
}
// log(saturdayFun('bathe my dog')
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  function wrapAdjective(wrapper = '*'){
    return function (emphatic = 'special'){
        return`You are ${wrapper}${emphatic}${wrapper}!`
    }
}
// log(wrapAdjective("||")("a dedicated programmer"));
// log(wrapAdjective()("a hard worker"));
// log(wrapAdjective()());
// log(wrapAdjective('||')());