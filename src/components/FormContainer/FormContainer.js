import Forms from "../Forms/Forms";
import "./FormContainer.css";

const FormContainer = () => {
  return (
    <section className="formContainer">
      <form>
        <h2>Preencha os dados para criar o card do colabarador </h2>
        <Forms label="Nome" placeholder="Informa seu nome" />
        <Forms label="Cargo" placeholder="Informe seu cargo" />
        <Forms label="Imagem" placeholder="Informe seu endereço de imagem" />
      </form>
    </section>
  );
};

export default FormContainer;
