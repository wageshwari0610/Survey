import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import clock from "../images/girl_clock.png";
import close from "../images/close.png";
import { deleteQuestion } from "../action";
import { useDispatch, useSelector } from "react-redux";
import "./queslist.css";

export default function QuesList() {
  const dispatch = useDispatch();
  const questionList = useSelector((state) => state);
  const handleCloseQuestion = (question) => {
    dispatch(deleteQuestion(question));
  };

  return (
    <div className="quesList">
      <List
        sx={{
          bgcolor: "white",
          height: "85%",
        }}
      >
        <ListItem>
          <div className="side-ques-heading">
            <p>QUESTIONS LIST</p>
            <div className="quesline"></div>
          </div>
        </ListItem>
        {questionList.length === 0 ? (
          <div>
            <ListItem>
              <p className="text"> Questions asked will be visible here </p>
            </ListItem>
            <ListItem>
              <img src={clock} alt="clock" className="imgclock" />
            </ListItem>
          </div>
        ) : (
          questionList.map((list) => (
            <div className="questionClose">
              <li>{list.question}</li>
              <img
                alt="close"
                src={close}
                onClick={() => handleCloseQuestion(list.question)}
              />
            </div>
          ))
        )}
      </List>
    </div>
  );
}
