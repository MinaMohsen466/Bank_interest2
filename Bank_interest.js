var 
    calc_button = document.getElementById("calc"),
    month_button = document.getElementById("month");

calc_button.onclick = function calc(){

    var Balance = document.getElementById("f_input").value,
        Bank_interest = document.getElementById("l_input").value,
        result = document.getElementById("result");

        result.textContent = Balance * Bank_interest / 100 + " In year";
        result.style.padding = ".6rem";
}

month_button.onclick = function calc1(){

    var Balance = document.getElementById("f_input").value,
        Bank_interest = document.getElementById("l_input").value,
        result = document.getElementById("result");

        result.style.padding = ".6rem";
        result.textContent = Balance * Bank_interest / 100 /12 + " In month";
}

