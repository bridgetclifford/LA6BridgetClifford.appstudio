function addTwo(n1,n2) {
    let answer1 = n1 + n2
    return answer1
}

function multiplyTwo(n1,n2) {
    let answer2 = n1 * n2
    return answer2
}


btnAdd.onclick=function(){
  let num1 = Number(inptNum1.value)
  let num2 = Number(inptNum2.value)
  alrtAnswer.value = addTwo(num1,num2)
}

btnMultiply.onclick=function(){
  let num1 = Number(inptNum1.value)
  let num2 = Number(inptNum2.value)
  alrtAnswer.value = multiplyTwo(num1,num2)
}

btnReset.onclick=function(){
  alrtAnswer.value = ""
  inptNum1.value = ""
  inptNum2.value = ""
}
