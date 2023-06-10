import { useState } from "react";
import Button from "../Button/Button";
import DropDownList from "../DropDownList/DropDownList";
import Form from "../Form/Form";
import "./FormContainer.css";

const FormContainer = (props) => {
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const saveForm = (event) => {
    event.preventDefault();
    props.addUser({
      name: name,
      office: office,
      image: image,
      team: team,
    });
    setName("");
    setOffice("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="formContainer">
      <form onSubmit={saveForm}>
        <h2>Preencha os dados para criar o card do colabarador </h2>
        <Form
          validate={true}
          label="Nome"
          placeholder="Informa seu nome"
          formValue={name}
          changed={(name) => setName(name)}
        />

        <Form
          validate={true}
          label="Cargo"
          placeholder="Informe seu cargo"
          formValue={office}
          changed={(office) => setOffice(office)}
        />
        <Form
          validate={true}
          label="Imagem"
          placeholder="Informe seu endereço de imagem"
          formValue={image}
          changed={(image) => setImage(image)}
        />
        <DropDownList
          validate={true}
          label="Time"
          items={props.teams}
          formValue={team}
          changed={(team) => setTeam(team)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default FormContainer;
