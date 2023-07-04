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

function start_array()
{
    value_u_got=document.getElementById("array_add").value;
    myarray.unshift(value_u_got);
    showthelist();
}
function showthelist()
{
    let text="<br><ul>";

    for (let i=0;i<myarray.length;i++)
    {
        text+= "<li>"+myarray[i]+"</li>"
    }
    text+="</ul>";
    document.getElementById("arrayrediv").innerHTML=text;
}

function last_arryre()
{
    alert (myarray[myarray.length-1]);
}
function delete_last_element()
{
    myarray.pop();
    showthelist();
}
function sortre()
{
    myarray.sort();
    showthelist();
}