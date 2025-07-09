const clickSound = new Audio("click_2.mp3");

let display_text = document.querySelector(".display_result");

let clear_btn = document.querySelector(".clear");
let del_btn = document.querySelector(".delete");
let ans_btn = document.querySelector(".result");
let dot_btn =  document.querySelector(".decimal");

let divide_btn = document.querySelector(".divide");
let add_btn = document.querySelector(".add");
let subtract_btn = document.querySelector(".subtract");
let multiply_btn = document.querySelector(".multiply");


// now we will store all number buttons
let input_val = new Array(10);
input_val[0] = document.querySelector(".zero");
input_val[1] = document.querySelector(".one");
input_val[2] = document.querySelector(".two");
input_val[3] = document.querySelector(".three");
input_val[4] = document.querySelector(".four");
input_val[5] = document.querySelector(".five");
input_val[6] = document.querySelector(".six");
input_val[7] = document.querySelector(".seven");
input_val[8] = document.querySelector(".eight");
input_val[9] = document.querySelector(".nine");

let current_ans;
let prev_input = [];
let current_input = "" ;

//defining any num being clicked
for(let i = 0 ; i <= 9 ; i++){
    input_val[i].addEventListener("click" ,
        function(){
            // current click is button[i], that is 'i' digit
            // now first we will update number parameters
            if(current_input != undefined) prev_input.push(current_input);

            if(current_input === undefined || current_input === ""){
                current_input = `${i}`;
            }
            else{
                current_input += `${i}`;
                //current_input = parseFloat(current_input);
            }
            console.log(current_input);
            clickSound.play();
            display_text.innerHTML = `${current_input} `;
            console.log(prev_input, current_input);
        }
    );
}

dot_btn.addEventListener("click",
    function(){

        // we will check if dot alreayd exist or not
        // if(String(current_input).includes('.') == true){
        //     alert("Already dot present in the number being displayed");
        //     return;
        // }
        // now check for current_input being defined or not
        if(current_input != undefined || current_input !== ""){
            prev_input.push(current_input);
        }

        if(current_input === undefined || current_input === ""){
            current_input = "0.";
            
        }
        else{
            current_input += '.' ;
        }
        clickSound.play();
        display_text.innerHTML = `${current_input}`;

        console.log(prev_input, current_input);
    }
);

del_btn.addEventListener("click", 
    function(){
        if(prev_input.length >= 1){
            current_input = prev_input[prev_input.length - 1];
            prev_input.pop();
            display_text.innerHTML = `${current_input}`;
            console.log(prev_input, current_input);
            clickSound.play();
        }
        else if(current_input != undefined && current_input !== ""){
            current_input = "" ;
            display_text.innerHTML = "result display here" ;
            clickSound.play();
            return;
        }
        else{
            alert("No Prev State Found");
        }

        // if(current_input == "" || current_input.length == 0 || current_input == undefined){
        //     alert("No Prev State Found");
        //     return;
        // }
    }
);

clear_btn.addEventListener("click", 
    function(){
        if(current_input == ""){
            alert("No prev state found");
            return;
        }
        prev_input.length = 0;
        // let temp_current_intput;
        // current_input = temp_current_intput;
        current_input = "" ;
        display_text.innerHTML = "result display here" ;
        clickSound.play();

        num_til_now = "";
        before_num = undefined;
        after_num = undefined;
        latest_operator = undefined;
        result_ans = undefined;

        console.log(prev_input, current_input);
    }
)

// now we will do each operator seperatly
divide_btn.addEventListener("click",
    function(){
        if(current_input.length >= 1 && operator_check( current_input[current_input.length - 1] )[0]  ){
            alert("Invalid Operator Configuration");
            return;
        }

        if(current_input == undefined || current_input == "" || current_input.length == 0){
            alert("Enter some number before doing oepration");
            return;
        }
        prev_input.push(current_input);
        current_input += '/' ;
        console.log(prev_input, current_input);
        display_text.innerHTML = `${current_input}` ;
        clickSound.play();
    }
);
multiply_btn.addEventListener("click",
    function(){
        if(current_input.length >= 1 && operator_check( current_input[current_input.length - 1] )[0]  ){
            alert("Invalid Operator Configuration");
            return;
        }
        if(current_input == undefined || current_input == "" || current_input.length == 0){
            alert("Enter some number before doing oepration");
            return;
        }

        prev_input.push(current_input);
        current_input += '*' ;
        console.log(prev_input, current_input);
        display_text.innerHTML = `${current_input}` ;
        clickSound.play();
    }
);
subtract_btn.addEventListener("click",
    function(){
        if(current_input.length >= 2){
            if(current_input[current_input.length - 1] == '-' && operator_check( current_input[current_input.length - 2] )[0] == true) {
                alert("Invalid Operator Configuration");
                return;
            }
        }

        prev_input.push(current_input);
        current_input += '-' ;
        console.log(prev_input, current_input);
        display_text.innerHTML = `${current_input}` ;
        clickSound.play();
    }
);
add_btn.addEventListener("click",
    function(){
        if(current_input.length >= 1 && operator_check( current_input[current_input.length - 1] )[0]  ){
            alert("Invalid Operator Configuration");
            return;
        }

        if(current_input == undefined || current_input == "" || current_input.length == 0){
            alert("Enter some number before doing oepration");
            return;
        }

        prev_input.push(current_input);
        current_input += '+' ;
        console.log(prev_input, current_input);
        display_text.innerHTML = `${current_input}` ;
        clickSound.play();
    }
);

function operator_check(input_letter){
    if(input_letter == '/') return [true, '/'];
    if(input_letter == '*') return [true, '*'];
    if(input_letter == '-') return [true, '-'];
    if(input_letter == '+') return [true, '+'];

    return [false];
}
function do_operation(before_num, after_num, operator){
    if(operator == '/') return (before_num / after_num);
    if(operator == '*') return (before_num * after_num);
    if(operator == '-') return (before_num - after_num);
    if(operator == '+') return (before_num + after_num)
}
let num_til_now = "";
let before_num = undefined;
let after_num;
let target_operation;
let latest_operator;
let result_ans;

// need to seperatly handle when last char of current_int is not a operator
ans_btn.addEventListener("click",
    function(){
        if( !current_input || current_input.length === 0){
            alert("Enter some number before doing oepration");
            return;
        }

        if(operator_check(current_input[current_input.length - 1])[0] == true){
            alert("Enter Valid Last Number")
            return;
        }
        // from here on last char is valid and a number digit
        for(let i = 0 ; i < current_input.length ; i++){
            let ch = current_input[i];

            // for negativ number edge case
            if(ch == '-' ){
                // checking if prev char was an operator or not after maiking sure currect char is '-'
                if(i == 0 || operator_check(current_input[i-1])[0] == true){
                    num_til_now += '-' ;
                    continue;
                }
            }

            if (operator_check(ch)[0] == true) {
                // Operator found
                if (before_num === undefined) {
                    before_num = parseFloat(num_til_now);
                } else {
                    after_num = parseFloat(num_til_now);
                    before_num = do_operation(before_num, after_num, latest_operator);
                }

                num_til_now = ""; // reset buffer
                latest_operator = operator_check(ch)[1]; // store current operator
            }
            else {
                num_til_now += ch;
            }


        }

        // now we will do final operation with last number afyer iterating everything
        if(num_til_now != "") {
            after_num = parseFloat(num_til_now);

            if(before_num === undefined) {
                result_ans = after_num;
            }
            else{
                result_ans = do_operation(before_num, after_num, latest_operator);
            }

            if (result_ans % 1 !== 0) {
                result_ans = parseFloat(result_ans.toFixed(7)); // limit to 6 decimals
            }

            display_text.innerHTML = `${result_ans}`;
            clickSound.play();
            display_text.style.transform = "scale(1.1)";
            setTimeout(() => {
                display_text.style.transform = "scale(1)";
            }, 150);
            prev_input.push(current_input);
            current_input = result_ans.toString();

            num_til_now = "";
            before_num = undefined;
            after_num = undefined;
            target_operation = undefined;
            latest_operator = undefined;
            result_ans = undefined;
        }
    }
);
