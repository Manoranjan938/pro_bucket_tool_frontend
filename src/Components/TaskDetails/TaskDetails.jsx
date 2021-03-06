import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiFillEye, AiOutlineClose } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import { GoPrimitiveDot, GoCheck } from "react-icons/go";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";
import { VscTypeHierarchySub } from "react-icons/vsc";

import "./TaskDetails.css";
import { Button, Menu, MenuItem } from "@mui/material";
import SubTask from "Components/SubTask/SubTask";
import ExtraDetails from "Components/ExtraTaskDetails/ExtraDetails";
import TaskActivity from "Components/Activity/TaskActivity";

const TaskDetails = ({ close }) => {
  const [type] = useState("task");
  const [taskStatus, setTaskStatus] = useState({
    title: "Todo",
    type: "inherit",
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const changeStatus = (status) => {
    const st = status;
    if (st === "InProgress") {
      setTaskStatus({ title: st, type: "primary" });
      setAnchorEl(null);
    } else if (st === "Completed") {
      setTaskStatus({ title: st, type: "success" });
      setAnchorEl(null);
    } else {
      setTaskStatus({ title: st, type: "inherit" });
      setAnchorEl(null);
    }
  };

  return (
    <>
      <div className="task_details_container">
        <div className="task_details_header">
          <div className="identifier">
            <div className="type_icon">
              {type === "epic" && (
                <span className="icon_epic">
                  <GiElectric />
                </span>
              )}
              {type === "bug" && (
                <span className="icon_bug">
                  <GoPrimitiveDot />
                </span>
              )}
              {type === "task" && (
                <span className="icon_task">
                  <GoCheck />
                </span>
              )}
            </div>
            <Link to="#" className="unique_ids">
              MCB-19
            </Link>
          </div>
          <div className="extra_icons">
            <AiFillEye />
            <FiShare2 />
            <BsThreeDots />
            <AiOutlineClose onClick={close} />
          </div>
        </div>
        <div className="task_details_body">
          <div className="task_operatives">
            <div className="task_title">
              <h1>Need to check youtube</h1>
            </div>
            <div className="tasks_links">
              <Button variant="contained" color="inherit">
                <GrAttachment /> &nbsp; Attach
              </Button>
              <Button variant="contained" color="inherit">
                <VscTypeHierarchySub /> &nbsp; Create Subtask
              </Button>
            </div>
            <div className="description">
              <h5>Description</h5>
              <div className="text-field">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Add a description"
                />
              </div>
              <div className="desc_btns">
                <Button variant="contained">Save</Button>
                <Button variant="contained" color="inherit">
                  Cancel
                </Button>
              </div>
            </div>
            <div className="subtasks_list">
              <SubTask />
            </div>
            <div className="activities">
              <TaskActivity />
            </div>
          </div>
          <div className="task_extras">
            <div className="status_btn">
              <Button
                variant="contained"
                color={taskStatus.type}
                onClick={handleClick}
              >
                {taskStatus.title}
                <span>
                  {open ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </span>
              </Button>
            </div>
            <ExtraDetails />
          </div>
        </div>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => changeStatus("Todo")}>ToDo</MenuItem>
        <MenuItem onClick={() => changeStatus("InProgress")}>
          InProgress
        </MenuItem>
        <MenuItem onClick={() => changeStatus("Completed")}>Completed</MenuItem>
      </Menu>
    </>
  );
};

export default TaskDetails;
