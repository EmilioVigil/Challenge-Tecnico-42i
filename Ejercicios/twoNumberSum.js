function FindPairWithSum(numbers, targetSum) {
    
    for (let i = 0; i < numbers.length; i++) {
        
        let initialValue = numbers[i]
        
        for (let j = i + 1; j < numbers.length; j++) {
            if ((initialValue + numbers[j]) === targetSum) return [initialValue, numbers[j]]
        }
    }
    
    return [];
}

module.exports = FindPairWithSum
