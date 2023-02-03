// First way
function isPalindrome(str) {
    return (
        str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
    )
}

console.log(isPalindrome('madam'))

// Second way 

const isPalindromes = (str) => str === str.split('').reverse().join('')
console.log(isPalindromes('madam'))