function buyForm(form){
    if (form.adres.value && form.name.value && form.phone.value){
        alert(`Оформлен заказ на ${form.num.value} bottle v-2.0, по адресу ${form.adres.value}, на сумму ${form.num.value * 490}Р`)
        modal_close("buy_bottle")
    }
    else{
        alert("Ты пропустил поле")
    }
}

function canIBuy(num){
    if (10 >= num && num > 0) return 1 
    return 0
}

function buyMore(form){
    // alert("more")
    if (canIBuy(Number(form.num.value) + 1)) {

        form.num.value = Number(form.num.value) + 1
    }
}

function buyLess(form){
    // alert("less")
    if (canIBuy(Number(form.num.value) - 1)) {

        form.num.value = Number(form.num.value) - 1
    }
}

function modal_open(obj_id){
    document.getElementById(obj_id).setAttribute('style', 'display: flex;')
}

function modal_close(obj_id){
    document.getElementById(obj_id).setAttribute('style', 'display: none;')
}


