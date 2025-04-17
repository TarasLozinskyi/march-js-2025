// #UMoNq4biWGe
//
// – У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).


let day;
// day = 2;
day = 11;
// day= 31;
// day =32;

if(day >=1 && day <= 10 ){
    console.log('Перша декада')
}else if (day >=11 && day<= 20){
    console.log('Друга декада')
}else if (day >=21 && day<=31){
    console.log('Третя дикада')
}else {
    console.log('error')
}
