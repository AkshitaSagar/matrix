const matrixOne = [
    [4, 3, 2, 4],
    [9, 1, 5, 6],
    [2, 7, 9, 8],
    [8, 5, 2, 0],
  ];

  var diagonals=function(matrixOne){
      let length=matrixOne.length-1,
      sum = 0
      for(let i = 0; i<matrixOne.length; i++){
          sum += matrixOne[i][i]+ matrixOne[i][length-1]
      }
      return sum
  };
  console.log(matrixOne)
 

  function difference(matrixOne)
    {
    
        // Initialize sums of diagonals
        let d1 = 0, d2 = 0;
    
        for (let i = 0; i < matrixOne.length; i++)
        {
            d1 += matrixOne[i][i];
            d2 += matrixOne[i][matrixOne.length-i-1];
        }
        return Math.abs(d1 - d2);
    }
    document.write(difference(matrixOne));
        
    
