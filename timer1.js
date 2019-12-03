console.clear();
//process.stdout.write('\x07');
//process.stdout.write('.');

let input1 = process.argv;
const input = input1.slice(2);

//console.log(input)
let timeCounts = input.filter(function(ele) {
  return !isNaN(Number(ele)) && ele >= 0;
});

for (let i = 0; i < timeCounts.length; i++) {
  setTimeout(() => {
    process.stdout.write("\x07");
  }, Number(timeCounts[i]) * 1000);
}
