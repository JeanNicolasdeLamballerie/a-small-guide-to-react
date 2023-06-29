import React, { useContext } from 'react';
import { LinksOpenedContext } from '../components/ContextWrapper';
import Button from '@mui/material/Button';


const stringInjected = `<Parent> <Child>(... possible other <Child/> elements...) <Child/> </Parent>`;
const stringInjectedWithData = `<Parent data={data} >
<Child (gets data from Parent)>(... possible other <Child/> elements...) <Child/> </Parent>`;
const style = { backgroundColor: 'black', borderRadius: '100px', padding: '5px', fontSize: 'calc(10px + 1.3vmin)' };
const AboutContext = () => {
    const isMenuOpenedContext = useContext( LinksOpenedContext );

    return (

        <>
            <p className='subtitle'>So.. What's a context ?</p>
            <br />
            <p>A context is a slightly more complex version of a state. </p>
            <p> To properly understand, we need to come back to the structure of a React application. As a general concept, a parent component will contain one or multiple other, smaller components.
                It might switch them around, control them, display them or not, but at the end of the day, it's a trickling down process. The simplest app would look like this :</p>
            <code style={ style }>{ stringInjected }</code>
            <br />
            <p>Basically, Parent components contain their children. Because of that, we can trickle down data : </p>
            <code style={ style }>{ stringInjectedWithData }</code>
            <p>While this is a very useful approach that is a core part of React, what happens if we have, for example, a state (or even just data) all the way inside the first, original Parent, but we need it in a component that is nested
                maybe 30 components down ? </p>
            <p>We could trickle down the necessary data (or ALL the data in case we ever need it... Which is a very bad idea performance-wise) all the way to our component. But then, we'd pollute every single intermediary component that
                does not need this data (nor a way to alter this data). </p>
            <p>Another way to do so would be to use a specific library (see <a rel="noreferrer" href='https://redux.js.org/' target='_blank'>Redux</a>) but this can add degrees of complexity that might be very irrelevant to an app.</p>
            <p className='subtitle'> So, how does React do it ?</p>
            <p> React introduced the concept of a React Context. It's a "wrapper" component; a component that will act as a parent, with or without a visual representation. This wrapper will give access to the properties
                & functions that you decided to include in your provider to every children, nested or not, that are contained inside of it. We will use a
                <a target='_blank' rel="noreferrer" href="https://react.dev/reference/react">hook</a> called   <a target='_blank' rel="noreferrer" href="https://react.dev/reference/react/useContext">useContext</a> to access these properties.
            </p>
            <p>For example, the "main menu" on the homepage has a context attached to it. That context is very simple : It defines whether the menu is open or not.</p>
            <p> This way, you can not only access data (The menu is currently { isMenuOpenedContext.isOpened ? 'open' : 'closed' }) but you can also alter it in real time.</p>
            <Button variant='contained' color="warning" onClick={ () => isMenuOpenedContext.openOrClose() } >Try Changing the context value !</Button>
            <p> You can navigate between the main menu and this page to see whether the menu is closed or open : You'll have changed it's status by clicking the button above.</p>
            <p> Check out the ContextWrapper.tsx file to see more info on how to setup a context.</p>
        </>
    );
};
export default AboutContext;