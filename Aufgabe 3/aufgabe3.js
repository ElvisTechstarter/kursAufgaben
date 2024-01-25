function generatePass() {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';
 
    for (let i = 0; i < 11; i++) {
        let symbol = Math.floor(Math.random()
            * str.length + 1);
 
        pass += str.charAt(symbol)
    }
 
    return pass;
}
 
console.log(generatePass());