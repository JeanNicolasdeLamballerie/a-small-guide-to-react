interface ObjectToStringify {
    [ k: string ]: any;
}

export function replaceErrors ( key: any, value: Error | unknown ) {
    if ( value instanceof Error )
    {

        var error: ObjectToStringify = {};

        Object.getOwnPropertyNames( value ).forEach( function ( propName: string ) {
            const name = propName as keyof Error; // dirty hack because Typescript hates undefined/changing properties and cannot accept that the Error has string properties.
            error[ propName ] = value[ name ];
        } );

        return error;
    }

    return value;
}
export default function stringifyError ( error: Error | unknown ) {
    return JSON.stringify( error, replaceErrors, 2 );
}