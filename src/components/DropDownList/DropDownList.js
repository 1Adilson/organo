import "./DropDownList.css";

const DropDownList = (props) => {
  const handleValue = (event) => {
    props.changed(event.target.value);
  };
  return (
    <div className="dropDownList">
      <label>{props.label}</label>
      <select onChange={handleValue} value={props.formValue}>
        <option value=""></option>
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDownList;
