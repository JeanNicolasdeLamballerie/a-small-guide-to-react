import React from 'react';
import { LinkToMenu } from '../router/Links';


export default function ExampleOutside () {


    return (
        <div className={ "App-header" }>
            <p>This element is outside of Root ! Every component that was inside our Router tree just got unmounted. So, all the data that was living in there is now gone (like our context or states). This is why we still use
                stuff like cookies, LocalStorage, local databases (through localstorage, but you can do some crazy stuff), or simply regularly store data on databases even though it might be incomplete. It all depends on your usecase !
            </p>
            <p> We have access to the styling ("App-header" class) because the Root.tsx element does, and because Root.tsx is imported into the file these files (ExampleOutside.tsx & AboutOutsideRouter.tsx) are imported into aka our Router (yes, it sounds complicated, but it isn't really. When compiling, everything in JS basically turns into one giant file, so we have access to static imports like CSS when all the files that have common imports merge). If you were to use modular css (see <a href={ 'https://css-tricks.com/css-modules-part-1-need/' } target='_blank' rel="noreferrer"> this post</a>), this wouldn't be possible. Also, if you were to comment out the Root element in the router, this page would have no styling. You don't have to do it, you can trust me. But go ahead if you like to live dangerously.</p>
            <LinkToMenu />
        </div>
    );
}