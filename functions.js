let myarray=["Raj","Suraj","Sahil"];

function showmessagefromfunciton(pol)
{
    alert("This is obv not my first time here, but from external js "+pol);
    
}
function valueofre()
{
    let n=123.456789;
    alert(n.valueOf());
}
function toPrecisionre()
{
    let n=123.456789;
    alert(n.toPrecision(4));
}

function toFixedre()
{
    let n=123.456789;
    alert(n.toFixed(2));
}

function toExponentialre()
{
    let n=123.456789;
    alert(n.toExponential(2));
}

function toStringre()
{
    let n=123.456789;
    alert(n.toString());
}
function arrayre()
{
    value_u_got=document.getElementById("array_add").value;
    myarray.push(value_u_got);
    showthelist();
}

function showthelist()
{
    document.getElementById("arrayrediv").innerHTML=myarray;
}