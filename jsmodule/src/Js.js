/**
 * Created by manz on 14.08.2017.
 */

var a;

function bob() {
    return 6;
}

function isNotBoolean(test){
    var retVal = false; //or any other initialization
    if(typeof test === 'boolean'){
        retVal = false;
    }
    else{
        retVal = true;
    }
    return retVal;
}
