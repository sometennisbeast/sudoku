    // Randomly Execute Function
    let Sudokuhard1 =[
        ["","","","","","","","",""] 
       ,[8,"","",3,"",5,"","",2]
       ,["","",6,"","","",9,"",""]
       ,["",4,"","","",6,"",8,""]
       ,[7,"",1,"","","",4,"",""]
       ,["","","",9,"",1,"","",""]
       ,["",7,"","",6,"","",3,""]
       ,["","",3,"","","",1,"",""]
       ,["","","","",2,"",7,"",""]];
       
    let Sudokuhard2 =[
         [5,"","","",7,"","",8] 
        ,["","","","","","","","",""]
        ,["","",7,5,"","","","",3]
        ,[2,"","","",9,6,"","",""]
        ,["","","",2,"","","","",""]
        ,[4,9,"","",5,"","",3,""]
        ,["",7,"","","","","","",1]
        ,["","","","","",3,4,"",9]
        ,[9,"",2,"","","","","",""]];
       
    let Sudokuhard3 =[
         ["","",9,"",8,1,"","",""] 
        ,["",7,"",2,"","","",4,""]
        ,["",5,"","","",3,"","",""]
        ,["",3,"","",6,"",4,"",9]
        ,["","",8,"","","","","",2]
        ,["","","","","",9,"","",""]
        ,[4,"","",6,"","","",1,""]
        ,["","","",4,"","","",8,7]
        ,["","","","","","","",5,""]];
       
    let Sudokuhard4 =[
         ["","","",1,"","",2,"",""] 
        ,[8,"",2,"","",5,"","",""]
        ,["","",4,"","","","","",""]
        ,[2,"","",3,"","","","",1]
        ,["","","","","",9,7,"",""]
        ,[4,"","","",6,"","",8,""]
        ,["","","",2,"",7,"","",""]
        ,["","",5,9,"","","","",""]
        ,["","","","",1,"","",9,4]];
       
       
       let array = ['Sudokuhard1','Sudokuhard2','Sudokuhard3','Sudokuhard4'] // choose randomly sudoku array to show
       let ranFunc;
       ranFunc = array[Math.floor(Math.random() * array.length)];
       
               if (ranFunc == "Sudokuhard1") {
                sodukuarrayInput(Sudokuhard1);
               }
                else if (ranFunc == "Sudokuhard2") {
                sodukuarrayInput(Sudokuhard2);
               }
               else if (ranFunc == "Sudokuhard3") {
                sodukuarrayInput(Sudokuhard3);
                               }
               else if (ranFunc == "Sudokuhard4") {
                sodukuarrayInput(Sudokuhard4);
                                       }
                                   

function sodukuarrayInput(sodukuarray){ //display the sudoku array in the page
    debugger;
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
        debugger;
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
    debugger;
    if (ranFunc == "Sudokuhard1") {
    sodukuarrayInput(Sudokuhard1);
    }
   else if (ranFunc == "Sudokuhard2") {
    sodukuarrayInput(Sudokuhard2);
            }
            else if (ranFunc == "Sudokuhard3") {
    sodukuarrayInput(Sudokuhard3);
            }
           else if (ranFunc == "Sudokuhard4") {
    sodukuarrayInput(Sudokuhard4);
                    }
                }



                        