async function getData() {
    try{
        const response = await fetch('http://localhost:3000/statistics');
        const data = await response.json();
        console.log(data);
       return data

    }catch(error){
        //console.error('Error fetching data:', error);
    }
}
function writingdata(params) {
    let users=document.querySelector('.userstab')
    let Products=document.querySelector('.Products')
    let Sales=document.querySelector('.Sales')
    let Profit=document.querySelector('.Profit')
    getData().then(data=>{
        users.textContent=data.users
        Products.textContent=data.products
        Sales.textContent=data.sales
        Profit.textContent=data.profit

    })
}
 writingdata()