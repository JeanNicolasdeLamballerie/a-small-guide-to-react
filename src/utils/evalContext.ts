
import stringifyError from "./errorStringifier";
function evalContext ( val: string ) {

    // "use strict";
    const vals: any[] = [];
    const cLog = console.log;
    console.log = ( ...args ) => {
        cLog( ...args );
        vals.push( ...args );
    };
    try
    {

        eval( `'use strict'; ${ val }` ); //eslint-disable-line no-eval 
        // We don't want eval to throw a warning so we disable it in the linter - it's designed to accept code here.
    }
    catch ( err )
    {
        console.error( 'invalid eval : ', err );
        console.log( typeof err );
        console.log( err );
        console.log( JSON.stringify( err ) );
        return [ ...vals, 'ERROR-FLAG-RED' + stringifyError( err ) ];
    } finally
    {

        console.log = cLog;
    }
    return vals;
}
export default evalContext;