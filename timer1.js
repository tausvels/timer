console.clear();
//process.stdout.write('\x07');
//process.stdout.write('.');

let input1 = process.argv;
const input = input1.slice(2);

console.log(input)

for(let i = 0; i < input.length; i++){
    setTimeout(()=>{
        process.stdout.write('\x07');
    }, Number(input[i]) * 1000);
}