
//const r=await fetch('https://apis.ccbp.in/login')
//const i=await r.json()
//console.log(i)
//console.log(r)


// const options={
    // method:'GET',
    // headers:{
        // Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU' 
// }
// }
// const r=await fetch('https://apis.ccbp.in/prime-deals',options)
// const i=await r.json()
// console.log(i)
//console.log(r)


const options1={
    method:'GET',
    headers:{
        Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhamEiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTYyMzA2NTUzMn0.UEOQcIZXSvDOB9uQXLLDjHsZtYbQ6LzndIItbVhg-e4' 
}
}
const r1=await fetch('https://apis.ccbp.in/products?sort_by=PRICE_LOW&category=4&rating=1&title_search=s',options1)
const i1=await r1.json()
console.log(i1)
//console.log(r1)

