import React from 'react';
import Editor from "@monaco-editor/react";
import Button from '@mui/material/Button';
import evalContext from '../utils/evalContext';

interface ObjectToStringify {
    [ k: string ]: any;
}

const firstValue =
    `   const Constant = "value, object, string, function, you name it ! But it won't change.";
    console.log( Constant );
    var GlobalVariable;
    console.log( GlobalVariable, 'our variable does not hold a value yet, so it is undefined.' );
    GlobalVariable = {};
    console.log( GlobalVariable, 'It has now been changed to an empty object.' );
    GlobalVariable.info = Constant;
    console.log( GlobalVariable, 'And now,it has a property attached to it.' );
    let Mutable = 'But the let & var keywords allow mutable variables.';
    console.log(Mutable, 'Mutable is currently a string.');
    Mutable = ['i','am','an','array'];
    console.log(Mutable, 'Mutable is currently an array.')
    `;

const secondValue =
    ` //writing a function : 

    function iAmAFunction ( withParams = 10 ) { // returns number²
        console.log( withParams );
        return ( withParams * withParams );

    }
    const iAmToo = ( withParams = 10 ) => {// returns number *2
        console.log( withParams );
        return ( withParams + withParams );
    };
    const andSoAmI = ( withParams = 10 ) => withParams * 42; // returns number *42 

    iAmAFunction(); //default value (10)
    iAmToo( 32 );
    const someNumber = Math.round( Math.random() * ( Math.random() * 100 + 1 ) );
    const randomizedResult = andSoAmI( someNumber );
    console.log( \`\${ someNumber } times 42 => \${ randomizedResult }\` );


    const makeALoop = ( l = 10 ) => {

        for ( let i = 0; i < l; i++ )
        {
            // We can inject values into \`\` strings with this syntax:
            console.log( \`Within the loop, the value i exists and can change; i = \${ i }\` );
        }

        //About shorthands; this entire if/else :
        if ( l > 10 )
        {
            return \`Long loop ! l = \${ l }\`;
        }
        else
        {
            return \`Short loop ! Those are rookie numbers; l = \${ l }\`;
        }
        //is equivalent to this: 
        return ( l > 10 ) ? \`Long loop ! l = \${ l }\` : \`Short loop ! Those are rookie numbers; l = \${ l }\`;
        //For simplicity, when if/else statements don't feel necessary, the  CONDITION ? condition_met : CONDITION2 ? (...) : ELSE_STATEMENT
        // syntax is very handy.

        // you can comment out the if else and test the function. It'll work the same !

    };
    makeALoop();
    console.log( makeALoop() );
    console.log( makeALoop( 20 ) );



`;

const thirdValue = `
    const myObject = { userName: 'Shrek', location: 'Swamps' };
    // I could extract my object properties like this :
    const myUserNameProperty = myObject.userName, myLocationProperty = myObject.location;
    // But we have a simpler way to extract those in JavaScript : 
    const { userName, location } = myObject;
    // the names of the constants must fit the actual object properties.
    console.log( myObject, myUserNameProperty, myLocationProperty, userName, location );


    // This is particularly useful in functions, particularly when you only need specific properties : 

    // myFunction = ({property1,property2}) =>{
    // do stuff with property1 and 2...
    //} 

    // call the function :

    // myFunction({property1,property2});

    //or

    // const someObject = {property1:10, property2:20}
    // myFunction(someObject)

    //Another property from JS is destructuring : 
    // I did say that constants can't be modified; it's not completely true, they can't be 
    // mutated. But a constant object can have properties added to it; it just can't be turned into a string or array.

    // These two objects are a reference to the same object in memory.
    const sameObject = myObject;
    // When we change sameObject,myObject changes too.
    sameObject.destructuring = false;
    console.log( sameObject );
    const newObject = { ...myObject };

    newObject.destructuring = true;

    // But if we destructure an object, keep in mind the copy is shallow. E.G, if a property is an object,
    // That object wasn't destructured: so if it changes, the original property will change too.
    // like this :

    const nestedObject = { propertyOfNestedObject: true };
    const wrappingObject = { nestObjectProperty: nestedObject, normalProperty: true };
    const destructuredWrappingObject = { ...wrappingObject };
    destructuredWrappingObject.normalProperty = false;
    console.log( destructuredWrappingObject );
    console.log( wrappingObject ); // normalProperty = true. it hasn't changed.
    destructuredWrappingObject.nestObjectProperty.propertyOfNestedObject = false;
    console.log( nestedObject );
    console.log( wrappingObject ); // Both of these were modified, because destructuring passed a reference,
    // not the actual object.

    structuredClone( wrappingObject );
    // We can used structuredClone to do real clones.
    // Here's a little extract of how it works :

    // Create an object with a value and a circular reference to itself.
    const original = { name: "MDN" };
    original.itself = original;

    // Clone it
    const clone = structuredClone( original );

    console.assert( clone !== original ); // the objects are not the same (not same identity)
    console.assert( clone.name === "MDN" ); // they do have the same values
    console.assert( clone.itself === clone ); // and the circular reference is preserved

    // see https://developer.mozilla.org/en-US/docs/Web/API/structuredClone

`;

type indicator = '1' | '2' | '3' | '4';

const fourthValue = `
// About type coercion, and using logical operators in JS/React
//To begin with, keep in mind that == is a lot less reliable than ===. Always use === for comparing, unless you specifically need the syntax.
const a= [];
const b = "";
console.log( a == b ); //true
console.log( a === b ); //false
// you also have access to the && operator (do not confuse it with &, which is a bit operator) for AND statements:
if ( true && true )
{
    console.log( 'AND operator true & true' );

}
if ( false && true )
{
    //doesn't execute
}
if ( true && false )
{
    //doesn't execute
}

//We can do the same with the OR operator, ||.

// But they can be used beyond that scope of booleans thanks to the truthy and falsy concepts.
// A falsy value is any of these : 
const falsyValues = [ "", 0, null, undefined, NaN ];
// Any other value would be truthy.
const truthyExamples = [ {}, [], 42, "0", "false", new Date(), -42, 3.14, Infinity, -Infinity, ];
// let's iterate over our arrays and test the values with a function :

const truthyFalsyTester = ( array ) => {
    //we take an array, and for each value test whether they're true or false.
    array.forEach( ( value, index ) => {
        if ( value )
        {
            console.log( \`The value at index \${ index } is equivalent to a 'true' statement.\`, value );
        }
        else if ( !value )
        {
            console.log( \`The value at index \${ index } is equivalent to a 'false' statement.\`, value );

        }
    } );

};
truthyFalsyTester( falsyValues );
truthyFalsyTester( truthyExamples );



// This can be both useful and a trap. See :

const userProfile = { name: 'Solo', firstName: 'Han' };
const returnCustomMessage = ( profile ) => {
    return profile ? \`Welcome back to our website, \${ profile.firstName } \${ profile.name } !\` : 'Welcome stranger, login below !';
};
console.log( userProfile, returnCustomMessage( userProfile ) );
console.log( undefined, returnCustomMessage() );
// But this can also turn into an issue if you forget how these values work.
// E.G, the most classic example, the oversight of 0 : 
const someUserID = 1;
const anotherUserID = 0;
const noUser = undefined;


const doingSomethingImportant = ( profileID ) => {
    //do some stuff...
    if ( profileID )
    {
        // do something very important...
        console.log( \`Hello, user with ID \${ profileID }\` );
    }
    else
    {
        // User is not logged in... redirect them, do not allow the action to complete...
        console.log( 'Hello there, general not logged in.' );
    }
};
//TEST

doingSomethingImportant( someUserID ); // All good ! Our user is connected !
doingSomethingImportant( noUser ); // All good ! Our user is recognised as not connected. 
doingSomethingImportant( anotherUserID ); // Oh-oh... The falsy statement of 0 has given us an unwanted behavior.

// how do we fix this ?

// Two ways. One, be aware of how you use the values and coerce them if necessary.

const someUserID_corrected = someUserID.toString();

const anotherUserID_corrected = anotherUserID + ""; // this is equivalent.
// you could even write (...) = \`\${anotherUserID}\`

const noUser_corrected = noUser; // undefined. No need to change this

//TEST

doingSomethingImportant( someUserID_corrected ); // All good ! Our user is connected !
doingSomethingImportant( noUser_corrected ); // All good ! Our user is recognised as not connected. 
doingSomethingImportant( anotherUserID_corrected ); // Success! We fixed the bug !

// Or, depending on the usecase - we might not want to confusingly change the types, or may not know them in advance.
// So we can fix the testing inside the function instead:

const doingSomethingImportant_theBugWasBehindTheKeyboard = ( profileID) => {
    //do some stuff...
    const hasProfileID = ( profileID !== undefined ) && ( profileID !== null );
    if ( hasProfileID )
    {
        link();
        // do something very important...
        console.log( \`Hello, user with ID \${ profileID }\` );
    }
    else
    {
        // User is not logged in... redirect them, do not allow the action to complete...
        console.log( 'Hello there, general not logged in.' );
    }
};
// If you do this often, you might just want to just create an util function that returns that for any value.

doingSomethingImportant_theBugWasBehindTheKeyboard( someUserID ); // All good ! Our user is connected !
doingSomethingImportant_theBugWasBehindTheKeyboard( noUser ); // All good ! Our user is recognised as not connected. 
doingSomethingImportant_theBugWasBehindTheKeyboard( anotherUserID ); // Success! We fixed the bug !
//Inside React TSX components, you can do stuff like 
// <SomeComponent>
// {
// title && <p> {title} <p/>
// this will render only if title exists, otherwise there'll be nothing ! 
// And if title is a state, it'll appear when a title is added!
// </SomeComponent>
// }
`;
const CheatSheet = () => {
    const [ editorValue, setEditorValue ] = React.useState<string>( firstValue );
    const [ resultValue, setResultValue ] = React.useState<any[]>( [] );
    const [ current, setCurrent ] = React.useState<indicator>( '1' );
    // You could optimize this greatly by using a different approach to the handling of the strings.
    // You can try switching the data structure by using, for example, an array of strings for the values stored in the editor. 
    // That would allow their number to be dynamically changed - retrieved from a server for example.
    const SwitchEditorValue = ( str: indicator ) => {
        if ( current === str ) return;
        let v: string;
        switch ( str )
        {
            case "1":
                v = firstValue;
                break;
            case "2":
                v = secondValue;

                break;
            case "3":
                v = thirdValue;
                break;
            case "4":
                v = fourthValue;
                break;
            default:
                v = firstValue;
                break;
        }
        setResultValue( [] );
        setCurrent( str );
        setEditorValue( v );



    };
    const onClick = () => {
        const evalResults = evalContext( editorValue );

        evalResults && setResultValue( evalResults );

    };
    return (

        <div
        >
            <p>Note before you begin : </p>

            <p >If you a get a "ResizeObserver loop limit exceeded" error and your screen turns red, just ignore it (top right cross). </p>
            <p>React hates resizing elements in dev mode - because some info gets lost in a frame (if you resize fast) and that's apparently unacceptable.</p>

            <div style={ {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            } }>

                <div
                    className='editor-container'

                >

                    <Editor
                        line={ 0 }
                        className='editor'
                        theme='vs-dark'
                        defaultLanguage='javascript'
                        defaultValue={ firstValue }
                        value={ editorValue }
                        onChange={ ( value ) => setEditorValue( val => value || val ) }

                    ></Editor>
                    <Button variant="contained" color="success" onClick={ onClick }>Evaluate !</Button>
                    <div style={ {
                        display: resultValue.length > 0 ? 'block' : 'none',
                        maxHeight: '75vh',
                        padding: 10,
                        borderRadius: 30,
                        textAlign: 'left',
                        margin: 20,
                        fontSize: "calc(10px + 0.5vmin)",
                        backgroundColor: 'black',
                        overflow: 'auto'
                    } }>
                        { resultValue.map( ( element: string | Array<any> | ObjectToStringify, index ) => {
                            const style: React.CSSProperties = { whiteSpace: 'pre-wrap' };
                            if ( typeof element === "object" )
                            {
                                element = JSON.stringify( element );
                            }
                            if ( element && element.length > 14 && element.substring( 0, 14 ) === 'ERROR-FLAG-RED' )
                            {
                                // Very infefficient way of pulling the error message & displaying the error. There should only be one anyway so it doesn't matter because 
                                // it's basically instant. 
                                element = element.substring( 14, element.length );
                                const message = JSON.parse( element ).message;
                                console.log( element.includes( '\n' ) );
                                console.log( typeof element );
                                element = element.replaceAll( '\\n', '\n' );
                                element = `There is a 🐛 in your code ! \n An error has occured : ${ message }\n${ element }`;
                                style.color = 'red';
                            }
                            return <p style={ style } key={ index + typeof element }>{ '' + element }</p>;
                        } ) }
                    </div>
                    <br></br>
                    <div className="buttons-list-container">

                        <Button style={ { margin: 5 } } variant="contained" disabled={ current === '1' } color="success" onClick={ () => SwitchEditorValue( '1' ) }>Back to the basics</Button>
                        <Button style={ { margin: 5 } } variant="contained" disabled={ current === '2' } color="success" onClick={ () => SwitchEditorValue( '2' ) }>About functions</Button>
                        <Button style={ { margin: 5 } } variant="contained" disabled={ current === '3' } color="success" onClick={ () => SwitchEditorValue( '3' ) }>About destructuring</Button>
                        <Button style={ { margin: 5 } } variant="contained" disabled={ current === '4' } color="success" onClick={ () => SwitchEditorValue( '4' ) }>About operators</Button>

                    </div>
                    <div id='resize-indicator' >click here to resize ➡️ </div>
                </div>

            </div>

        </div>

    );


};
export default CheatSheet;
