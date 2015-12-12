var userInput = prompt("Please choose a number between 1 and 100")

function fizzBuzz(integer){
	for(i=1; i<=integer; i++){
		if(i%15 === 0){
			console.log("fizzbuzz");
		}else if(i%5===0){
			console.log("buzz");
		}else if(i%3===0){
			console.log("fizz");
		}else if(i%1!=0){//doesn't work
			consolelog("Please do not enter a decimal number");
		}else{
			console.log(i)
		}
	}
}

fizzBuzz(userInput)


