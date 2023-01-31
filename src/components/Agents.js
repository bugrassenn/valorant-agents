import React from "react";
import { Link } from "react-router-dom";
function Agents({ agents }) {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          {agents.map((agent, idx) => (
            <div className="col-sm-3 agent-div" key={idx}>
              <div className="card shadow-lg p-3 mb-4 bg-danger rounded">
                <h3 className="card-title text-center mb-3 text-white">
                  {agent.displayName}
                </h3>
                <img
                  src={agent.bustPortrait}
                  alt="Sample Icon"
                  className="card-img"
                />
                <Link to={`/detail/${agent.uuid}`} className="Link">
                  <span>Agent Details</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Agents;
