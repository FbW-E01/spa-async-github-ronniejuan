const form = document.getElementById('form')
const button =  document.getElementById('click')
const input = document.getElementById('searcher')
const resultData =  document.getElementById('result')
form.addEventListener('submit', async(x)=>{
  x.preventDefault()

resultData.innerHTML = ''

const url = `https://api.github.com/users/${input.value}/repos `




const fetchData = await fetch (url, {
    method:"GET"
})
const convertData =  fetchData.json()
convertData.then(result =>{
    result.map(v =>{
        console.log(v)

        
       const p =  document.createElement('p')
       resultData.appendChild(p)
       p.innerText = v.name
       p.addEventListener('click', ()=>{
       window.location.href = v.html_url
        
       })



        //resultData.innerHTML += `
       // <p> ${v.name}</p>

    })
})





  console.log("work bitte")

})


