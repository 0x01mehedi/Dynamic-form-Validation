  //defining function
  function sum(a,b){//input      
    let z=a+b; //process   
    //document.write(z); //output     
    return z;     
  }

   //defining function
  function sub(a,b){
      let z=a-b;
      //document.write(z);
      return z;
  }

  function isEven(a){
     if(a%2==0){
      return true;  
     }else{
      return false;
     }
  }


  function isPrime(n){
    
    for(let i=2;i<n;i++){          
      if(n%i==0){
        return false;
      }
    }
     
   return true;
  }