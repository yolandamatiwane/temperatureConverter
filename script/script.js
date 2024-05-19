let inp1 = document.querySelector('[type]')
let inp2 = document.querySelectorAll('[type]')[1]
let btn = document.querySelectorAll('.btn')[0]
let s1 = document.querySelectorAll('[value]')[0]
let selectFrom1 = document.querySelector('#inputGroupSelect01')
let selectFrom2 = document.querySelector('#inputGroupSelect02')

btn.addEventListener('click',()=> check(selectFrom1.value,selectFrom2.value))

function check(option1,option2){
    if(option1 ==1 && option2 == 1){
        inp2.value = inp1.value
    }
    if(option1 == 1 && option2 == 2 ) {
        inp2.value = eval(`(${inp1.value}*${9/5}+${32})`)
    }
    if(option1 == 1 && option2 == 3){
        inp2.value = eval(`${inp1.value}+${273.15}`)

    }
    if(option1 == 2 && option2 == 1){
        inp2.value = eval(`${inp1.value-32}*${5/9}`)
    }
    if(option1 ==2 && option2 == 2){
        inp2.value = inp1.value
    }
    if(option1==2 && option2==3){
        inp2.value = eval(`(${inp1.value-32}*${5/9}+${273.15})`)
    }
    if(option1 == 3 && option2 == 1){
        inp2.value = eval(`${inp1.value}-${273.15}`)
    }
    if(option1 == 3 && option2==2){
        inp2.value = eval(`(${inp1.value-273.15})*${9/5}+${32}`)
    }
    if(option1 ==3 && option2 == 3){
        inp2.value = inp1.value
    }
}

