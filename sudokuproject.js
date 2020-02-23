let saveSudoku =[ // יצירת מטריציה חדשה לשמירת סודוקו שנבחר למטרת ההשוואה
 [0,0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0,0]];

var nullSudoku =[ //  יצירת מטריציה חדשה לשמירת סודוקו אחרי האיפוס למטרת הפונקציה של again()
 [0,0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0,0]];





// פונקציה שמכסה את הערכים בסודוקו בהתאם לרמת קושי
function level(difficult){
    document.getElementById('level').style.display='none';
    document.getElementById('playing').style.display='block';
//מערך של סודוקו 
var arraySudoku = [
[[5,3,4,6,7,8,9,1,2]
,[6,7,2,1,9,5,3,4,8]
,[1,9,8,3,4,2,5,6,7]
,[8,5,9,7,6,1,4,2,3]
,[4,2,6,8,5,3,7,9,1]
,[7,1,3,9,2,4,8,5,6]
,[9,6,1,5,3,7,2,8,4]
,[2,8,7,4,1,9,6,3,5]
,[3,4,5,2,8,6,1,7,9]],
[[4,8,3,7,2,9,5,6,1]
,[5,2,9,1,4,6,3,8,7]
,[7,1,6,5,3,8,2,4,9]
,[1,5,2,6,9,3,4,7,8]
,[6,4,7,8,5,2,9,1,3]
,[3,9,8,4,1,7,6,5,2]
,[2,7,4,9,6,1,8,3,5]
,[9,6,1,3,8,5,7,2,4]
,[8,3,5,2,7,4,1,9,6]],
[[7,4,1,2,9,5,3,8,6]
,[9,8,3,1,7,6,5,4,2]
,[6,2,5,3,8,4,7,9,1]
,[4,6,7,9,1,3,2,5,8]
,[8,3,2,5,6,7,4,1,9]
,[5,1,9,4,2,8,6,3,7]
,[2,7,4,8,3,9,1,6,5]
,[3,9,6,7,5,1,8,2,4]
,[1,5,8,6,4,2,9,7,3]],
[[6,9,5,3,8,4,2,7,1]
,[7,2,1,9,6,5,4,8,3]
,[8,4,3,1,7,2,9,6,5]
,[2,7,9,6,4,1,3,5,8]
,[4,3,8,7,5,9,1,2,6]
,[5,1,6,2,3,8,7,4,9]
,[1,5,2,4,9,6,8,3,7]
,[9,6,7,8,2,3,5,1,4]
,[3,8,4,5,1,7,6,9,2]]];

// בחירת סודוקו רנדומלי
let chooseSudoku = arraySudoku[Math.floor(Math.random()*(4-0))];

// שמירת הסודוקו שנבחר לתוך save sudoku לפני האיפוס
for(let row=0 ;row< saveSudoku.length ;row++){ 
     for(let col=0;col<saveSudoku[row].length;col++){
        saveSudoku[row][col] = chooseSudoku[row][col];
     }
    }
//בחירת רמה קלה - איפוס 20 תאים בסודוקו הנבחר
    if ((difficult==1)){
debugger;
// שמירת אינדקסים שנגריל רנדומלית במערך כדי להסתיר את תוכן התא למשתמש
        let mat = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
        for(let i=0;i<20;i++){
            for(let j=0;j<2;j++){
                mat[i][j]=Math.floor(Math.random()*(9-0));
            }
        }
// מיון המערך של האנדקסים למטרת זיהוי כפיליות ולשנות את הערכים הזהים  
        mat.sort();
        do {
            swapp = false;
            for (let k=0; k < 19 ; k++)
            {
                
                    if ((mat[k][0]==mat[k+1][0]) && (mat[k][1]==mat[k+1][1]))
                {
                    mat[k+1][0]= Math.floor(Math.random()*(9-0));
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
                
            
                sodukuarrayInput(chooseSudoku); 

        }
        //בחירת רמה בינונית - איפוס 40 תאים בסודוקו הנבחר
            else if(difficult==2){
debugger;
                let mat = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
            [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
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
                        mat[k+1][0]= Math.floor(Math.random()*(9-0));
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
                     sodukuarrayInput(chooseSudoku); 
                    }
                    //בחירת רמה קשה- איפוס 60 תאים בסודוקו הנבחר
            else if(difficult==3){
debugger;
                let mat = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
            [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
            [],[],[],[],[],[],[],[],[],[]];
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
                        mat[k+1][0]= Math.floor(Math.random()*(9-0));
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
                     sodukuarrayInput(chooseSudoku); 
                    }
    }

                
function sodukuarrayInput(chooseSudoku){ //הצגת הסודוק המאופס שנבחר למשתמש
    debugger;
         cell = 0;
            for(let row=0 ;row< chooseSudoku.length ;row++){
                 for(let col=0;col<chooseSudoku[row].length;col++){
                    nullSudoku[row][col] = chooseSudoku[row][col];
                    let d=document.getElementById("cell-"+cell);
                    let displaytext= chooseSudoku[row][col] ;
                         if (chooseSudoku[row][col] != null){
                         document.getElementById("cell-"+cell).style.fontWeight='bold';
                         document.getElementById("cell-"+cell).value= displaytext;
                         document.getElementById("cell-"+cell).disabled= true;
                         cell ++;
                         }
                         else {
                            document.getElementById("cell-"+cell).value= displaytext;
                            cell ++
                         }
             }
                 }
             
            }
             

 function again(){ // חזרה למצב קודם דרך הצגת הסודוקו המאופס השמור 
debugger;
let cell = 0;
            for(let row=0 ;row< nullSudoku.length ;row++){
                 for(let col=0;col<nullSudoku[row].length;col++){
                  let displaytextagain = nullSudoku[row][col] ;
                         if (nullSudoku[row][col] != null){
                         document.getElementById("cell-"+cell).style.fontWeight='bold';
                         document.getElementById("cell-"+cell).value= displaytextagain;
                         document.getElementById("cell-"+cell).disabled= true;
                         cell ++;
                         }
                         else {
                            document.getElementById("cell-"+cell).value = displaytextagain;
                            cell ++
                         }
             }
                 }
        }
                        
function checksudoku(){ // יצירת מערך סודוקו חדש מאופס ושמירת הפתרון עליו לצורך ההשוואה מול מערך סודוקו שנבחר
        debugger;
    let newCell = 0
    let count = 0;
    let newSudokuArray =[ [0,0,0,0,0,0,0,0,0]
                         ,[0,0,0,0,0,0,0,0,0]
                         ,[0,0,0,0,0,0,0,0,0]
                         ,[0,0,0,0,0,0,0,0,0]
                         ,[0,0,0,0,0,0,0,0,0]
                         ,[0,0,0,0,0,0,0,0,0]
                         ,[0,0,0,0,0,0,0,0,0]
                         ,[0,0,0,0,0,0,0,0,0]
                         ,[0,0,0,0,0,0,0,0,0]];
         for(let row=0 ;row< newSudokuArray.length ;row++){
                    for(let col=0;col<newSudokuArray[row].length;col++){
                        newSudokuArray[row][col] = parseInt(document.getElementById("cell-"+newCell).value) ;
                                     newCell ++;
                         }
                             }
                             for(let row=0 ;row< newSudokuArray.length ;row++){ // השוואה בין הסודוקו הפתור עם הסודוקו השמור
                                for(let col=0;col<newSudokuArray[row].length;col++){
                             if (saveSudoku[row][col] == newSudokuArray[row][col]){

                                    count++ ;
                                     
                            }
                             
                                }
                            }
                            if (count == 81){

                                alert('Well done, you have resolved correctly')
                            }
                            else{

                                alert('your solution is wrong');
                            }
                           start ()
                        }

// פונקציה שמאתחלת את התצוגה למשתמש ומאפסת את כל הערכים למטרת התחלה של משחק חדש                    
function start (){
debugger;
    document.getElementById('level').style.display='block';
    document.getElementById('playing').style.display='none';
let newSudokuArray2 =[    [0,0,0,0,0,0,0,0,0]
                         ,[0,0,0,0,0,0,0,0,0]
                         ,[0,0,0,0,0,0,0,0,0]
                         ,[0,0,0,0,0,0,0,0,0]
                         ,[0,0,0,0,0,0,0,0,0]
                         ,[0,0,0,0,0,0,0,0,0]
                         ,[0,0,0,0,0,0,0,0,0]
                         ,[0,0,0,0,0,0,0,0,0]
                         ,[0,0,0,0,0,0,0,0,0]];
let cell = 0;
       for(let row=0 ;row< newSudokuArray2.length ;row++){
                    for(let col=0;col<newSudokuArray2[row].length;col++){
                         document.getElementById("cell-"+cell).style.fontWeight='normal';
                         document.getElementById("cell-"+cell).value= newSudokuArray2[row][col];
                         document.getElementById("cell-"+cell).disabled= false;
                           cell ++;
                             }
}
}
//פונקצייה לבדיקת הזנת יוזר וסיסמא
function checkUser(){
debugger;
    let InputName = document.getElementById('username').value;
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
        document.getElementById('level').style.display='block';
        document.getElementById('opening').style.display='none';
        
       
    }
    
}

