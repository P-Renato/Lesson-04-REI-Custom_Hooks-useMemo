import { useId } from "react";

const Input = ({ type, val, setter, text }) => {

    const id = useId();
  return (
    <div class="form-field">
      <label htmlFor={id}>{text}</label>
      <input id={id} type={type} value={val} onChange={setter} />
    </div>
  );
};

export default Input;
