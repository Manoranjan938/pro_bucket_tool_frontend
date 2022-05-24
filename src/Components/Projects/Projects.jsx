import React, { useEffect } from "react";

import "./Projects.css";

import image1 from "Images/Personal-Project.png";
import avatar from "Images/avatar1.png";
import NoProjects from "Components/NoProject/NoProjects";
import { connect } from "react-redux";
import { compose } from "redux";

import { getAllProjects } from "Apis/Actions/projectsAction";

const Projects = ({ getProjects, currentUser, myProjects }) => {
  
  useEffect(() => {
    getProjects(currentUser.id);
  }, []);

  return (
    <>
      {myProjects ? (
        <div className="projects__container">
          <div className="project__upper_section">
            <img src={image1} alt="" />
            <div className="extras">
              <h2>Please Choose Your Project</h2>
              <button className="project_btn">Create new Project</button>
            </div>
          </div>
          <div className="project__bottom_section">
            {myProjects.map((item, index) => (
              <>
                <div className="project__card" key={index}>
                  <div className="project__header__details">
                    <img src={avatar} alt="" />
                    <div className="project__texts">
                      <h4>{item.projectName}</h4>
                      <h5>{item.projectType}</h5>
                    </div>
                  </div>
                  <h4>
                    Project Lead: <span>{item.leadBy}</span>
                  </h4>
                </div>
              </>
            ))}
          </div>
        </div>
      ) : (
        <NoProjects />
      )}
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getProjects: (data) => dispatch(getAllProjects(data)),
  };
}

const mapStateToProps = (state) => ({
  currentUser: state.security.user,
  myProjects: state.project.allProjects,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Projects);
