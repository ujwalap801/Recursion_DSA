let n =5;
function func(x)
{
    if(x>n)
    {
        return;
    }

    console.log(x);
    x++;
    func(x);

}

func(1);