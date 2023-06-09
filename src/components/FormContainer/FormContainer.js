import Button from "../Button/Button";
import DropDownList from "../DropDownList/DropDownList";
import Form from "../Form/Form";
import "./FormContainer.css";

const FormContainer = () => {
  const times = [
    "Programação",
    "Front-end",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];
  return (
    <section className="formContainer">
      <form>
        <h2>Preencha os dados para criar o card do colabarador </h2>
        <Form label="Nome" placeholder="Informa seu nome" />
        <Form label="Cargo" placeholder="Informe seu cargo" />
        <Form label="Imagem" placeholder="Informe seu endereço de imagem" />
        <DropDownList label="Time" items={times} />
        <Button text="Criar Card" />
      </form>
    </section>
  );
};

export default FormContainer;
