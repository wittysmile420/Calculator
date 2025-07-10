// let clear_btn = document.querySelector(".clear");
// let del_btn = document.querySelector(".delete");
// let ans_btn = document.querySelector(".result");
// let dot_btn =  document.querySelector(".decimal");

// let divide_btn = document.querySelector(".divide");
// let add_btn = document.querySelector(".add");
// let subtract_btn = document.querySelector(".subtract");
// let multiply_btn = document.querySelector(".multiply");


// now we will store all number buttons
// let input_val = new Array(10);
// input_val[0] = document.querySelector(".zero");
// input_val[1] = document.querySelector(".one");
// input_val[2] = document.querySelector(".two");
// input_val[3] = document.querySelector(".three");
// input_val[4] = document.querySelector(".four");
// input_val[5] = document.querySelector(".five");
// input_val[6] = document.querySelector(".six");
// input_val[7] = document.querySelector(".seven");
// input_val[8] = document.querySelector(".eight");
// input_val[9] = document.querySelector(".nine");

function button_active_glow(button){
    button.classList.add("button_active");

    setTimeout(function(){
        button.classList.remove("button_active");
    }, 2*1000);
}

window.addEventListener("keyup",
    function(details){
        // key press = details.data
        let index_val = Number(details.key);
        if(index_val >= 0 && index_val <= 9 && details.key != ' '){
            input_val[index_val].click();
            button_active_glow(input_val[index_val]);
            return;
        }
        if(details.key == 'C'|| details.key == 'c'){
            clear_btn.click();
            button_active_glow(clear_btn);
            return;
        }
        if(details.key == "Backspace" || details.key == "Delete"){
            del_btn.click();
            button_active_glow(del_btn);
            return;
        }
        if(details.key == '/'){
            divide_btn.click();
            button_active_glow(divide_btn);
            return;
        }
        if(details.key == '*'){
            multiply_btn.click();
            button_active_glow(multiply_btn);
            return;
        }
        if(details.key == '-'){
            subtract_btn.click();
            button_active_glow(subtract_btn);
            return;
        }
        if(details.key == '+'){
            add_btn.click();
            button_active_glow(add_btn);
            return;
        }
        if(details.key == '.'){
            dot_btn.click();
            button_active_glow(dot_btn);
            returrn;
        }
        if(details.key == '=' || details.key == "Enter"){
            ans_btn.click();
            button_active_glow(ans_btn);
            return;
        }

        if(details.key != "Shift"){
            alert("Enter A Valid Operator or Number On Keybard Or Use Calculator UI's Digital Buttons");
        }
    }
);
