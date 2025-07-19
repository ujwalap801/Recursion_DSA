let arr =[5, 3, 2, 1,8,1];

function odd(n)
{
    let isOdd = arr[n] %2 !=0;
    if(n==0)
    {
        return isOdd?arr[n] :0;
    }

    return ((isOdd?arr[n] :0)+odd(n-1));


}
console.log(odd(arr.length-1));