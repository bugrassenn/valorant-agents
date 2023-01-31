import React from "react";
import { useParams } from "react-router-dom";
function Details({ agents }) {
  const { id } = useParams();
  const thisAgent = agents.find((agent) => agent.uuid === id);

  return (
    <div className="container mb-3">
      <h1 className="text-center details-header">
        {thisAgent.displayName} Details Page
      </h1>
      <img src={thisAgent.fullPortrait} alt="Agent Icon" className="img" />
      <p className="agent-description">{thisAgent.description}</p>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12">
            <div className="row abilities-row">
              <div className="col-sm-2 bg-dark border">
                <h1 className="text-center text-white">Icon</h1>
              </div>
              <div className="col-sm-4 bg-dark border">
                <h1 className="text-center text-white">Name</h1>
              </div>
              <div className="col-sm-6 bg-dark border">
                <h1 className="text-center text-white">Description</h1>
              </div>
            </div>
          </div>
          <div className="col-sm-12 bg-danger">
            <div className="row abilities-row">
              <div className="col-sm-2 bg-danger border">
                <img
                  src={thisAgent.abilities[0].displayIcon}
                  className="abilities-icons"
                  alt=""
                />
              </div>
              <div className="col-sm-4 border">
                <div className="displayName">
                  <h3 className="abilities-displayName">
                    {thisAgent.abilities[0].displayName}
                  </h3>
                </div>
              </div>
              <div className="col-sm-6 border">
                <p className="abilities-description">
                  {thisAgent.abilities[0].description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 bg-danger">
            <div className="row abilities-row">
              <div className="col-sm-2 bg-danger border">
                <img
                  src={thisAgent.abilities[1].displayIcon}
                  className="abilities-icons"
                  alt=""
                />
              </div>
              <div className="col-sm-4 border">
                <div className="displayName">
                  <h3 className="abilities-displayName">
                    {thisAgent.abilities[1].displayName}
                  </h3>
                </div>
              </div>
              <div className="col-sm-6 border">
                <p className="abilities-description">
                  {thisAgent.abilities[1].description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 bg-danger">
            <div className="row abilities-row">
              <div className="col-sm-2 bg-danger border">
                <img
                  src={thisAgent.abilities[2].displayIcon}
                  className="abilities-icons"
                  alt=""
                />
              </div>
              <div className="col-sm-4 border">
                <div className="displayName">
                  <h3 className="abilities-displayName">
                    {thisAgent.abilities[2].displayName}
                  </h3>
                </div>
              </div>
              <div className="col-sm-6 border">
                <p className="abilities-description">
                  {thisAgent.abilities[2].description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 bg-danger">
            <div className="row abilities-row">
              <div className="col-sm-2 bg-danger border">
                <img
                  src={thisAgent.abilities[3].displayIcon}
                  className="abilities-icons"
                  alt=""
                />
              </div>
              <div className="col-sm-4 border">
                <div className="displayName">
                  <h3 className="abilities-displayName">
                    {thisAgent.abilities[3].displayName}
                  </h3>
                </div>
              </div>
              <div className="col-sm-6 border">
                <p className="abilities-description">
                  {thisAgent.abilities[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
