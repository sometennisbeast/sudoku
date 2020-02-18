    // Randomly Execute Function
 debugger;
    let Sudokumedium1 =[
        ["",3,"",9,"","",6,7,""]
       ,[2,"","","",6,"",4,8,3]
       ,["",4,"","","","","","",""]
       ,[4,6,3,7,5,8,"",2,""]
       ,[9,"","",3,"",4,5,"",""]
       ,[5,"","",6,"",9,7,"",4]
       ,[6,2,7,"","","","","",5]
       ,["","","","",3,6,"",9,""]
       ,[3,8,9,4,7,5,"",1,6]];
       
    let Sudokumedium2 =[
         ["","",1,6,"",3,"",4,""] 
        ,[2,4,"","","","",3,8,""]
        ,["",9,3,"",5,"",2,"",1]
        ,[7,1,"",3,6,"","",5,""]
        ,["",8,2,"","","",6,1,""]
        ,["",6,4,"",9,2,"",3,8]
        ,["","",7,"",1,"",8,"",3]
        ,[1,2,8,"","","","",6,4]
        ,["",3,"",2,"",5,1,"",""]];
       
    let Sudokumedium3 =[
         [7,9,"","",5,"","",2,3] 
        ,[2,1,"",9,"",8,"",5,""]
        ,[4,"","",2,6,"","","",1]
        ,["","","",7,"",1,"",3,""]
        ,[1,"","",4,8,5,"","",6]
        ,["",4,"",3,"",6,"","",""]
        ,[9,"","","",7,"","",5]
        ,["",7,"",5,"",2,"",6,9]
        ,[3,2,5,"",4,9,7,1,8]];
       
    let Sudokumedium4 =[
         [8,"","",4,1,5,"","",""] 
        ,["",5,"","",6,9,"",8,7]
        ,[2,4,"",3,7,"","",6,""]
        ,["",1,"","",3,7,"",2,""]
        ,[6,3,"",8,2,1,7,5,9]
        ,[7,"","",5,"","",3,1,""]
        ,["","","",1,"",6,"",7,""]
        ,[4,8,"","",5,"",6,"",1]
        ,["",6,"","","",3,"",4,""]];
       
       
       let array = ['Sudokumedium1','Sudokumedium2','Sudokumedium3','Sudokumedium4'] // choose randomly sudoku array to show
       let ranFunc;
       ranFunc = array[Math.floor(Math.random() * array.length)];
       
               if (ranFunc == "Sudokumedium1") {
                sodukuarrayInput(Sudokumedium1);
               }
                else if (ranFunc == "Sudokumedium2") {
                sodukuarrayInput(Sudokumedium2);
               }
               else if (ranFunc == "Sudokumedium3") {
                sodukuarrayInput(Sudokumedium3);
                               }
               else if (ranFunc == "Sudokumedium4") {
                sodukuarrayInput(Sudokumedium4);
                                       }
                                   

function sodukuarrayInput(sodukuarray){ //display the sudoku array in the page
    cell = 0;
        for(let row=0 ;row< sodukuarray.length ;row++){
               for(let col=0;col<sodukuarray[row].length;col++){
                let d=document.getElementById("cell-"+cell);
                let displaytext= sodukuarray[row][col] ;
                document.getElementById("cell-"+cell).value = displaytext;
                cell ++;
    }
        }
    }
    function checksudoku(){ // save the new sudoku in new matrix
        let newCell = 0
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
    }

function again(){ // restart the game 
    if (ranFunc == "Sudokmedium1") {
    sodukuarrayInput(Sudokmedium1);
    }
   else if (ranFunc == "Sudokmedium2") {
    sodukuarrayInput(Sudokmedium2);
            }
            else if (ranFunc == "Sudokmedium3") {
    sodukuarrayInput(Sudokmedium3);
            }
           else if (ranFunc == "Sudokmedium4") {
    sodukuarrayInput(Sudokmedium4);
                    }
                }



                        