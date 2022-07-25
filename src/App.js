import React, { useEffect, useState } from 'react';
import FormValidationPage from './pages/form-validation';
import UseEffectPage from './pages/hooks/use-effect/use-effect';
import DataFetchingPage from './pages/hooks/use-effect/data-fetching';
import UseStatePage from './pages/hooks/use-state';
import ComponentA from './pages/hooks/use-context/ComponentA';
import UseReducerPage from './pages/hooks/use-reducer';
import UseCallBackParentComponent from './pages/hooks/use-callback/parent-component';
import UseMemoPage from './pages/hooks/use-memo';
import UseRefPage from './pages/hooks/use-ref';
import UseCounter from './pages/hooks/use-custom';
import CounterPage from './pages/hooks/use-custom/counter';
import SecondForm from './pages/testing-library/second-Form/comment-form';

// ContextApi
export const UserContext = React.createContext();
export const AgeContext = React.createContext();

function App() {
  return (
    // <FormValidationPage />

    /*--------------------------------- UseState --------------------------------- */
    // <UseStatePage />

    /*--------------------------------- side effects --------------------------------- */
    /*- api calls
    if no []     => every time any event happens use effect runs.
    if empty []  => only on page load runs.
    if [count]   => on renders when count changes.
    return()     => clean up code runs when second component is called. */
    // <UseEffectPage />
    // <DataFetchingPage />

    /* ---------------------------------  Context Api --------------------------------- */
    /* <UserContext.Provider value={'ankit'}>
       <AgeContext.Provider value={26}>
         <ComponentA />
       </AgeContext.Provider>
     </UserContext.Provider> */

    /* --------------------------------- UseReducer --------------------------------- */
    // <UseReducerPage />

    /* --------------------------------- useCallback --------------------------------- */
    /*jab dusra function as a props kisi dusre component me jata ho tab wo bhi apne component ke sath execute hota h tab useclaaback use karna chahiye.
    React.memo(Pure Function - shouldComponentUpdate) => jab parentrender hota h tab sab child bhi sath me execute hota, React.memo use karne pe actual me h component props chack karke hi render hota h. */
    // <UseCallBackParentComponent />

    /* --------------------------------- useMemo --------------------------------- */
    /* jab ek function 1st button click pe bahot time le raha tab toh thik h, lekin agar dusra button bhi time lene lage tab oose function ko useMemo me daal dete h. */
    // <UseMemoPage />

    /* --------------------------------- UseRef --------------------------------- */
    // <UseRefPage/>

    /* --------------------------------- Custom Hooks --------------------------------- */
    // <CounterPage />

    /* --------------------------------- HOC ---------------------------------  */
    /* UpdatedComponent ko as param OriginalComponent pass karte h aur Original component me props name="vishwas" pass karte h, and    
       return NewComponent hota h jo class ka naam h, UpdatedComponent ko export karte h
       ab children a dusre component me jo data share karna tha tha oose use kar sakte h using props.name but oose Component ko // 
       UpdatedComponent(CounterComponent) ke andar daalna hi raha h */

    /*--------------------------------- Render Props --------------------------------- 
    <User render={(islog) => islog ? 'ankit' : 'guest'} 
    {props.render(true)}
     */

    // --------------------------------- Test --------------------------------- 
    <SecondForm />
  );
}

export default App;
