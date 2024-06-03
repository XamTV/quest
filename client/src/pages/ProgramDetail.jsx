import { Link, useLoaderData } from "react-router-dom";

import ProgramList from "../components/ProgramList";

function ProgramsDetails() {
  const program = useLoaderData();

  return (
    <>
      <h1>{program.title}</h1>
      <p>{program.synopsis} </p>
      <Link to={`/programs/${program.id}/edit`}>Modifier</Link>
      <ProgramList programs={program.programs} />
    </>
  );
}

export default ProgramsDetails;
