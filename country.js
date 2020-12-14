const search=document.querySelector("#search");
const searchbtn=document.querySelector("#searchbtn");
const output=document.querySelector(".output");
const clearbtn=document.querySelector("#clearbtn");

searchbtn.addEventListener("click",()=>{
const country=search.value.toLowerCase();
if(country===""){
    output.innerHTML=`<h3>Please enter country name..</h3>`;
}else {
  fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
  .then((response)=> response.json())
  .then((data)=>{
    if(data.length){
    console.log(data)
    output.innerHTML=`
    <p>Name : ${data[0].name}</p>
    <p>Flag :</p> <img src="${data[0].flag}" class="flag">
    <p class="my-2">Borders with: ${data[0].borders.map((item=> item))}</p>
    <p class="my-2">Languages: ${data[0].languages.map((item=> item.name))}</p>
    <p class="my-2">Native Name: ${data[0].nativeName}</p>
    <p class="my-2">Population: ${data[0].population}</p>
    <p class="my-2">Region: ${data[0].region}</p>
    <p class="my-2">Regional Blocks: ${data[0].regionalBlocs.map((item=> item.name))}</p>
    <p class="my-2">Capital: ${data[0].capital}</p>
  <p class="my-2">Currencies: ${data[0].currencies.map((item=> item.name))}</p>
  <p class="my-2">Area-code: ${data[0].area}</p>
    `;
  }
  else {
      output.innerHTML=`<h3>Country doesnt exits..</h3>`;
  }
  })

  .catch((error)=>{
      output.innerHTML=`<p>${error}</p>`;
  })
}

search.value="";

})


clearbtn.addEventListener("click",()=>{
  output.innerHTML=`<h3>Info will be displayed here...</h3>`;
})
