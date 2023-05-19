import React, { useState } from "react";

type usedProps = { showInitially?: boolean, additionalText?: string; };
export default function ButtonWithBatteries ( { showInitially = false, additionalText = "" }: usedProps ) {
    const [ show, setShow ] = useState( showInitially );


    return ( <>
        <button onClick={ () => { setShow( val => !val ); } }>I am a button (and component) that comes with batteries ! { show ? "Hide the info" : "Show the info" }</button>
        { show && <div>
            <p>A component "with batteries" is a component that manages its own state. You can pass it initial values, or have functions that you can pass that will receive the state of this button, but if you let it be, it'll manage it's own lifecycle alone, without a need for you to inject your own state, or interact with/modify its state.
            </p>

            { additionalText && <p> This is the additional text attached: { additionalText }</p> }
        </div> }

    </> );

}