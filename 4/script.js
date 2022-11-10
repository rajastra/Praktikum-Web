function latihan(input){
	if(input <= 0 || input >= 21){
		console.log("Pilih bilangan antara 1 sampai 20");
		return;
	}

	if(input % 2 !== 0){
		let bil1=0;
		let bil2=1;
		let bil3=1;
		let arr=[];
		while(bil3 < input * 10){
			arr.push(bil3);
			bil3 = bil1 + bil2;
			bil1 = bil2;
			bil2 = bil3;
		}
		console.log(...arr);
		return;
	}

	if(input % 2 === 0){
		let result = 1;
		let arr = [];
		for(let i = 1 ; i <=  input / 2 ; i++ ){
			result *= i;
			arr.push(i);
		}
		const hasilPrint = `${arr.join('x')}=${result}`;
		console.log(hasilPrint);
	}
}

latihan(0);
latihan(30);
latihan(16);
latihan(17);
