// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter
const arr = [1,2,3,4,10]

Array.prototype.cuForeach = function (callback){
    for (let i = 0; i < this.length; i++) {
        console.log(callback(this[i], i, this));
    }
}
arr.cuForeach(item => item+2);


Array.prototype.cuFilter = function (callback){
    const res =[];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            res.push(this[i]);
        }
    }
    return res
}

console.log(arr.cuFilter(item => item % 2 === 1));

Array.prototype.cuMap = function (callback) {
   const arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this))
    }
    return arr;
}

console.log(arr.cuMap(item => item + 10));

Array.prototype.cuSome = function (callback){
    let bool = false;
    for (let i = 0; i < this.length; i++) {
        if( callback(this[i], i, this)){
            bool = callback(this[i], i, this);
        }

    }
    return bool;
}
console.log(arr.cuSome(item => item === 7));
