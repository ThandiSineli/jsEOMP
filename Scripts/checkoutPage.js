let bought = JSON.parse(localStorage.getItem('purchaseditems'))
let table= document.querySelector('table')
table.innerHTML = bought.map((item, index) => {
    
    return `
    <tr>
    <td>${index+1}</td>
    <td>${item.name}</td>
    <td>${item.description}</td>
    <td>R${item.price}</td>
    <td><img src='${item.url}'></img></td>
    </tr>
    `
})






