function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    if (p == "")
    {
        alert("Please enter principal amount")
    }
    else if(p < 0)
    {
        alert("Principal amount must be positive number")
    }


    
    result = ((p/100)*r)*y;
    var d = new Date();
    var year= d.getFullYear();
    term = parseInt(y,10) + year;
    document.getElementById("total").innerHTML = "If you deposit " + p + ",</br>" +  " at an interest rate of " + r + ".</br> "  + "You will receive an amount " + result + ",</br> "  + " in the year " + term;
}

        