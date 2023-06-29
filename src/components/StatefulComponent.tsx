import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useEffect, useState, useRef } from "react";
const INITIAL_VALUE = 0;

export default function StatefulComponent () {
    // These values are states.
    // States being updated mean that the component needs to be updated.

    // Keep in mind : React controls the DOM, or simply put, the structure of HTML components and their properties.
    // If you need to update, say, a division that contains a string, you need to re-create this HTML component entirely.
    // When a state is updated through it's setter function, React handles the logic to determine what needs to be re-created/re-rendered 
    // and keeps the relevant values in memory. This can be optimized in some ways (this component could have a child component that handles the 
    // timestamp locally for example; also the memo() function or the useMemo() hook could be useful. 
    // They are used to memoize components, but this is a more advanced concept, so let's keep it simple for now.)
    const [ someState, setSomeState ] = useState<number>( INITIAL_VALUE );
    const [ timestamp, setTimestamp ] = useState<number>( 0 );
    useEffect( () => {
        console.debug( 'This runs once on mount, then everytime someState is updated ! (you can see it twice because react runs these functions twice to make sure your code is not having side effects. It does not happen when the project is built and deployed) ' );
        // This is an "effect". It is deeply linked with the lifecycle of the component.
        // It is a callback function that will always run at least once when the component is created and mounted
        // (basically, when the component starts existing)
        // But it will also run whenever whatever is in the dependency array (here, "someState") is updated.

        // As an example; we start an interval that will count the seconds elapsed since the last modification to "someState"; 
        setTimestamp( 0 );
        const time = setInterval( () => setTimestamp( timeElapsed => timeElapsed + 1 ), 1000 );
        return () => {

            // This is a cleanup function. It is made to avoid side effects; let's imagine for a second that this component were to either
            // fail critically or be unmounted. The interval function is a side effect; it is not DEPENDENT on the component existing to be in memory.
            // So, it'll continue living until it's properly cleaned away. If your code does not account for this, some functions or 
            // asynchronous operations (like requesting something from a server) can keep running when they should have canceled.
            // In the best case, it can creates funky situations or maybe lead to some issues with the order for requests  : e.g, a request is made to
            // a server we KNOW needs authentication, is not cancelled when we already redirected the user to login when he tried to do that.

            // for the sake of the example, we could imagine that our requesting service has a built in redirect that'd send you to the login page
            // if you try to access protected content while not logged in. But we already redirected the user ! So while it's connecting,
            // it'll get re-routed to the same login page again (which could clear out the fields they already filled).

            // In the worst case, it could lead to memory leaks that will kill performance over time. TLDR : Clean up your effect functions !
            clearInterval( time );
        };
    }, [ someState ] );
    const updateState = ( value: number = +1 ) => {
        setSomeState( oldStateValue => oldStateValue + value );
    };
    const onClickAdd = ( event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        //do something with the event if needed
        // console.log(event.timeStamp)
        // console.debug(event.clientX, event.clientY)
        updateState();
    };
    const onClickRemove = ( event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        //do something with the event if needed
        // console.log(event.timeStamp)
        // console.debug(event.clientX, event.clientY)
        updateState( -1 );
    };
    const onClickSetValue = ( event: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: number ) => {
        //do something with the event if needed
        // console.log(event.timeStamp)
        // console.debug(event.clientX, event.clientY)
        updateState( value );
    };
    const onChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        // Update our reference
        inputValue.current = e.target.valueAsNumber;
    };
    // We use a ref(erence) to store our input object. Refs are mutable and stay alive as long as the component does, but they don't update
    // visually the same way states do. They're perfect for "hidden" persistent values, like this one that we get from the input.
    // We could also "control" the input by setting it's value property as a state, and updating that state every time the onClick function 
    // is called. But again, here, it's unnecessary. And it allows to show off Refs !
    let inputValue = useRef<number | null>( null );
    //! When building components, we return what's expected to render (the component that contain states will be updated when relevant) : 
    return (
        <div>
            <p>current state : { someState }. It was last modified { timestamp } seconds ago.</p>
            <Button onClick={ onClickAdd } variant="contained" color={ "primary" } style={ { margin: '10px' } }>
                ADD
            </Button>
            <Button style={ { margin: '10px' } } onClick={ onClickRemove } variant="contained" color={ "secondary" }>
                REMOVE
            </Button>
            <div>
                <TextField color="success" type="number" variant={ 'outlined' } label={ 'Enter a custom value' } onChange={ onChange } sx={ { input: { color: 'white' }, label: { color: '#2e7d32' } } } />
                <Button style={ { margin: '10px' } } variant="contained" color={ "success" } onClick={ ( e ) => {
                    if ( inputValue.current !== null && inputValue.current !== undefined )
                    {

                        onClickSetValue( e, inputValue.current );

                    }
                }
                }>
                    add or remove custom value
                </Button>

            </div>
        </div>
    );
}