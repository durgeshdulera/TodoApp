

export class Validators {

    IsEmpty   = (input :string) : boolean => {
        return input.length > 0 ? true : false;
    }
    
    IsLetters  = (input:string) : boolean => {
        const regexp = new RegExp('^[a-zA-Z ]*$');
        return regexp.test(input);
        
    }
    
    IsNumbers  = (input:string) : boolean => {
        const regexp = new RegExp('^[0-9 ]*$');
        return regexp.test(input);
    }

    IsEmail = (input:string) : boolean => {
        const regexp = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
        return regexp.test(input);
    }


}  

export const ValidateDescription = (Input:string) : string => {
    
    let errorMessage : string = "";
    const validator = new Validators();
    if(!validator.IsEmpty(Input)) { errorMessage =  "Description is required.\n";}
    if(!validator.IsLetters(Input)) { errorMessage += "Description should be letters only.\n";}
    return errorMessage;   
}

