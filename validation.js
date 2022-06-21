const inputs = document.querySelectorAll('input')
const patterns = {
    telephone:/^\d{11}$/
};


function validation(field,regex){
    console.log(regex.test(field.value))
}

// inputs.forEach((item) => {
//     item.addEventListener('keyup',(e)=>{
//         //console.log(e.target.attributes.name.value)
//       validation(e.target,patterns[e.target.attributes.name.value])
//    //validation(e.target,patterns['telephone'])
//       })
// 
// });
// THIS IS JUST A CONCISED CODE FOR THE ONE BELOW

inputs.forEach(itemLooped);
function itemLooped(item2){
    item2.addEventListener('keyup',Do)
    function Do(argument) {
        // console.log(argument.target.attributes.name.value)
   validation(argument.target,patterns[argument.target.attributes.name.value])
    }
}



