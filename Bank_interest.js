var 
    calc_button = document.getElementById("calc"),
    month_button = document.getElementById("month");

calc_button.onclick = function calc(Num_of_years = 1){

    var Balance = document.getElementById("f_input").value,
        Bank_interest = document.getElementById("l_input").value,
        Num_of_years = document.getElementById("N_input").value,
        result = document.getElementById("result");
        
        result.textContent = Balance * Bank_interest * Num_of_years / 100 + " In "+ Num_of_years +" years";
        result.style.padding = ".6rem";
}

month_button.onclick = function calc1(){

    var Balance = document.getElementById("f_input").value,
        Bank_interest = document.getElementById("l_input").value,
        Num_of_years = document.getElementById("N_input").value,
        result = document.getElementById("result");

        result.style.padding = ".6rem";
        result.textContent = Balance * Bank_interest * Num_of_years / 100 / (Num_of_years * 12) + " In month";
}

