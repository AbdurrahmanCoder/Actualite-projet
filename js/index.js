 


 
fetch('https://gnews.io/api/v4/top-headlines?q=politique&country=fr&language=fr&token=5c20e1113984690e47d0c77c02227ca4 ') 

 
 
.then(function (response) {
  return response.json();
  
})


// console.log("working " + response)
.then(function (data) {

console.log( "working"+data);
 



  let img1 = document.querySelector('.img1')
// console.log(img1)
  let imgUrl = document.getElementById('imgUrl')
  let indexTitle = document.getElementById('indexTitle')

// index img start
  img1.src= ` ${data.articles[5].image}`
imgUrl.href=` ${data.articles[5].url}`
indexTitle.innerHTML=` ${data.articles[(5)].title}`
indexUrl.href=` ${data.articles[5].url}`
// index img end 


let anchors1 = document.getElementById('anchors1')
let anchors2 = document.getElementById('anchors2')
let anchors3 = document.getElementById('anchors3')
let anchors4 = document.getElementById('anchors4')
 

 
 anchors1.text =` ${data.articles[1].title}`
 anchors1.href =` ${data.articles[1].url}`
 
 anchors2.text =` ${data.articles[2].title}`
 anchors2.href =` ${data.articles[2].url}`
   
 anchors3.text =` ${data.articles[3].title}`
 anchors3.href =` ${data.articles[3].url}`
   
 anchors4.text =` ${data.articles[4].title}`
 anchors4.href =` ${data.articles[4].url}`
 

})
 



 
// fetch('https://gnews.io/api/v4/search?q=sport&country=fr&language=fr&token=c7e7ff9e5309678ffee247a96531a76d') 
fetch('https://gnews.io/api/v4/search?q=actualite&country=fr&language=fr&token=5c20e1113984690e47d0c77c02227ca4') 

.then(function (response) {
  return response.json();
})
.then(function (data) {

let secnational = document.querySelector('.secnational');

for(let i=5; i<=8; i++)
{ 
    
  secnational.innerHTML +=  `
<div class="InterArticle" id="InterArticleId">   

  <a href=" ${data.articles[i].url}">
  <img class="InterImage" src= ${data.articles[i].image} >   </a>
  <h4 >SPORT</h4> 
 
 <a class="InterAnchor" href=" ${data.articles[i].url}"><h3 class="InterTitle">  ${data.articles[i].title} </h3>     </a>
 
 
 
</div>`  
}

})

// fetch('https://gnews.io/api/v4/search?q=actualite&country=fr&language=fr&token=c2b9b2c9c0d7d431d1b0723515c24e55') 
fetch('https://gnews.io/api/v4/top-headlines?q=atmosphère climat&country=fr&length=15&language=fr&token=5c20e1113984690e47d0c77c02227ca4') 

.then(function (response) {
  return response.json();
})
.then(function (data) {

let EnvironSec = document.querySelector('.EnvironSec');

for(let i=0; i<=3; i++)
{ 
    
  EnvironSec.innerHTML +=  `
<div class="InterArticle" id="InterArticleId">   

  <a href=" ${data.articles[i].url}">
  <img class="InterImage" src= ${data.articles[i].image} >   </a>
  <h4 >ENVIRONNMENT</h4> 
 
 <a class="InterAnchor" href=" ${data.articles[i].url}"><h3 class="InterTitle">  ${data.articles[i].title} </h3>     </a>
 
 
 
</div>`  
}

})

// fetch('https://gnews.io/api/v4/top-headlines?q=atmosphère climat&country=fr&length=15&language=fr&token=c2b9b2c9c0d7d431d1b0723515c24e55 ') 
fetch('https://gnews.io/api/v4/search?q=sport&country=fr&language=fr&token=5c20e1113984690e47d0c77c02227ca4') 

.then(function (response) {
  return response.json();
})
.then(function (data) {

let sport = document.querySelector('.sport');

for(let i=0; i<=3; i++)
{ 
    
  sport.innerHTML +=  `
<div class="InterArticle" id="InterArticleId">   

  <a href=" ${data.articles[i].url}">
  <img class="InterImage" src= ${data.articles[i].image} >   </a>
  <h4 >ENVIRONNMENT</h4> 
 
 <a class="InterAnchor" href=" ${data.articles[i].url}"><h3 class="InterTitle">  ${data.articles[i].title} </h3>     </a>
 
 
 
</div>`  
}

})




 

  let  x = document.querySelector(".fa-bars");
  let  main = document.querySelector("main");

  let  x2 = document.querySelector(".list");
  
  let login = document.querySelector(".login");
  let logo = document.querySelector("#logo");
  x.addEventListener("click", myfunction);
  // x.addEventListener("click", myfunction2);

  function myfunction(){
    if (x2.style.display === "block") {
        x2.style.display = "none";
      } else {
         x2.style.display = "block";
        }


  }
 
  main.addEventListener("click", myfunction3);


  function myfunction3(){
 
        x2.style.display = "none";
    
 
 
}

  

 
 

 


 

















