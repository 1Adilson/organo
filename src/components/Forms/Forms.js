import "./Forms.css";
const Forms = (props) => {
  return (
    <div className="text-form">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default Forms;
