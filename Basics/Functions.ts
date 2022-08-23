class Functions
{
	withOptionalParameter(nb : number, last? : string) : string
	{
		return `Functions_withOptionalParameter ${nb} and ${last}`;
	}

	run()
	{
		console.log(this.withOptionalParameter(12)); // Functions_withOptionalParameter 12 and undefined
		console.log(this.withOptionalParameter(12, "Yes")); //Functions_withOptionalParameter 12 and Yes
	}
}

let func : Functions = new Functions();
func.run();