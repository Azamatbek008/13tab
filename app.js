const elBox = document.querySelector('span');

const weeks =['Dushaba','Seshanb','CHorsham','Pashanb','Juma','SHanba']


setInterval(()=> {
    const date = new Date()
    elBox.textContent = `${date.getHours()}:${date.getMinutes().toString().padString(2, 0)} ${date.getSeconds()}` 
}, 1000);
const colors=['red','yelow','pink','black']
setInterval(()=>{
    let numren = Math.floor(Math.random() * 900)
    let numren2 = Math.floor(Math.random() * 600)
    let colran = Math.floor(Math.random() * 9)
    let colran2 = Math.floor(Math.random() * 9)
    let colran3 = Math.floor(Math.random() * 9)
    let colran4 = Math.floor(Math.random() * 9)
    let degran = Math.floor(Math.random() * 360)
    let degran2 = Math.floor(Math.random() * 360)
    document.
}

)