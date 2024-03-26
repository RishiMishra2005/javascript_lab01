function printTableOfThree() {
    for (let i = 1; i <= 10; i++) {
        let table = '';
        let sum = 0;
        for (let j = 1; j <= i; j++) {
            sum += 3;
            table += (j === 1) ? `3` : `+3`;
        }
        console.log(`3*${i}=${table}=${sum}`);
    }
}
printTableOfThree();
