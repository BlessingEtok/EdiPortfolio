import {useState} from 'react'

// function Counter (props){
//     return(
//         <div>
//             <p>0</p>
//             <button onClick={()=> simple()}>increase</button>
//         </div>
         
//     )
// }
// function simple(){
//     alert("my name is edi")
// }

function PromptComponent(props){
    const [initialPromptValue, setInitialPromptValue] = useState (0)

    function simple (){
        const givenValue = prompt ("How old are you?")
        setInitialPromptValue(givenValue)
    }

    return(
        <div>
            <p>{initialPromptValue}</p>
            <button onClick={()=> simple()}>Prompt</button>
        </div>
    )
}

function CounterComponent() {
        // Declare a new state variable, which we'll call "count"
        const [count, setCount] = useState(0);
      
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>
              Increase
            </button>
            <button onClick={() => setCount(count-1)}>
                Decrease
            </button>
          </div>
          
        );
}
        // function Example() {
        //     // Declare a new state variable, which we'll call "count"
        //     const [count, setCount] = useState(0);
          
        //     return (
        //       <div>

        //       </div>
        //     );
        //   }
export {PromptComponent, CounterComponent}; 