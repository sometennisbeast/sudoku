function checksodoku(sodukuarray){
   let counterArr=[0,0,0,0,0,0,0,0,0,0]
    for(row=0;row<sodukuarray.length;row++) //checks all rows
    {
    for(col=0;col<sodukuarray[row].length;col++)
    {
    counterArr[sodukuarray[row][col]]++;
    }
    for(let i=0;i<counterArr.length;i++)
    {
    if (counterArr[i]!=1) {
        return false
    }
    counterArr=[0,0,0,0,0,0,0,0,0,0]
    }
    }
    counterArr=[0,0,0,0,0,0,0,0,0,0]
    for(col=0;col<sodukuarray.length;col++)
    {
        for(row=0;col<sodukuarray[col].length;row++)
        {
            counterArr[sodukuarray[row][col]]++;
        }
        for(let i=0;i<counterArr.length;i++)
    {
    if (counterArr[i]!=1) {
        return false
    }
    counterArr=[0,0,0,0,0,0,0,0,0,0]
    }
    }
// let counterArrmatrix=[[0,0,0],[0,0,0][0,0,0]]
// for(i=0;i<9;i++)
// {
//     for(row=0;row<)
// }

}


