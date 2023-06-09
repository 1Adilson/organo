import "./Form.css";
const Form = (props) => {
  const handleValue = (event) => {
    props.changed(event.target.value);
  };

  return (
    <div className="text-form">
      <label>{props.label}</label>
      <input
        value={props.formValue}
        onChange={handleValue}
        required={props.validate}
        placeholder={props.placeholder + "..."}
      />
    </div>
  );
};

export default Form;
