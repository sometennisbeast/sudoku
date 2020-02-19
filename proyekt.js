//פונקצייה לבדיקת הזנת יוזר וסיסמא
function checkUser(){
    let InputName = document.getElementById('name').value;

    let InputPassword = document.getElementById('password').value;
//הודעת שגיאה על שם משתמש לא קיים
    if(InputName!= 'abcd'){
        document.getElementById('p1').innerHTML='Name does not exist';
    }

    //הודעת שגיאה על סיסמא לא נכונה
    if(InputPassword!='1234'){
        document.getElementById('p2').innerHTML='Wrong password';
    }
//פתיחת דף הכנה למשחק במידה והוכנס שם וביבמא נכונה
    if(InputName == 'abcd' && InputPassword == '1234'){
        document.getElementById('opening').style.display='none';
        document.getElementById('level').style.display='block';
       
    }
    
}

//מערך של סודוקו
var arraySudoku = [[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]],
[[4,8,3,7,2,9,5,6,1],[5,2,9,1,4,6,3,8,7],[7,1,6,5,3,8,2,4,9],[1,5,2,6,9,3,4,7,8],[6,4,7,8,5,2,9,1,3],
[3,9,8,4,1,7,6,5,2],[2,7,4,9,6,1,8,3,5],[9,6,1,3,8,5,7,2,4],[8,3,5,2,7,4,1,9,6]],
[[7,4,1,2,9,5,3,8,6],[9,8,3,1,7,6,5,4,2],[6,2,5,3,8,4,7,9,1],[4,6,7,9,1,3,2,5,8],[8,3,2,5,6,7,4,1,9],
[5,1,9,4,2,8,6,3,7],[2,7,4,8,3,9,1,6,5],[3,9,6,7,5,1,8,2,4],[1,5,8,6,4,2,9,7,3]],
[[6,9,5,3,8,4,2,7,1],[7,2,1,9,6,5,4,8,3],[8,4,3,1,7,2,9,6,5],[2,7,9,6,4,1,3,5,8],[4,3,8,7,5,9,1,2,6],
[5,1,6,2,3,8,7,4,9],[1,5,2,4,9,6,8,3,7],[9,6,7,8,2,3,5,1,4],[3,8,4,5,1,7,6,9,2]]];

//פונקציה שמכסה את הערכים בסודוקו בהתאם לרמת קושי
function level(difficult){
    
    debugger
    document.getElementById('level').style.display='none';
    let swapp;

    //מערך של סודוקו
var arraySudoku = [[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]],
[[4,8,3,7,2,9,5,6,1],[5,2,9,1,4,6,3,8,7],[7,1,6,5,3,8,2,4,9],[1,5,2,6,9,3,4,7,8],[6,4,7,8,5,2,9,1,3],
[3,9,8,4,1,7,6,5,2],[2,7,4,9,6,1,8,3,5],[9,6,1,3,8,5,7,2,4],[8,3,5,2,7,4,1,9,6]],
[[7,4,1,2,9,5,3,8,6],[9,8,3,1,7,6,5,4,2],[6,2,5,3,8,4,7,9,1],[4,6,7,9,1,3,2,5,8],[8,3,2,5,6,7,4,1,9],
[5,1,9,4,2,8,6,3,7],[2,7,4,8,3,9,1,6,5],[3,9,6,7,5,1,8,2,4],[1,5,8,6,4,2,9,7,3]],
[[6,9,5,3,8,4,2,7,1],[7,2,1,9,6,5,4,8,3],[8,4,3,1,7,2,9,6,5],[2,7,9,6,4,1,3,5,8],[4,3,8,7,5,9,1,2,6],
[5,1,6,2,3,8,7,4,9],[1,5,2,4,9,6,8,3,7],[9,6,7,8,2,3,5,1,4],[3,8,4,5,1,7,6,9,2]]];
    
    
//בחירת סודוקו רנדומלי
let chooseSudoku = arraySudoku[Math.floor(Math.random()*(4-0))];
//שמירת סודוקו שנבחר
let save = chooseSudoku;
// שמירת אינדקסים שנגריל רנדומלית במערך כדי להסתיר את תוכן התא למשתמש

// let mat = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
// [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];


//בחירת רמה קלה - איפוס 20 תאים בסודוקו הנבחר
    if(difficult==1){
        let mat = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
        
//הגרלת אינדקסים רנדומלית ושמירתם במטריצה כדי שנאפס את התוכן בהמשך
for(let i=0;i<20;i++){
    for(let j=0;j<2;j++){
        mat[i][j]=Math.floor(Math.random()*(9-0));
    }
}


mat.sort();
do {
    swapp = false;
    for (let k=0; k < 19 ; k++)
    {
        
            if ((mat[k][0]==mat[k+1][0]) && (mat[k][1]==mat[k+1][1]))
        {
            mat[k+1][1]= Math.floor(Math.random()*(9-0));
            mat.sort();
            swapp = true;
        }

        
    }
    
} while (swapp);

//איפוס התאים שנבחרו רנדומלית
for(let k=0;k<20;k++){
        chooseSudoku[mat[k][0]][mat[k][1]]=null;
         }

       } 



//בחירת רמה בינונית - איפוס 40 תאים בסודוקו הנבחר
    if(difficult==2){
        let mat = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
        
//הגרלת אינדקסים רנדומלית ושמירתם כדי שנאפס את התוכן בהמשך
for(let i=0;i<40;i++){
    for(let j=0;j<2;j++){
        mat[i][j]=Math.floor(Math.random()*(9-0));
    }
}


mat.sort();
do {
    swapp = false;
    for (let k=0; k < 39 ; k++)
    {
        
            if ((mat[k][0]==mat[k+1][0]) && (mat[k][1]==mat[k+1][1]))
        {
            mat[k+1][1]= Math.floor(Math.random()*(9-0));
            mat.sort();
            swapp = true;
        }

        
    }
    
} while (swapp);

//איפוס התאים שנבחרו רנדומלית
for(let k=0;k<40;k++){
        chooseSudoku[mat[k][0]][mat[k][1]]=null;
         }
 
    }

//בחירת רמה קשה - איפוס 60 תאים בסודוקו הנבחר
    if(difficult==3){
        let mat = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],[],[]];
        
//הגרלת אינדקסים רנדומלית ושמירתם כדי שנאפס את התוכן בהמשך
for(let i=0;i<60;i++){
    for(let j=0;j<2;j++){
        mat[i][j]=Math.floor(Math.random()*(9-0));
    }
}


mat.sort();
do {
    swapp = false;
    for (let k=0; k < 59 ; k++)
    {
        
         if ((mat[k][0]==mat[k+1][0]) && (mat[k][1]==mat[k+1][1]))
        {
            mat[k+1][1]= Math.floor(Math.random()*(9-0));
            mat.sort();
            swapp = true;
        }

        
    }
    
} while (swapp);

//איפוס התאים שנבחרו רנדומלית
for(let k=0;k<60;k++){
    chooseSudoku[mat[k][0]][mat[k][1]]=null;
         }
         
    }
    
    //שיבוץ הערכים על המשבצת שיוצג בדף 
        document.getElementById('b00').value=chooseSudoku[0][0];
       //במידה וכיסינן את האינפוט, נרצה לאפשר למשתמש להזין
        if(chooseSudoku[0][0]==null){
            document.getElementById('b00').disabled=false;
        }
        else{
            doc
        }
        document.getElementById('b01').value=chooseSudoku[0][1];
        if(chooseSudoku[0][1]==null){
            document.getElementById('b01').disabled=false;
        } 
        document.getElementById('b02').value=chooseSudoku[0][2];
        if(chooseSudoku[0][2]==null){
            document.getElementById('b02').disabled=false;
        }
        
        document.getElementById('b03').value=chooseSudoku[0][3];
        if(chooseSudoku[0][3]==null){
            document.getElementById('b03').disabled=false;
        }
        
        document.getElementById('b04').value=chooseSudoku[0][4];
        if(chooseSudoku[0][4]==null){
            document.getElementById('b04').disabled=false;
        }
        
        document.getElementById('b05').value=chooseSudoku[0][5];
        if(chooseSudoku[0][5]==null){
            document.getElementById('b05').disabled=false;
        }
        
        document.getElementById('b06').value=chooseSudoku[0][6];
        if(chooseSudoku[0][6]==null){
            document.getElementById('b06').disabled=false;
        }
        document.getElementById('b07').value=chooseSudoku[0][7];
        document.getElementById('b08').value=chooseSudoku[0][8];
        document.getElementById('b10').value=chooseSudoku[1][0];
        document.getElementById('b11').value=chooseSudoku[1][1];
        document.getElementById('b12').value=chooseSudoku[1][2];
        document.getElementById('b13').value=chooseSudoku[1][3];
        document.getElementById('b14').value=chooseSudoku[1][4];
        document.getElementById('b15').value=chooseSudoku[1][5];
        document.getElementById('b16').value=chooseSudoku[1][6];
        document.getElementById('b17').value=chooseSudoku[1][7];
        document.getElementById('b18').value=chooseSudoku[1][8];
        document.getElementById('b20').value=chooseSudoku[2][0];
        document.getElementById('b21').value=chooseSudoku[2][1];
        document.getElementById('b22').value=chooseSudoku[2][2];
        document.getElementById('b23').value=chooseSudoku[2][3];
        document.getElementById('b24').value=chooseSudoku[2][4];
        document.getElementById('b25').value=chooseSudoku[2][5];
        document.getElementById('b26').value=chooseSudoku[2][6];
        document.getElementById('b27').value=chooseSudoku[2][7];
        document.getElementById('b28').value=chooseSudoku[2][8];
        document.getElementById('b30').value=chooseSudoku[3][0];
        document.getElementById('b31').value=chooseSudoku[3][1];
        document.getElementById('b32').value=chooseSudoku[3][2];
        document.getElementById('b33').value=chooseSudoku[3][3];
        document.getElementById('b34').value=chooseSudoku[3][4];
        document.getElementById('b35').value=chooseSudoku[3][5];
        document.getElementById('b36').value=chooseSudoku[3][6];
        document.getElementById('b37').value=chooseSudoku[3][7];
        document.getElementById('b38').value=chooseSudoku[3][8];
        document.getElementById('b40').value=chooseSudoku[4][0];
        document.getElementById('b41').value=chooseSudoku[4][1];
        document.getElementById('b42').value=chooseSudoku[4][2];
        document.getElementById('b43').value=chooseSudoku[4][3];
        document.getElementById('b44').value=chooseSudoku[4][4];
        document.getElementById('b45').value=chooseSudoku[4][5];
        document.getElementById('b46').value=chooseSudoku[4][6];
        document.getElementById('b47').value=chooseSudoku[4][7];
        document.getElementById('b48').value=chooseSudoku[4][8];
        document.getElementById('b50').value=chooseSudoku[5][0];
        document.getElementById('b51').value=chooseSudoku[5][1];
        document.getElementById('b52').value=chooseSudoku[5][2];
        document.getElementById('b53').value=chooseSudoku[5][3];
        document.getElementById('b54').value=chooseSudoku[5][4];
        document.getElementById('b55').value=chooseSudoku[5][5];
        document.getElementById('b56').value=chooseSudoku[5][6];
        document.getElementById('b57').value=chooseSudoku[5][7];
        document.getElementById('b58').value=chooseSudoku[5][8];
        document.getElementById('b60').value=chooseSudoku[6][0];
        document.getElementById('b61').value=chooseSudoku[6][1];
        document.getElementById('b62').value=chooseSudoku[6][2];
        document.getElementById('b63').value=chooseSudoku[6][3];
        document.getElementById('b64').value=chooseSudoku[6][4];
        document.getElementById('b65').value=chooseSudoku[6][5];
        document.getElementById('b66').value=chooseSudoku[6][6];
        document.getElementById('b67').value=chooseSudoku[6][7];
        document.getElementById('b68').value=chooseSudoku[6][8];
        document.getElementById('b70').value=chooseSudoku[7][0];
        document.getElementById('b71').value=chooseSudoku[7][1];
        document.getElementById('b72').value=chooseSudoku[7][2];
        document.getElementById('b73').value=chooseSudoku[7][3];
        document.getElementById('b74').value=chooseSudoku[7][4];
        document.getElementById('b75').value=chooseSudoku[7][5];
        document.getElementById('b76').value=chooseSudoku[7][6];
        document.getElementById('b77').value=chooseSudoku[7][7];
        document.getElementById('b78').value=chooseSudoku[7][8];
        document.getElementById('b80').value=chooseSudoku[8][0];
        document.getElementById('b81').value=chooseSudoku[8][1];
        document.getElementById('b82').value=chooseSudoku[8][2];
        document.getElementById('b83').value=chooseSudoku[8][3];
        document.getElementById('b84').value=chooseSudoku[8][4];
        document.getElementById('b85').value=chooseSudoku[8][5];
        document.getElementById('b86').value=chooseSudoku[8][6];
        document.getElementById('b87').value=chooseSudoku[8][7];
        document.getElementById('b88').value=chooseSudoku[8][8];

//הצגת המשחק למשתמש
    document.getElementById('playing').style.display='block';
}

