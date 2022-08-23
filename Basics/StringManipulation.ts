class StringManipulation
{
	useVariableIntoAString() : string
	{
		let person = "my Lord";
		let date = new Date();
		return `Hello ${person}, today is ${date.toDateString()}!`;
	}

	run()
	{
		console.log(this.useVariableIntoAString());
	}
};

let strManipulator : StringManipulation = new StringManipulation();
strManipulator.run();