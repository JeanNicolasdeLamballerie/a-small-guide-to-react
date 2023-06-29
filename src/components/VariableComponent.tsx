import React from 'react';
import { useLoaderData, useParams } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";

// There are multiple ways to pass data through a React app. One of them is through the routing itself.

// Here, I'll demonstrate two ways to get data : Through a loader, and through the URL parameters.

// The loader is a function that will fire as the page and component load, that'll inject our data into the page.

// You can find it in the RouterWithReact.tsx, and it looks like this :
// const routeWithVariable: RouteObject = {
//     path: "variable/:someVariable",
//     element: <VariableComponent />,
//     loader: VariableComponentLoader      <== This is the loader you can see below.
// };
//


// I went and got the typing for the loader from the library. Some libraries can be finnicky with this, so in that case, casting
// may be the best method. But casting can lead to issues - or not properly using a lib because you forgot a property in the typing
// and now you don't know it's readily available on your object. Prefer using the library types instead.


// For some context, here's how LoaderFunctionArgs looks like :

// interface LoaderFunctionArgs {
//     request: Request;
//     params: Params;   <== This is what we want in this case.
//     context?: any;
// }

// Loaders can gain complexity, but we'll stay with a simple example here.


export async function loader ( { params }: LoaderFunctionArgs ) {
    // This can be asynchronous ! (like fetching data from a far, far away database)
    const ourVariable = // await <= if we used this keyword. 
        params.someVariable; // <= the name we gave to the old variable in the routing component (path:'variable/:someVariable')
    return { ourVariable };
}

// We need to hand-type the return of LoaderData, because asynchronicity and undefined states are confusing for Typescript.
// We can do so by simply casting the value (or other shenanigans that essentially will work the same but be more scalable and also
// incredibly more complex, so we'll leave them for another time)

type ourVariableType = string;
type ourLoaderDataType = {
    ourVariable: ourVariableType;
};

const VariableComponent = ( { someData }: { someData?: string | undefined; } ) => {

    const { ourVariable } = useLoaderData() as ourLoaderDataType;


    // also if we didnt need to modify or wait for the data (which is the case here) or for any other reason then
    // we can also use the beautiful hooks that react-router-dom has available to directly snatch the variable from the URL :
    const TheUrlParams = useParams();
    // We extract our value :
    const AlsoOurVariable = TheUrlParams.someVariable;
    // Notice that the type of AlsoOurVariable is possibly undefined. The params can't
    // know by advance that the url will be properly formatted. You should code for, or around these issues - They are not issues 
    // caused by Typescript, they're potential issues of JavaScript underlined by Typescript. Technically since we casted the other, we could cast 
    // this one also or set a default value.
    const ourDisplayedString = ` This is our variable extracted from the loader :  ${ ourVariable } | And this is also our variable, but directly pulled from the URL : ${ AlsoOurVariable }`;
    // In this case though, it wouldn't be an issue : it'd just display a string called undefined, because Javascript is reaaaaaally good at 
    // converting or coercing types internally. It would get the value undefined, consider that this undefined is being added to a string, and 
    // in return simply stringify the undefined value to the string "undefined". This also works for NaN, null, booleans, numbers... etc.
    // AFAIK, can even do stuff like converting a boolean (TRUE/FALSE) to a number, since technically TRUE = 1 and FALSE = 0.


    // You can do REALLY wonky stuff with it. Don't push it and try to keep JS clean when you can, and document properly when it's very convenient not to be clean. 
    // Like, you don't have to do this : https://www.youtube.com/watch?v=sRWE5tnaxlI&ab_channel=LowByteProductions
    // Spoiler, it's basically a compiler that gets functional javascript with a horrible mess of obfcuscation. 
    // The creator called it a JSFuck compiler and I'd agree.
    return (
        <div>
            <p className='subtitle'> Try changing the value in the url and loading the page !</p>
            <br />

            <p>
                These are our values :

            </p>
            <p>{ ourDisplayedString }</p>
            <br />
            <p className={ someData ? '' : 'subtitle' } >
                {/* We can also pass down data from the parent component. It'll be displayed below : */ }
                { someData ? `Here is data received from our parent component : ${ someData }` : 'Now, try injecting some data in the AboutRoutingWithAVariable.tsx file.' }
            </p>
        </div>
    );
};
export default VariableComponent;