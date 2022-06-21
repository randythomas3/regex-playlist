const inputs = document.querySelectorAll('input')
const patterns = {
    telephone:/^\d{11}$/,
    username:/^[a-zA-Z0-9]{5,12}$/,
    password:/^[\w-@]{8,20}$/,
    slug:/^[a-z0-9-]{8,20}$/,
    email:/^[a-z\d\.-]+@[a-z\d-]+\.[a-z]{2,8}(\.[a-z]{2,8})?$/i,
};


function validation(field,regex){
    // console.log(regex.test(field.value))
    if(regex.test(field.value)){
        field.className = 'valid'
    } else {
        field.className = 'invalid'
    }
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





