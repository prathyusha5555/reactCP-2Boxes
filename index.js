const Box = (props) => {
  const { className, description } = props;
  return (
    <div className={className}>
      <p className="text">{description}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="small-box" description="Small" />
      <Box className="medium-box" description="Medium" />
      <Box className="large-box" description="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
