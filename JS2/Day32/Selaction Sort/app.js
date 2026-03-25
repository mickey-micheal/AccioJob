let arr = [9,1,0,2,6]

for (let i = 0; i < arr.length; i++)
{
    let minidx = i

    for (let j = 0; j < arr.length; j++) 
    {
        if (arr[j] < arr[minidx]) 
        {
            minidx = j
        }
    }
    if(i != minidx)
    {
        let temp = arr[minidx]
        arr[minidx] = arr[i]
        arr[i] = temp
    }
}

console.log(arr)