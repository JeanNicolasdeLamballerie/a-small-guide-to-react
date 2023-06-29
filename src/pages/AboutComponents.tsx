import React, { PropsWithChildren } from 'react';
import ImportedComponent from '../components/ImportedComponent';

const AboutComponent = () => {
    return (
        // Below is a React Fragment; the little '<> </>'
        // All React components must be contained within one parent component.
        // This could be a 'div' element or any other html element; but
        // if we don't want to bloat all our components with div and styling
        // that doesn't need to exist, we can just use the React Fragment instead.
        // For react, it hold the same role of containing our component and having the
        // logical elements of react; but it won't render any html element.
        <>
            <p className={ 'subtitle' }>So, what are components ? </p>
            {/* Our base component is a wrapper; it displays children while wrapping them in some style.      */ }
            <BaseComponent>
                {/* And our "NestedComponent" is a <p></p> element that displays a message; including a default one 
                there is no message ! */}
                <NestedComponent></NestedComponent>
                {/* We can write components like this : <NestedComponent></NestedComponent> or this <NestedComponent/>.
                The only difference is that if you need to provide children, it's easier to do so within the HTLM structure,
                And if you don't need to, writing it in one single piece is a little cleaner. */}
                <NestedComponent message="Components are created in tsx/jsx files ; they're React functions that have different roles." />
                <NestedComponent message="In this file, BaseComponent is a wrapper that displays children. It wraps them in a div with a visible border." />
                <NestedComponent message="And our nested component displays simple messages. But this function (AboutComponent) is also a component !" />
            </BaseComponent>
            {/* We can also import and export components. They behave the same, and therefore become highly reusable ! */ }
            <ImportedComponent name={ 'NAME' } />
            <ImportedComponent name={ 'N' } someProperty='This is an optional property !' />

        </>
    );
};
// Dividing your components means that yes, they become reusable; but if you don't need to have that layer of complexity,
// You avoid possibly complicating your code with unnecessary nesting. 
const BaseComponent = ( { children }: PropsWithChildren ) => {
    return ( <div style={ { border: '1px solid red', borderRadius: '30px' } }>
        { children }
    </div> );
};
const NestedComponent = ( { message = '' }: { message?: string; } ) => {
    return (
        <p>
            { message ? message : 'There is no message !' }
        </p>
    );
};
export default AboutComponent;