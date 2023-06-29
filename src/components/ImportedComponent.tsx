import React from 'react';

const ExportedComponent = ( { name, someProperty }: { name: string, someProperty?: string; } ) => {
    return (
        <div>
            <p>
                This component has been imported into the file. It could be a component you made, or one from a library.
            </p>
            <p>{ `Hello ${ name }!` }</p>
            {
                // We test if the property exist, and if it does display it.
                someProperty && <p>{ someProperty }</p>
            }
        </div>
    );
};
export default ExportedComponent;