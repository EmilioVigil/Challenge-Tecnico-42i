/*
                                            [  TWO NUMBER SUM  ]

-Given an array of integers, no number in this array is repeated, and an integer representing the target sum, implement a function that 
-find whether there's a pair of numbers in the array that adds up to the target sum. Return the pair in an array. 
-If such pair does not exist, return an empty array.

Dado un array de enteros, ningún número de este array se repite, y un entero que representa la suma objetivo, implementar una 
función que encuentre si hay un par de números en el array que sumen la suma objetivo. Devuelve el par en un array. Si dicho par no existe, 
devuelve un array vacío.

EJ1:
const numbers = [2, 7, 11, 15];
const targetSum = 9;

findPairWithSum(numbers, targetSum); // Output: [2, 7]

EJ2:
const numbers = [3, 6, 8, 10];
const targetSum = 15;

findPairWithSum(numbers, targetSum); // Output: []

*/

const numbers = [3, 6, 8];
const targetSum = 15;

function findPairWithSum(numbers, targetSum) {
    
    for (let i = 0; i < numbers.length; i++) {
        // VALOR INICIAL A COMPARAR
        let initialValue = numbers[i]
        for (let j = i+1 ; j < numbers.length; j++) {
            // Voy comparando el valor inicial con todos los elementos del array
            if ((initialValue + numbers[j]) === targetSum) return [initialValue, numbers[j]]
        }
    }
    
    return [];
}

const res = findPairWithSum(numbers, targetSum)
console.log(res)


