input = "0 166.7 3 158.6 0 172.2 3 176.4 0 165.0 3 153.1 0 175.9 3 156.0 1 166.2 9 162.8 1 157.3 9 142.4 1 166.7 9 162.8 1 161.1 9 162.4"

out1 = ""
out2 = ""

input = input.split(" ")

for (let i = 0; i < input.length; i++) {
    if (i % 2 == 0) {
        out1 += input[i] + " "
    }
    else {
        out2 += input[i] + " "
    }
}

console.log(out1)
console.log(out2)