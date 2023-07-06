let myarray=[];
let mymaps= new Map();

function map_add()
{
    ikey=document.getElementById("map_add_input_key").value;
    ivalue=document.getElementById("map_add_input_value").value;
    mymaps.set(ikey,ivalue);
    alert("Value has been added");
}
function map_remove()
{
    idelete=document.getElementById("map_remove_input").value;
    if (mymaps.delete(idelete))
    {
        alert("Key-value pair has been deleted.");
    }
    else
    {
        alert("No such key found");
    }  
}
function map_show()
{
    let text="";
    mymaps.forEach(function (value,key)
    {
        text += key +" : "+ value + "<br>"
    })
    document.getElementById("map_output").innerHTML=text;
}
function map_search()
{
    search=document.getElementById("map_search").value;
    
    alert(mymaps.get(search));
}

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
function reversere()
{
    myarray.sort();
    myarray.reverse();
    showthelist();
}
function sort_numberre()
{
    myarray.sort(function (a,b) {return a-b});
    showthelist();
}
function sort_number_reversere()
{
    myarray.sort(function (a,b) {return b-a});
    showthelist();
}
function find_index_of()
{
    let pos= myarray.indexOf("NikoMcAce");
    if (pos==-1)
    {
        alert ("NikoMcAce is Not found.");
    }
    else
    {
        alert ("NikoMcAce is at position : "+pos);
    }
}

function find_last_index_of()
{
    showthelist();
    let rpos= myarray.lastIndexOf("NikoMcAce");
    if (rpos==-1)
    {
        alert ("NikoMcAce is Not found.");
    }
    else
    {
        alert ("NikoMcAce is at position : "+rpos);
    }
}

function trycatchre()
{
    const arr=[1,2,3,4];
    try {
        arr=[12,23,43];
    } catch (error) {
        document.getElementById("trycatchrediv").innerHTML=error;
    }
}

function datere()
{
    let current_date= new Date();
    document.getElementById("datedivre").innerHTML=current_date;
    current_date= new Date("2002-07-20");
}

function owndatere()
{
    let current_date= new Date("2002-07-20");
    document.getElementById("datedivre").innerHTML=current_date;
}
function formatted()
{
    let current_date= new Date();
    let own=String(current_date.getFullYear())+"/"+String(current_date.getUTCMonth()+1)+"/"+String(current_date.getDay());
    alert(own);
}