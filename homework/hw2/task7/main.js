// #3ckURgvs
//
// – Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю або четверту частину години).

let time;
// time = 12;
// time= 23;
time = 40;
// time = 57;
// time =880;

if(time>=0 && time <= 14){
    console.log('Перша четверть');
}
else if (time >=15 && time <=29){
    console.log('Друга четверть');
}
else if (time >=30 && time <= 44){
    console.log('Третя четверть')
}
else if (time >= 45 && time <= 59){
    console.log('Четверта четверть')
}else {
    console.log('error')
}
