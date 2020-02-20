let num = +prompt('add any number');
	
let a = true;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
    a = false; 
    }
   
}
 alert(a);

