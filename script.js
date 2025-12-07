let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = ""
let arr = Array.from(buttons);
arr.forEach(button =>{
    // evaluate(inbuilt function)
    button.addEventListener('click',(c)=>{
        if(c.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(c.target.innerHTML == 'AC'){
            string="";
            input.value = string;
        }else if(c.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{ 
            string += c.target.innerHTML;
            input.value = string;
        }
    })
})