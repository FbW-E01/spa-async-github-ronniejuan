 console.log("first")


 new Promise(( resolve, reject  )=>{

    //reject ("potato")
    setTimeout(()=>{
        resolve("Done!")
    },3000)

})



.then((result)=>{ 
    console.log("Promise completed succesfully",result)
})


.catch((error)=>{
    console.log("Promise was Rejected", error)

})

.finally(()=>{

    console.log("promise was either resplverd or rejected")
})

console.log("LAST.")