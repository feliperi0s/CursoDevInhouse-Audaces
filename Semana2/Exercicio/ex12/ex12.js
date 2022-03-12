var arr = [12, 67, 23, 32];
for (var i=0; i < arr.length; i++) {
    console.log(arr[i]);
}
for(var e of arr) {
    console.log(e);
}
var i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}