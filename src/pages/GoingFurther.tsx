import React from 'react';

const GoingFurther = () => {


    return (
        <>
            <p className="subtitle"> Applying what you learned </p>

            <p> Here are some ideas you could apply to this project :</p>
            <ul style={ { margin: '0px 20dvw' } }>
                <li>Add a new component, create a new page, and add it into the Router, and make a button that links to that page.</li>
                <li>Try to understand how the cheatsheet component works; and make it so when the code stored inside the editor is changed by you, it is stored instead of being discarded and replaced by the original value.</li>
                <li>Try to make the "Hide" button on the Root component governed by a context rather than a simple state, so it stays closed (or open) when you navigate between the pages. </li>
            </ul>
            <p> And try to have fun ! 🥰</p>
            <p> Thanks for <span style={ { textDecorationLine: 'line-through' } }>playing</span> using this project !</p>
        </>
    );



};

export default GoingFurther;