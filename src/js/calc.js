"use strict"



if (confirm("Хотите ли вы расчитать сумму вашего сайта?")){
let arr = [];
function siteType(){
    arr[0]=prompt("Выберите тип сайта и укажите в строку его цену (только число): \n 1) Первый тип - 1000р \n 2)Второй тип - 2000р \n 3)Третий тип - 3000р");
}
    
function design(){
    arr[1]=prompt("Выберите дизайн сайта и укажите в строку его цену (только число): \n 1) Первый дизайн - 1000р \n 2)Второй дизайн - 2000р \n 3)Третий дизайн - 3000р");
}
    
function adapt(){
    arr[2]=prompt("Выберите адаптивность сайта и укажите в строку его цену (только число): \n 1) Первая адаптивность - 1000р \n 2)Вторая адаптивность - 2000р \n 3)Третья адаптивность - 3000р");
}

function orderPrice(){
    let sum = 0, day=0;
    sum=Number(sum);
       day=Number(day);
    for (let i=0; i<3;i++){
        arr[i]=Number(arr[i]);
        sum+=arr[i];
        day=day+arr[i]/1000;
    }
    alert("Сумма вашего сайта: "+sum+"\n Время выполнения: "+day+" дня");
}
    
 siteType();
 design();
adapt();
orderPrice();
}


