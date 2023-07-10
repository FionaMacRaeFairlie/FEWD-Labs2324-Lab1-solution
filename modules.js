const CurrentModule = (props) => {
  return (
    <li>
      <p>Module title:{props.name}</p>
      <p>Module Leader: {props.moduleLeader} </p>
      <p>Number of credits: {props.credits}</p>
    </li>
  );
};
const Modules = () => {
  return (
    <ul>
      <CurrentModule
        name="Honours Project"
        moduleLeader="x"
        credits={40}
      ></CurrentModule>
      <CurrentModule
        name="Front-end Web Development"
        moduleLeader="Fiona Fairlie"
        credits={20}
      ></CurrentModule>
      <CurrentModule
        name="Machine Learning and Data Analytics"
        moduleLeader="Yan Zhang"
        credits={20}
      />
      <CurrentModule
        name="Secure Software Development"
        moduleLeader="Ryan Gibson"
        credits={20}
      />
      <CurrentModule
        name="Cloud Platform Development"
        moduleLeader="Sajid Nasir"
        credits={20}
      />
    </ul>
  );
};
const domContainer = document.querySelector("#moduleContainer");
const root = ReactDOM.createRoot(domContainer);
root.render(<Modules />);
