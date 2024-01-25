document.getElementById("btn").addEventListener("click", clickHandler);
var p =document.querySelector("div >p");

function clickHandler(){
    let joke="";
    const xhr=new XMLHttpRequest();
    xhr.open('GET' ,'https://api.api-ninjas.com/v1/dadjokes?limit=1');
    xhr.setRequestHeader('X-Api-Key','GA5WSBLzEBhV+v9BmgGiOA==hxRhzbamwxurhhdL');
    xhr.send();
    xhr.onload=function(){
        if(xhr.status===200){
            console.log(xhr.responseText);
            const result=JSON.parse(xhr.responseText);
            joke=result[0].joke;
            p.innerText=joke;
        }
    };
    

}