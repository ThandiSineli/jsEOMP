let bought = JSON.parse(localStorage.getItem('purchaseditems'))
let table= document.querySelector('table')
table.innerHTML = bought.map((item, index) => {
    
    return `
    <table>
    <td>${index+1}</td>
    <td>${item.name}</td>
    <td>${item.description}</td>
    <td>R${item.price}</td>
    <td><img src='${item.url}'></img></td>
    </table>
    `
})

// try to calculate the toatal price of the items using reduce.
//  let totalBought= bought.reduce((acc,item) => (acc + item.price * item.price) , 0 ) ;
//  console.log("Total:"=totalBought)




 





 