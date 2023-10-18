class Validation{

  static isValidEmail(email){
    let rex_email=/^[a-z]+[a-zA-Z0-9_]*[@][a-z]+[.][a-z]{2,3}$/;

    if(rex_email.test(email)){
       return true;
    }else{
       return false;
    }      
  }

  static isValidMobile(mobile){
    if(/^[0-9]{10,15}$/.test(mobile)){
        return true;
    }else{
        return false;
    }
  }

  static isValidUrl(){
    
  }
}