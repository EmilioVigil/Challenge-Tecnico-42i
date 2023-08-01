# CHALLENGE TÉCNICO 42I

Repositorio con las soluciones de los dos ejercicios del Challenge-Técnico de 42i.

Lo trabajé puramente con JavaScript, el código de las mismas estan en la carpeta de Ejercicios en 2 diferentes archivos, cada una corresponde a cada ejercicio.

## SCRIPTS

npm i : Descargar dependencias.

npm start : Ejecuta nodemon main.js, en main se encuentran las llamadas a las funciones correspondientes a los ejercicios

### EJERCICIO 1: Two Number Sum

Given an array of integers, no number in this array is repeated, and an integer representing the target sum, implement a function that find whether there's a pair of numbers in the array that adds up to the target sum. Return the pair in an array. If such pair does not exist, return an empty array.

Examples:

`const numbers = [2, 7, 11, 15]`;
`const targetSum = 9`;

findPairWithSum(numbers, targetSum); // Output: [2, 7]

### EJERCICIO 2: Non-Constructible Change

Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you **cannot** create. The given coins can have any positive integer value and aren’t necessarily unique (i.e., you can have multiple coins of the same value).

For example, if you’re given coins = `[1, 2, 5]`, the minimum amount of change that you can’t create is `4`. If you’re given no coins, the minimum amount of change that you can’t create is 1.
