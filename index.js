let results=document.querySelector("#result")
let button=document.querySelector(".btn")

let select=document.querySelector("select")
let input=document.querySelector("input")



  let offsetvalue=20
let limitvalue=0



button.addEventListener("click",()=>{
  fetchpokimon()
})


async function fetchpokimon(){
    let response=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limitvalue}&offset=${offsetvalue}`)
    console.log(response)
    let result=await response.json()
    // console.log(result.results)
    getdata(result.results)
    offsetvalue=offsetvalue+20
}
fetchpokimon()


async function getdata(arr){
   console.log(arr)
  for(let x of arr){
    let fetcheing=await fetch(x.url)
    let resutlfetch=await fetcheing.json()
    console.log(resutlfetch)
    getfecthing(resutlfetch)
  }
}
function getfecthing(arr){
    // console.log(arr)

    let divmain=document.createElement("div")
    divmain.classList.add("flip-card")
    divmain.innerHTML=`
   
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="${arr.sprites.other.dream_world.front_default}" alt="Avatar" >
      <p class="name">Name:   ${arr.name}</p>
    <p class="type">type:  ${arr.types[0].type.name}  </p>
    </div>
    <div class="flip-card-back">
      <p>height: ${arr.height}</p>
     <p>Weight: ${arr.weight}</p>
     <p>hp : ${arr.stats[0].base_stat}</p>
     <p>attack: ${arr.stats[1].base_stat}</p>
     <p>defence: ${arr.stats[2].base_stat}</p>
     <p>special_attack: ${arr.stats[3].base_stat}</p>
     <p>special_defence: ${arr.stats[4].base_stat}</p>
     <p>speed: ${arr.stats[5].base_stat}</p>
    </div>
  </div>

    `
    // console.log(arr.types[0].type.name);
    

let div=document.createElement("option")
  div.innerHTML=arr.types[0].type.name
  select.append(div)
    
  
  
    results.append(divmain)
   
   
}

 




inputfunc()
function inputfunc(){
 
input.addEventListener("input",()=>{
 
  let para=document.querySelectorAll(".name")
  let input=document.querySelector("input")
  let type=document.querySelector(".type")
    para.forEach((element,index)=>{
      console.log(select.value)
      if("Name"+":"+"   "+input.value===para[index].innerHTML){
         

          let div=document.querySelectorAll(".flip-card")
          results.style .display="none"
          button.style.display="none"
          let searchresult=document.querySelector("#searchresult")
          searchresult.innerHTML=div[index].innerHTML
    console.log(div)
      
      }

    })

    
    
// })


  
  //  console.log(para)
}
)}



       
    





