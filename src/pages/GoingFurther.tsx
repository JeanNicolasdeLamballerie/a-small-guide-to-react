import { Button } from '@mui/material';
import React from 'react';

const GoingFurther = () => {


    return (
        <>
            <p className="subtitle"> Applying what you learned </p>

            <p> Here are some ideas you could apply to this project :</p>
            <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>

                <ul style={ { maxWidth: '65dvw' } }>
                    <li>Add a new component, create a new page, and add it into the Router, and make a button that links to that page.</li>
                    <li>Try to understand how the cheatsheet component works; and make it so when the code stored inside the editor is changed by you, it is stored instead of being discarded and replaced by the original value.</li>
                    <li>Try to make the "Hide" button on the Root component governed by a context rather than a simple state, so it stays closed (or open) when you navigate between the pages. </li>
                </ul>
            </div>
            <p> And try to have fun ! 🥰</p>
            <p> Thanks for <span style={ { textDecorationLine: 'line-through' } }>playing</span> using this project !</p>
            <p>Some resources to further your web dev learning :</p>
            <Button color='success' target='_blank' rel='noopener' href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/'>CSS flexbox</Button>
            |<Button color='success' target='_blank' rel='noopener' href='https://blog.logrocket.com/advanced-react-hooks-creating-custom-reusable-hooks/'>Learn more about hooks and how to use them</Button>
            |<Button color='success' target='_blank' rel='noopener' href='https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/'>Making requests to a server</Button>
            <p className='small-font' style={ { maxWidth: '65dvw' } }>NB: For API requests, you can use a library like Axios. For small projects, a fetch is usually enough; but for bigger projects, you might (for example) not want to identify your user in every single request, so instead you could make a customized Axios instance that always carries your user's info, throwing custom errors when a user needs to re-login, etc..</p>

        </>
    );



};

export default GoingFurther;