// DOM ELEMENTS
const logger = document.getElementById('log')

//FUNCTION TAKES ELEMENT TO WHERE TO BE PLACED AN OUTPUT
function logToHTML(logger) {
    //CONVERT CONSOLE.LOG TO CONSOLE.OLD TO MAKE SURE ACTUAL CONSOLE WORKS FINE
    console.old = console.log;
    //CREATE NEW FUNCTION FOR CONSOLE.LOG
    console.log = function () {
        var output = "", arg, i;

        //ITERATE THROUGH ALL THE ARGUMENTS TO ADD THEM TO DOM ELEMENT
        for (i = 0; i < arguments.length; i++) {
            //TRANSFER CURRENT ELEMENT TO TEMPORARY VAR
            arg = arguments[i];
            //APPEND THE SPAN FOR EACH INPUT TO OUTPUT VAR
            output += "<span class=\"log-" + (typeof arg) + "\">";

            //CHECK IF THE INPUT NEEDS TO BE STRINGIFY
            if (
                typeof arg === "object" &&
                typeof JSON === "object" &&
                typeof JSON.stringify === "function"
            ) {
                //ADD STRINGIFY VERSION TO OUTPUT STRING
                output += JSON.stringify(arg);
            } else {
                //NO NEED TO STRINGIFY, JUST APPEND TO THE STRING
                output += arg;
            }

            //END THE SPAN TAG
            output += "</span>&nbsp;";
        }
        //ADD A BR TAG
        logger.innerHTML += output + "<br>";

        //ALSO APPLY THE REAL 'CONSOLE.LOG' FUNCTION TRANSFERED TO 'CONSOLE.OLD'
        console.old.apply(undefined, arguments);
    };
}
logToHTML(logger)
console.log("THIS IS CHECKING CONSOLE.LOG, GO TO THE CONSOLE TO TEST");
