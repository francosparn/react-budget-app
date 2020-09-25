export const checkBudget = (budget, rest) => {

    let alertClass;

    if((budget / 4 ) > rest ){
        alertClass = 'alert alert-danger text-center';

    }else if((budget / 2) > rest ){
        alertClass = 'alert alert-warning text-center';
        
    }else{
        alertClass = 'alert alert-success text-center';
    }

    return alertClass;
}