function checksodoku(sodukuarray){
//    let counterArr=[0,0,0,0,0,0,0,0,0,0]
//     for(row=0;row<sodukuarray.length;row++) //checks all rows
//     {
//     for(col=0;col<sodukuarray[row].length;col++)
//     {
//     counterArr[sodukuarray[row][col]-1]++;
//     }
//     for(let i=0;i<counterArr.length;i++)
//     {
//     if (counterArr[i]!=1) {
//         return false
//     }
//     counterArr=[0,0,0,0,0,0,0,0,0,0]
//     }
//     }
//     counterArr=[0,0,0,0,0,0,0,0,0,0]
//     for(col=0;col<sodukuarray.length;col++)
//     {
//         for(row=0;col<sodukuarray[col].length;row++)
//         {
//             counterArr[sodukuarray[row][col]]++;
//         }
//         for(let i=0;i<counterArr.length;i++)
//     {
//     if (counterArr[i]!=1) {
//         return false
//     }
//     counterArr=[0,0,0,0,0,0,0,0,0,0]
//     }
//     }
let counterArrmatrix=
[0,0,0,0,0,0,0,0,0]
for(row=0;row<3;row++) // checks the most left top quadrant
{
    for(col=0;col<3;col++)
    {
         
            counterArrmatrix[sodukuarray[row][col]-1]++;
        
    }
}
counterArrmatrix=
[0,0,0,0,0,0,0,0,0]
for(row=0;row<3;row++) // Checks the center top quadrant
{
    for(col=3;col<6;col++)
    {
         
            counterArrmatrix[sodukuarray[row][col]-1]++;
        
    }
}
counterArrmatrix=
[0,0,0,0,0,0,0,0,0]
for(row=0;row<3;row++) // checks the most right top quadrant
{
    for(col=6;col<9;col++)
    {
         
            counterArrmatrix[sodukuarray[row][col]-1]++;
        
    }
}
counterArrmatrix=
[0,0,0,0,0,0,0,0,0]
for(row=3;row<6;row++)  // checks the most center top quadrant
{
    for(col=0;col<3;col++)
    {
         
            counterArrmatrix[sodukuarray[row][col]-1]++;
        
    }
}
counterArrmatrix=
[0,0,0,0,0,0,0,0,0]
for(row=6;row<9;row++) //checks the most left bottom quadrant
{
    for(col=0;col<3;col++)
    {
         
            counterArrmatrix[sodukuarray[row][col]-1]++;
        
    }
}
counterArrmatrix=
[0,0,0,0,0,0,0,0,0]
for(row=3;row<6;row++) // checks the center quadrant
{
    for(col=3;col<6;col++)
    {
         
            counterArrmatrix[sodukuarray[row][col]-1]++;
        
    }
}
counterArrmatrix=
[0,0,0,0,0,0,0,0,0]
for(row=3;row<6;row++) //checks the most right center quadrant
{
    for(col=6;col<9;col++)
    {
         
            counterArrmatrix[sodukuarray[row][col]-1]++;
        
    }
}
counterArrmatrix=
[0,0,0,0,0,0,0,0,0]
for(row=6;row<9;row++) // checks the center bottom quadrant
{
    for(col=3;col<6;col++)
    {
         
            counterArrmatrix[sodukuarray[row][col]-1]++;
        
    }
}
counterArrmatrix=
[0,0,0,0,0,0,0,0,0]           
for(row=6;row<9;row++)  // checks the most right bottom quadrant
{
    for(col=6;col<9;col++)
    {
         
            counterArrmatrix[sodukuarray[row][col]-1]++;
        
    }
}
console.log(counterArrmatrix);
}


checksodoku([
    [7,8,9,1,4,5,3,2,1],
    [4,5,6,4,1,2,3,2,1],
    [1,2,3,4,5,6,7,8,9],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]]);