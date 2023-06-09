import "./Form.css";
const Form = (props) => {
  return (
    <div className="text-form">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default Form;
