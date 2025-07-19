function isPowerOfTwo(n) {
    if(n==1) return true;
    else if( (n%2 !=0) || n<1) return false;

    return isPowerOfTwo(n/2);
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(6));