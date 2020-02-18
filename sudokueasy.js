    // Randomly Execute Function
    let Sudokueasy1 =[
        ["",4,2,9,"",7,6,1,""] 
       ,[8,"",6,4,"",1,5,2,7]
       ,[7,3,"",6,5,2,"",8,4]
       ,[4,"",5,3,1,9,7,6,8]
       ,["",8,3,2,"",6,4,"",9]
       ,[6,"",9,5,4,8,2,"",1]
       ,[3,1,"",7,2,5,"",9,6]
       ,[2,"",7,"","",3,1,"",5]
       ,["",5,8,1,6,4,3,7,2]];
       
    let Sudokueasy2 =[
        [1,2,6,3,"",2,"",4,8]
       ,[3,"",4,1,9,8,5,"",6]
       ,["",7,"",4,5,6,2,1,3]
       ,[4,"",8,2,6,1,"",5,7]
       ,[2,3,"",9,4,5,"",8,1]
       ,[6,"",5,7,"",3,4,"",2]
       ,[7,"",1,5,2,9,"",3,4]
       ,[5,"",2,8,"",7,1,6,9]
       ,["",8,3,6,"",4,"",2,5]];
       
    let Sudokueasy3 =[
        ["",8,3,7,9,"",4,1,""]
       ,[6,"",1,8,4,2,5,"",7]
       ,[4,7,5,6,"","",2,9,8]
       ,[7,"",6,9,"",4,3,2,""]
       ,[1,3,"",5,2,6,"",8,4]
       ,["",2,4,1,"",3,6,5,9]
       ,[9,4,2,"","",8,"",7,""]
       ,[5,"",7,2,1,9,8,4,3]
       ,[3,1,8,4,5,7,"",6,2]];
       
    let Sudokueasy4 =[
        ["",1,5,6,3,8,9,7,""]
       ,[3,"",2,4,7,9,1,"",5]
       ,[7,8,"",2,1,5,"",6,4]
       ,[9,2,6,"","","",7,5,8]
       ,[1,3,8,"","","",4,2,9]
       ,[5,7,4,"",8,"",6,3,1]
       ,[2,5,"",1,6,4,"",9,3]
       ,[8,"",3,5,9,7,2,"",6]
       ,["",9,1,8,2,3,5,4,""]];
       
       
       let array = ['Sudokueasy1','Sudokueasy2','Sudokueasy3','Sudokueasy4']
       let ranFunc;
       ranFunc = array[Math.floor(Math.random() * array.length)];
       
               if (ranFunc == "Sudokueasy1") {
                sodukuarrayInput(Sudokueasy1);
               }
                else if (ranFunc == "Sudokueasy2") {
                sodukuarrayInput(Sudokueasy2);
               }
               else if (ranFunc == "Sudokueasy3") {
                sodukuarrayInput(Sudokueasy3);
                               }
               else if (ranFunc == "Sudokueasy4") {
                sodukuarrayInput(Sudokueasy4);
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
    if (ranFunc == "Sudokueasy1") {
    sodukuarrayInput(Sudokueasy1);
    }
   else if (ranFunc == "Sudokueasy2") {
    sodukuarrayInput(Sudokueasy2);
            }
    else if (ranFunc == "Sudokueasy3") {
    sodukuarrayInput(Sudokueasy3);
            }
    else if (ranFunc == "Sudokueasy4") {
    sodukuarrayInput(Sudokueasy4);
                    }
                }



                        