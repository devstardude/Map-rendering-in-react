import React, { useState } from "react";

const InputBox = (props) => {
  const [coordinates, setCoordinates] = useState({ lat: "", lon: "" });
  const coordinatesChangeHandler = (event)=>{
    setCoordinates((prev)=>{
      return {...prev,[event.target.name]:event.target.value,}
    })
  }
  const coordinatesSubmitHandler = () => {
    props.submitCoordinates(coordinates);
  };
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center">
        <div className="mx-2 my-4 mx-md-4">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Lattitude"
            name="lat"
            value={coordinates.lat}
            onChange={coordinatesChangeHandler}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Longitude"
            name="lon"
            value={coordinates.lon}
            onChange={coordinatesChangeHandler}
          />
        </div>
        <div className="align-items-center align-item-center">
          <button
            type="button"
            className="btn btn-dark"
            onClick={coordinatesSubmitHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InputBox;
