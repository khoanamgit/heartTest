// let menu = document.querySelector("#menu");
// let nav = document.querySelector(".nav-list");

// menu.onclick = () => {
//     menu.classList.toggle('fa-times') //fa-bars
//     nav.classList.toggle('active')
//     // console.log(Math.random())
//     // console.log(menu)
//     // console.log(nav);
// }


// Create function calAverage to calc average of 3 times
// const calAverage = (p1,p2,p3) => {
//     return (p1+p2+p3) / 3
// }
// const avgDophin = calAverage(1,2,3)
// const avgKoalas = calAverage(2,4,6)

// function checkWinner(avgDophin, avgKoalas){
//     if(avgDophin <= avgKoalas / 2){
//         return `Team winner is Koalas with average is ${avgKoalas}`
//     }else{
//         return `Team winner is Dolphin with average is ${avgDophin}`
//     }
// }

// console.log(checkWinner(avgDophin,avgKoalas))
// function calcTips(billValue){
//     if (billValue >= 50 && billValue <= 100){
//         let tipPrice = billValue + (billValue * 0.15)
//     }else{
//         tipPrice = billValue + (billValue * 0.2)
//     }
//     return tipPrice
// }

// const bills = [125,555,44];
// const tips = [];
// const total = []

// // console.log(bills.length)

// function calcTotal(bills){
//     for(let i = 0; i < bills.length; i++){
//         console.log(bills[i])
//         tips.push(calcTips(bills[i]))
//     }
// }

// calcTotal(bills)


// const jonas = {
//     birth: 1991,
//     firstName: 'Jonas',
//     friends: ['Michale', 'Bob', 'Mike'],
//     location: 'USA',
//     hasDriverlicense: false,
//     calcAge: function(){
//         return 2022 - this.birth
//     },

//     checkLicense: function(){
//         if(this.hasDriverlicense){
//             return 'has a driver license'
//         }else{
//             return 'no a driver license'
//         }
//     }


// }

// const text = `${jonas.firstName} have 3 friends. But best friend is ${jonas.friends[0]}`
// console.log(text)

// console.log(jonas.calcAge())

// console.log(`${jonas.firstName} is ${jonas.calcAge()} years-old teacher, and he ${jonas.checkLicense()}`)

// console.log(jonas.checkLicense())

// const mark = {
//     fullname: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     caclBmi: function() {
//         return this.mass / this.height ** 2
//     }
// }

// const bob = {
//     fullname: 'Bob Smith',
//     mass: 92,
//     height: 1.89,
//     caclBmi: function() {
//         return this.mass / this.height ** 2
//     }
// }

// console.log(`${bob.fullname}'s BMI ${bob.caclBmi()} is higher than ${mark.fullname}'s ${mark.caclBmi()} ! `)

// let text = '{"employees":[' +
// '{"firstName":"John","lastName":"Doe" },' +
// '{"firstName":"Anna","lastName":"Smith" },' +
// '{"firstName":"Peter","lastName":"Jones" }]}';

// console.log(text)
// const obj = JSON.parse(text);
// console.log(obj)


// =======================Code Safi Dc

const defaultBtn = document.querySelector('.default-btn')
const choosenBtn = document.querySelector('#custom-btn')
const img = document.querySelector('img')
choosenBtn.addEventListener('click', function(e){
    e.preventDefault()
    defaultBtn.click()
})

defaultBtn.addEventListener('change', function(e){
    e.preventDefault()
    const file = this.files[0]
    console.log(file)
    if (file){
        const reader = new FileReader()
        reader.onload = function(){
            const result = reader.result
            console.log(result)
            img.src = result
        }
        reader.readAsDataURL(file)
    }
})