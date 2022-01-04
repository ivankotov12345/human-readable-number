module.exports = function toReadable (number) {
    let arrDis = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
let arrDig = ["","one","two","three","four","five","six","seven","eight","nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
  const n = number.toString()
  if (number <= 19){
    return ["zero","one","two","three","four","five","six","seven","eight","nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"][n];
  } else if (number >= 20 && number <= 99) {
    const disNumb = n[0] - 2;
    const digNumb = n[1];
    const disAll = [arrDis[disNumb], arrDig[digNumb]].join(' ');
    return disAll.trim();  
  } else if (number >=100) {
    if (n[1] == '0') {
      const digNumb = n[0];
      const intNumb = n[2];
      const hundrall1 = [arrDig[digNumb], 'hundred', arrDig[intNumb]].join(' ');
      return hundrall1.trim();
    } else if(n[1] == '1') {
      let nHundr1 = [n.slice(0, 1), n.slice(1)]
      const digNumb = nHundr1[0];
      const intNumb = nHundr1[1];
      const hundrall2 = [arrDig[digNumb], 'hundred', arrDig[intNumb]].join(' ');
      return hundrall2.trim()
    } else if(n[1] > '1') {
      const hunN = n[0];
      const disN = n[1] - 2;
      const digN = n[2];
      const hundrall3 = [arrDig[hunN], 'hundred', arrDis[disN], arrDig[digN]].join(' ');
      return hundrall3.trim()
    }
  }
}
