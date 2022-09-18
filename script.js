var div = document.createElement('div')
div.innerHTML= 
`<input type="text" id="txt" placeholder="Enter CityName">
<button type="button" id="submit" onclick="foo()">Search</button>
<div id="active"></div>
<div id="deaths"></div>`;
document.body.append(div)

async function foo(){
    let cc = document.getElementById('txt').value;
    console.log(cc);

    let res = await fetch(`https://api.covid19api.com/dayone/country/${cc}`);

    let result = await res.json();
    console.log(result);

    var index = result.length-1;

    let result1 = result[index].Active;
    var result2 = result[index].Deaths;

    console.log(result1);
    console.log(result2);

     document.getElementById('active').innerText=`Total Active Cases:${result1}`;
     document.getElementById('deaths').innerText=`Total Deaths:${result2}`;
}