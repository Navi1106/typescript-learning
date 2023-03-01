import React, { useRef } from "react";

const Form = () => {
    const Number1 = useRef();
    const Number2 = useRef();
    const FormSubmithandler = (event) =>{
        event.PreventDefault();
        console.log(Number1.current.value);
    }

    return (
        <form onSubmit={FormSubmithandler}>
            <label>Number1</label>
            <input type="number" ref={Number1}/>
            <label>Number2</label>
            <input type="number" ref={Number2}/>
            <div>
                <button type="submit">Sum</button>
            </div>
        </form>)
}

export default Form;