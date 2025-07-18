function func(num)
{
    if (num === 0)
    {
        return;
    }

    console.log(num);
    num = num - 1;
    func(num);
}


let a = 6;
func(a);