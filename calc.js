const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

  

/*
  console.log('mathSymbol', mathSymbol);
  console.log('num1' , num1);
  console.log('num2', num2);
*/


  if (mathSymbol === "+"){
    console.log (num1 + num2);
  }

  if (mathSymbol === "-"){
    console.log (num1 - num2);
  }

  if (mathSymbol === "*"){
    console.log (num1 * num2);
  }

  if (mathSymbol === "/"){
    console.log (num1 / num2);
  }

  if (mathSymbol === "sqrt"){
    console.log (Math.sqrt(num2));
  }

  console.log('mathSymbol', mathSymbol);
  console.log('num1' , num1);
  console.log('num2', num2);

  //When entering numbers in node use prefix notation such as '+ 5 5'
  


	// This line closes the connection to the command line interface.
	reader.close()

});
