function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage
const n = parseInt(prompt("Enter the position in the Fibonacci sequence: "));
console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if (str.length <= 1) {
        return true;
    }
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1)); // Recur with the inner substring
    }
    return false;
}

// Example usage
const text = prompt("Enter a string: ");
if (isPalindrome(text)) {
    console.log("It is a palindrome!");
} else {
    console.log("It is not a palindrome.");
}
