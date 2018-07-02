class ReflectionUtils 
{
	public constructor() {
	}

	public static GetInstanceByClassName(clsName:string,args?:any[])
	{
		let instance;
		try {
			instance = Object.create(window[clsName].prototype);
			instance.constructor.apply(instance);
		} catch (error) {
			console.log(error);
		}
		return instance;
	}
}