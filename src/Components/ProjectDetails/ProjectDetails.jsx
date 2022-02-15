import { MenuItem, Select, TextField } from '@mui/material';
import React from 'react';

import { data } from 'Components/TemplateProject/data';
import { typeData } from 'Components/ChooseType/data';

import './ProjectDetails.css'
import Template from 'Components/TemplateProject/Template';

const ProjectDetails = ({currentPage, setCurrentPage, details, setDetails}) => {

  const template = data.find((item) => item.templateId === details?.projectTemplateId);
  const type = typeData.find((items) => items.typeId === details?.projectTypeId)

  return (
    <>
      <div className="project__details_container">
        <div className="project__details__header">
          <button>
            <i className="fa fa-arrow-left" /> &nbsp;Back to project type
          </button>
        </div>
        <div className="project__details__body">
          <div className="project__details__section">
            <div className="header_section">
              <h3>Add project details</h3>
              <span>
                You can change these details anytime in your project setting.
              </span>
            </div>
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Name"
              className="input-field"
              defaultValue="Your project name"
            />
            <Select
              required
              labelId="select-label"
              id="simple-select"
              label="Access"
              className="input-field"
              fullWidth
            >
              <MenuItem>Private</MenuItem>
              <MenuItem>Public</MenuItem>
            </Select>
            <TextField
              fullWidth
              required
              label="Project description"
              className="input-field"
              multiline
              rows={4}
              defaultValue="Your project description"
            />
          </div>
          <div className="project__details_choose__section">
            <div className="option_template">
              <div className="option_template_header">
                <h4>Template</h4>
                <h4>Change Template</h4>
              </div>
              <div className="option_template_body">
                <Template items={template} />
              </div>
            </div>
            <div className="option_type">
              <div className="option_type_header">
                <h4>Type</h4>
                <h4>Change Type</h4>
              </div>
              <div className="option_type_body">
                <Template items={type} />
              </div>
            </div>
          </div>
        </div>
        <div className="project__details__footer">
          <button className='cancel_btn'>Cancel</button>
          <button>Create Project</button>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
