import fetch from "node-fetch";
 async function fun(){
    var url="https://pokeapi.co/api/v2/pokemon"
    const data= await fetch(url)
    const data1= await data.json();
    const res=data1.results;
    console.log(res[3].name)
    const url1=res[2].url
    const data2= await fetch(url1)
    const data3=await data2.json();
    console.group(data3.sprites.front_default);
 }
fun()