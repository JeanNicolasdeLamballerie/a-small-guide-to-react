import React from 'react';
import StatefulComponent from "../components/StatefulComponent";
import ButtonWithBatteries from '../components/ButtonWithBatteries';


const AboutState = () => {
    // There is a basic context behind React's construction of components : Mounting into the DOM (basically, mounting into the HTML). We often talk about the "lifecycle" of a component.
    // A  React component goes through multiple stages : 

    // unmounted => mounted => dismounting => dismounted (= unmounted)

    // First, it is unmounted (the code exists, but the component doesn't. It's not rendered, not used, it's completely unavailable).
    // Then, it "will" mount. The old class system had a specific method for it that fired when it happened, called, unsurprisingly, "componentWillMount". 
    // It is now generally deprecated, as we can (should) have effects happening when the component has mounted, rather than before it does (to avoid memory leak issues and stuff). You can 
    // recreate it with a custom hook, but at your own risks.

    // The next step would be the very beginning of the code mounting : ComponentDidMount in the old methods. This will fire ONCE, as soon as the component start existing.

    // Nowadays, we would use a "useEffect" function to do this. 
    // useEffect is composed of two parts : 

    // First, a callback (a function that looks like this: () => {dosomething} )
    // and second, a dependency array. We'll come back to this in a little bit, for now, we can keep it empty so this callback is equivalent to componentDidMount.

    // When you use useEffect, it will always at least fire once on mounting : 
    // useEffect(
    //     () => {
    //         console.log("Hello, this will happen whenever the component mounts ! ")
    //     }, []
    // )


    // Once it's inside the lifecycle, a component can be infinitely re-rendered. This is different from mounting, because a re-rendering component will keep it's state and status.
    // The main way to make a component re-render is to change one of it's states. See the "StatefulComponent" below for more info on how states work.

    // A state update will also fire any useEffect that contains said state into the dependency array we mentioned earlier.
    // 


    // const [someState, setSomeState] = useState(initialValue);
    // useEffect(
    //     () => {
    //         console.log("Hello, this will happen whenever the component mounts, and whenever someState is updated ! ")
    //     }, [someState]
    // )

    // There is a final step ; let's imagine we created something like a socket or made a request that never finished or something of the kind, that might have side effect, during our lifecycle. If 
    // our component doesn't exist anymore, we don't want these functions running in the background when they're not attached to a "living" component anymore - recreating the component would re-create these functions
    // and run them again... Which could lead to a memory leak if done enough times !

    // That's where the "componentWillUnmount" part of the lifecycle comes into play.
    // What we need is a function that is fired when the component is going to take it's final bow before unmounting. That way, it can clean after itself and avoid these pesky memory leaks (or unused API calls) ! 
    // We can also do this thanks to useEffect. What the callback returns should be what we call a clean-up function (for reasons that should be relatively obvious after this explanation).
    // Here's how it would look like : 

    // const [someState, setSomeState] = useState(initialValue);
    // useEffect(
    //     () => {
    //         console.log("Hello, we're starting a process (like getting some data) whenever this component mount ! Don't forget to clean it up in case we leave the component before it's fetched ! ")
    //         const value = StartMyProcess() // This takes some time (could be an asynchronous function)
    //         setSomeState(value);
    //         return () => {
    //         abortMyProcess();
    // }
    //     }, []
    // )

    // This abortMyProcess function could be cancelling a request to the server, or stopping a listener, or stopping a socket, that kind of thing. That way, we're sure that our component is cleanly unmounted and
    // doesn't leave any trace behind.

    // At this point, the component is fully unmounted and in the same state it was before mounting at all. We finished the lifecycle ! (And can start it again.)

    // See the two components below for more info !



    return (

        <>
            <p className='subtitle'> This is a small example of how states can work : </p>
            <p>We will use a
                <a target='_blank' rel="noreferrer" href="https://react.dev/reference/react">hook</a> called   <a target='_blank' rel="noreferrer" href="https://react.dev/reference/react/useState">useState</a> to access these properties.</p>
            <StatefulComponent />  {/* this component is technically on batteries too ! */ }
            <ButtonWithBatteries additionalText='Try passing a property showInitially={true} to the ButtonWithBatteries, and/or removing/changing the "additionalText" property !' />

        </>
    );
};
export default AboutState;