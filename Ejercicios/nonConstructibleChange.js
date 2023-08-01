function NonConstructibleChange(coins) {

    if (coins.length === 0) return 1

    const newArray = coins.sort((a, b) => a - b)
    let change = 0;
     
    newArray.forEach(element => {
        if (element > change + 1) {
            return change++
        }

        change+=element

    });

    return change; 


}

module.exports= NonConstructibleChange

    
