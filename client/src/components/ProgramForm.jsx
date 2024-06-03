import { Form } from "react-router-dom";

function ProgramForm() {
  return (
    <Form method="post">
      <label htmlFor="name">Nouveau Programme</label>{" "}
      <input type="text" id="titre" name="titre" placeholder="Titre" />
      <input type="text" id="synopsis" name="synopsis" placeholder="synopsis" />
      <input type="text" id="poster" name="poster" placeholder="poster" />
      <input type="text" id="country" name="country" placeholder="country" />
      <input type="number" id="year" name="year" placeholder="year" />
      <button type="submit">Ajouter</button>
    </Form>
  );
}

export default ProgramForm;
