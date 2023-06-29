import React, { createContext, useState } from 'react';


// A context is an ensemble of values and functions that will be available all throughout the tree below it. It can have it's drawbacks in performance, but it makes it really easy to access values
// if you need them repeatedly.

// Let's first define what our context should look like. We could let TS assume it from the createContext input or skip this entirely if out of typescript, but this'll make it easier to have a
// reference for what to expect, and is in general a good practice when manipulating data.


// Let's make the example simple. We'll just have a boolean value controlling a menu, and a function changing that boolean value.
interface OpenContextType {
    isOpened: boolean; // Our boolean value that will change depending on whether the menu is open or not.
    openOrClose: () => void; // function with no arguments returning a void. This will be useful if a child element, even far removed, needs to interact with the state (for example, a button in a menu)
}

// We create a default value. This will help with two things :
// 1) get the RIGHT instance of context, since you could have multiple layers (one for auth, one for a menu, one for style preference... Whatever your heart desires; you need to grab the proper dataset.)
// 2) In the event where you would try to "summon" a context in a part of a tree that ISN'T nested somewhere instead of that specific context, you still get these default values. This allows some flexibility,
// and makes it so a small mistake doesn't lead to the entire website going down due to undefined errors.

const defaultContextValues: OpenContextType = { isOpened: false, openOrClose: () => { } };

// We feed that value to our context. Congratulations ! You can now use this context with a useContext hook in any of the children of it's provider, aka, here, LinksOpenedContext.Provider.
export const LinksOpenedContext = createContext( defaultContextValues );


const OpenContextWrapper = ( { children }: React.PropsWithChildren ) => {

    // Now, we inject the real data into our context. Here, it'll be a state, along with a state function.
    const [ isOpened, setIsOpened ] = useState( false );
    const openOrClose = () => {
        setIsOpened( currentOpenStatus => !currentOpenStatus );
    };
    // After giving our value to our provider, we also give him the children elements that will able to use this context. Now, we can use this as a wrapper !
    return <>
        <LinksOpenedContext.Provider value={ { isOpened, openOrClose } }>
            { children }
        </LinksOpenedContext.Provider>
    </>;


};
export default OpenContextWrapper;