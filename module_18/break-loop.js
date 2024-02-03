for (let i = 0; i < 10; i++) {
    console.log(i)
    if (i > 5) {
        break
    }

}

for (let n = 30; n < 40; n++) {
    console.log(n)
    if (n > 34) {
        break
    }
}

for (let j = 0; j < 10; j++) {

    if (j % 2 === 1) {
        continue
    }
    console.log(j)
}

for (let h = 0; h < 10; h++) {

    if (h % 2 === 1) {
        continue
    }
    console.log(h)
}