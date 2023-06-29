import React, { useState } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';
import { Button } from '@mui/material';
import OpenContextWrapper from '../components/ContextWrapper';
import { LinkToMenu } from './Links';

const Root = () => {
    const [ hidden, setHidden ] = useState<boolean>( false );
    const onClick = () => setHidden( previousValue => !previousValue );
    const displayButton = useLocation().pathname !== "/";
    return (
        <div className="App">
            <div className="App-header">
                {/* A little bit of css magic to make a transition on this div. Grid display has much better support for animation than regular blocks/boxes. */ }
                {/* This is one of the strength of React : By being able to (almost) directly control HTML components from a JS script, we can use the concepts together */ }
                {/* To control the animation thanks to JS logic that directly reflects onto the styling. It doesn't change much functionally from using JS to isolate 
                an element and changing it's properties, but in terms of code readability, it is leaps and bounds ahead.*/ }

                {/* We could also store almost all of this in a css class, apply it in a div below, and only inject the proper values. React does it's magic with it's rerendering
                    and thanks to that the animation and the below button change on the same re-render : 
                    the "hidden" state allows a smooth, overarching state for the component so the changes happen simultaneously. 
                    */ }

                <div style={ { display: 'grid', gridTemplateRows: hidden ? '0fr' : '1fr', transition: 'grid-template-rows 500ms', transitionTimingFunction: 'ease-in' } }>
                    <div style={ { overflow: "hidden" } }>

                        <img src={ logo } className="App-logo" alt="logo" />
                        <div  >
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React !
                            </a>
                            <p>

                                This is the ROOT div in our router. It will contain all the other pages (that we want to) and displays them in a div below this button :
                            </p>
                        </div>
                    </div>
                </div>
                <Button variant={ "contained" } style={ { marginBottom: 10, } } color="secondary" onClick={ onClick } >{ hidden ? 'Show root div' : 'Hide root div' }</Button>

                <div style={ { padding: '1vw', border: "2px solid black", borderRadius: 20 } }  >
                    <OpenContextWrapper>
                        <Outlet />
                    </OpenContextWrapper>
                    {/* This is where our sub-routes will live ! They'll be rendered instead of the "Outlet" component, with all their styles included. */ }
                </div>
                { displayButton && <LinkToMenu /> }
            </div>
        </div>
    );
};

export default Root;