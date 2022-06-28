$(document).ready(function(){
  function numberWithCommas(x){
    //var a = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // change 1000 to 1,000
    return x.toString().replace(",",""); //change 1,000 to 1000;
  }

  function CFconversion(){
    var c = document.getElementById("celsius").value;
    var f = document.getElementById("fahrenheit").value;

    c = numberWithCommas(c);

    if (isNaN(c)){
        //alert("Please input Celsius number");
        f = "";
        return false;
      }

    f = c*(9/5) + 32;
    f = f.toFixed(2);
    document.getElementById("fahrenheit").value = f;
  }

  function FCconversion(){
    var c = document.getElementById("celsius").value;
    var f = document.getElementById("fahrenheit").value;

    f = numberWithCommas(f);

    if (isNaN(f)){
      alert("Please input Fahrenheit number");
      return false;
    }

    c = (f-32)*(5/9);
    c = c.toFixed(2);
    document.getElementById("celsius").value = c;
  }

  $("#celsius").keyup(function(){
    CFconversion();
  });

  $("#fahrenheit").keyup(function(){
    FCconversion();
  });
});