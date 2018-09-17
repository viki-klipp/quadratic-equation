module.exports = function solveEquation(equation) {
  let str = equation.replace(/ /g, '');
  
  let aReg = /(-?\d+)\*x\^2/i,
  bReg = /\x\^2((\-|\+)?\d+)\*x/i,
  cReg = /(-?\d+)$/i;
  
  let a = parseInt(str.match(aReg)[1]);
  let b = parseInt(str.match(bReg)[1]);
  let c = parseInt(str.match(cReg)[1]);

  let d = Math.pow(Math.abs(b), 2) - (4 * a * c);
  let x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
  let x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));
  
  return (x1 > x2) ? [x2, x1] : [x1, x2];
}
