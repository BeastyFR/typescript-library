class UnionTypes
{
	isNumberOrString(param : number | string) : string
	{
		return `UnionTypes_isNumberOrString ${param}`;
	}

	isNumberOrStringAndSpecific(param : number | string) : string
	{
		if(typeof param == "string")
			return `UnionTypes_isNumberOrString ${param.toLocaleLowerCase()}`;
		else
			return `UnionTypes_isNumberOrString ${param}`;

	}

	run()
	{
		console.log(this.isNumberOrString(12)); 
		console.log(this.isNumberOrString("Yes")); 
		console.log(this.isNumberOrStringAndSpecific(12)); 
		console.log(this.isNumberOrStringAndSpecific("Yes")); 
	}
}

let unionTypes : UnionTypes = new UnionTypes();
unionTypes.run();