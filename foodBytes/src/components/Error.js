import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!🚨</h1>
      <h1>Something went Wrong</h1>
      <h2>{err.status + " " + err.statusText}</h2>
      {/* <h1>{useRouteError}</h1> */}
    </div>
  );
};
export default Error;
