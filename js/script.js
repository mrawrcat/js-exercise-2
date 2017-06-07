// console.log('this works');
// var x = 5;
// x +=1;
// x++;
// x = x+1;
// console.log(x);
// 3 diff ways to increment
// wheeeeeeeeeeee
// var y = 8;
// y-=1;
// y--;
// y=y-1;
// 3 diff ways to de-increment?
// var z = 1;
// z= z*2;
// z*=2;
// console.log(z);
// 2 diff ways to multiply
// var a = 1;
// a = a/2;
// a/=0;
// console.log(a);
// 2 diff ways to divide
// var b = 17;
// b = b % 2;//divides by the number and returns the remainder
// console.log(b);

function even_or_odd (num){
	var tester = num % 2;
	if(tester === 0){
		console.log("the value passed is even");
	}
	else if (tester === 1){
		console.log("the value passed is odd");
	}
	else{
		console.log("enter a number");
	}
}	

even_or_odd(10);
