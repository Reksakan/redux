import { useRef } from "react";

const AddTodo =({onAddClick}) => {
  const inputRef = useRef();
  return (
    <div>
      <input ref={inputRef}/>
      <button onClick={
        () => { 
          onAddClick(inputRef.current.value);
          inputRef.current.value=''
        }
      }>ADD TODO</button>
    </div>
  )
}

export default AddTodo;