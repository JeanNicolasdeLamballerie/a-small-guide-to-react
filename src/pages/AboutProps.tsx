import React from 'react';

const AboutProps = ( props: any ) => {

    console.info( `About default Props: ${ props }` );

    return (
        <>
            <p className='subtitle'> Props are components' "properties"</p>
            <p>The p component above already has props; className is one of them.</p>
            <p>In a default html p component, we would have to name this property 'class' not 'className'.</p>
            <p>React uses some specific conventions : lower camelCase for properties, and Pascal or upper CamelCase for React Component functions.</p>
            <p>Following that, we have className on our p component, but our overarching component AboutProps is named in Pascal Case.</p>
            Props can be drilled all the way down throughout the component hierarchy. This can become problematic or useful depending on your
            your usecase.
            {/* Drilling all your props all the way down is most likely a very bad idea. Keep in mind that reusable components are good;
            But they might complicate your props usage (E.G having to pass props all the way down to a button, when you could have just
            built the button in the same component that had the relevant info.) */}
        </>
    );
};

export default AboutProps;