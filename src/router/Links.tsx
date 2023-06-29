import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import "./Links.css";
import { LinksOpenedContext } from '../components/ContextWrapper';
const buttonStyleForList = { margin: "15px", width: "20dvw", };
export const LinkToOutsider = () => {

    return <Button variant={ "contained" } style={ buttonStyleForList } component={ Link } to={ '/outsider' }>A component outside</Button>;
};
export const LinkToInside = () => {

    return <Button variant={ "contained" } style={ buttonStyleForList } component={ Link } to={ '/insider' }>A component inside</Button>;
};

export const LinkToVariable = ( { variable = 'someVariable' } ) => {

    return <Button variant={ "contained" } style={ buttonStyleForList } component={ Link } to={ '/variable/' + variable }>To the variable</Button>;
};
export const LinkToAboutState = () => {

    return <Button variant={ "contained" } style={ buttonStyleForList } component={ Link } to={ '/aboutstate' }>Learn about states</Button>;
};
export const LinkToAboutContext = () => {

    return <Button variant={ "contained" } style={ buttonStyleForList } component={ Link } to={ '/aboutcontext' }>Learn about contexts</Button>;
};
export const LinkToComponents = () => {

    return <Button variant={ "contained" } style={ buttonStyleForList } component={ Link } to={ '/aboutcomponents' }>Learn about components</Button>;
};
export const LinkToAboutProps = () => {

    return <Button variant={ "contained" } style={ buttonStyleForList } component={ Link } to={ '/aboutprops' }>Learn about props</Button>;
};

export const LinkToMenu = () => {

    return <Button variant={ "contained" } color="success" style={ { margin: "15px" } } component={ Link } to={ '/' }>Go back to the main menu</Button>;
};
export const LinkToBeyond = () => {

    return <Button variant={ "contained" } style={ buttonStyleForList } component={ Link } to={ '/goingfurther' }>Going further</Button>;
};
export const LinkToCheatsheet = () => {

    return <Button variant={ "contained" } color="success" style={ { margin: "15px", width: "80%" } } target='_blank' component={ Link } to={ '/cheatsheet' }>Javascript Cheatsheet</Button>;
};
const Links = () => {
    const openContext = useContext( LinksOpenedContext );
    const onClick = () => openContext.openOrClose();
    return (
        // We can put our css as classes as seen below, or inject it in our React style props. This way we can use general CSS classes, but do some individual tinkering with the 
        // individual components and how exactly they should fit.
        <>
            <div className={ "grid-container grid-container-2" } style={ { minWidth: '50dvw', justifyContent: 'center' } } >

                <p className='grid-2-item-fullwidth' style={ { margin: 0 } }><LinkToCheatsheet /></p>
                <p className={ "grid-2-item-fullwidth subtitle" }>Learn about React core concepts</p>
                <LinkToComponents />
                <LinkToAboutProps />


            </div>

            {/* This div is controlled by a context of the type "LinksOpenedContext". 
            We can think of a context as an overarching state that's always accessible within the component that provided the context (the LinksOpenedContext.Provider). Thanks to this, this component will "remember" 
            what our context state is as long as the component that provided it doesn't unmount.  */}
            <div className="grid-animated" style={ { gridTemplateRows: openContext.isOpened ? '1fr' : '0fr', justifyContent: 'center' } }>
                <div
                    className='grid-container grid-container-2'
                    style={ { overflow: 'hidden' } }
                >
                    <p className={ "grid-2-item-fullwidth subtitle" } style={ { overflow: 'visible' } }>Understanding React's state</p>

                    <LinkToAboutState />
                    <LinkToAboutContext />

                    <p className={ "grid-2-item-fullwidth subtitle" } style={ { overflow: 'visible' } }>React Routing 1 : Nesting children</p>
                    <LinkToInside />
                    <LinkToOutsider />

                    <p className={ "grid-2-item-fullwidth subtitle" } style={ { overflow: 'visible' } } >React Routing 2 : Passing informations</p>

                    <LinkToVariable />
                    <LinkToBeyond />
                </div>
            </div >

            <Button variant='contained' color={ openContext.isOpened ? 'error' : 'warning' } className='grid-2-item-fullwidth' style={ { width: "50%", justifySelf: 'center' } } onClick={ onClick }> { `see ${ openContext.isOpened ? 'Less' : 'More' }` } </Button>

        </>
    );
};
export default Links;