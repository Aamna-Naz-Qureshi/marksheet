const math = document.getElementById("math");
const science = document.getElementById("Science");
const sst = document.getElementById("sst");
const urdu = document.getElementById("urdu");
const english = document.getElementById("english");
const inputName = document.getElementById("inputName");
const inputRoll = document.getElementById("inputRoll");
const pTotal = document.getElementById("total");
const percent = document.getElementById("percent");
const grade = document.getElementById("grade");
const but = document.getElementById("but");


function emt(element) {
    element.value=""
}

but.addEventListener("click",()=>{

    const total = (+math.value) + (+science.value) + (+sst.value) + (+urdu.value) + (+english.value);
    const percentage = Math.round( (total / 500) * 100);

    pTotal.textContent=total;
    percent.textContent=percentage;

    if (percentage >= 85) {
        grade.textContent="A+"
    } 
    else if (percentage >= 75) {
        grade.textContent="A"
        
    } 
     else if (percentage >= 65) {
        grade.textContent="b"
        
    } 
     else if (percentage >= 55) {
        grade.textContent="c"
        
    } 
     else {
        grade.textContent="fail"
        
    } 
    emt(math)
    emt(science)
    emt(sst)
    emt(urdu)
    emt(english)
    emt(inputName)
    emt(inputRoll)

})

