import SurveyNav from "./SurveyNav";
import QuesList from "./QuesList";
import React, { useState } from "react";
import "./surveyques.css";
import { TextField } from "@mui/material";
import SelectLabels from "./DropDown";
import InputField from "./InputField";
import { useDispatch } from "react-redux";
import { newQuestion } from "../action";
import Emoji from "./Emoji";
import LongChoice from "./LongChoice";

function SurveyQues() {
  const dispatch = useDispatch();
  const [isOptionFocused, setIsOptionFocused] = useState(false);
  const [optionCount, setOptionCount] = useState(2);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [emoji, setEmoji] = useState("");
  const [addNewQuestionDisable, setaddNewQuestionDisable] = useState(false);
  const [dropDownType, setdropDownType] = React.useState("");
  const [option, setOption] = useState({
    Option1: "",
    Option2: "",
    Option3: "",
    Option4: "",
    Option5: "",
    Option6: "",
  });
  const handleChangeDropDown = (event) => {
    setdropDownType(event.target.value);
  };
  const optionLength = Object.keys(option).reduce((sum, key) => {
    return option[key] === "" ? sum + 0 : sum + 1;
  }, 0);
  const addMoreOptionDisable = optionCount > 6 ? true : false;
  const btnColor =
    question && addNewQuestionDisable ? "btncs btnactive" : "btncs btninactive";

  // const addNewQuestionDisable =
  //   optionLength > 1 && question !== "" ? false : true;

  const handleChange = (e) => {
    e.preventDefault();
    setOption((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
    if (optionLength > 1) {
      setaddNewQuestionDisable(true);
    }
  };
  const handleQuestion = (e) => {
    if (e.target.name === "Question") {
      setQuestion(e.target.value);
    }
  };

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
    if (answer !== "") {
      setaddNewQuestionDisable(true);
      console.log("answer", addNewQuestionDisable);
    }
  };

  const handleEmoji = (e) => {
    setEmoji(e.target.value);
    if (emoji !== "") {
      setaddNewQuestionDisable(true);
    }
  };

  const handleAddOption = (e) => {
    setOptionCount(optionCount + 2);
  };

  const handleAddNewQuestion = (ddType) => {
    switch (ddType) {
      case "":
        const addNewQuestion = {
          isRequired: "false",
          question,
          choices: Object.keys(option).reduce((arr, key) => {
            if (option[key] !== "") {
              arr.push(option[key]);
            }
            return arr;
          }, []),
          DDtype: dropDownType,
        };
        dispatch(newQuestion(addNewQuestion));
        setQuestion("");
        setOptionCount(2);
        setOption({
          Option1: "",
          Option2: "",
          Option3: "",
          Option4: "",
          Option5: "",
          Option6: "",
        });

      case Short:
    }
  };
  return (
    <div className="create-survey-main">
      <SurveyNav />
      <div className="create-question-body">
        <div className="question-nav">
          <div className="quesHeading">
            <div className="quesNo">
              <span>QUESTION 1</span>
            </div>
            <div className="required-toggle">
              <label className="form-check-label" for="flexSwitchCheckDefault">
                Required
              </label>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div>
              <SelectLabels
                handleChange={handleChangeDropDown}
                type={dropDownType}
              />
            </div>
          </div>
          <TextField
            id="standard-basic"
            variant="standard"
            className="question-description"
            placeholder="Type your Question here"
            onChange={handleQuestion}
            name="Question"
            value={question}
          />
          {(dropDownType === "" || dropDownType === "Multiple") && (
            <div>
              <div className="options">
                {Array.from(Array(optionCount)).map((c, index) => {
                  return (
                    <InputField
                      handleChange={handleChange}
                      value={option[`Option${index + 1}`]}
                      onFocus={() => setIsOptionFocused(true)}
                      onBlur={() => setIsOptionFocused(false)}
                      placeholder={`Option ${index + 1}`}
                      isHeadingFocused={isOptionFocused}
                      name={`Option${index + 1}`}
                    />
                  );
                })}
              </div>
              <button
                className=" custom btn btn-outline-primary "
                onClick={handleAddOption}
                disabled={addMoreOptionDisable}
              >
                + ADD MORE OPTIONS
              </button>
            </div>
          )}
          {(dropDownType === "Short" || dropDownType === "Long") && (
            <LongChoice handleAnswer={handleAnswer} value={answer} />
          )}
          {dropDownType === "Emoji" && (
            <div>
              <Emoji handleEmoji={handleEmoji} />
            </div>
          )}
        </div>
        <QuesList />
      </div>
      <div className="footer">
        <div className="footerline"></div>
        <button
          className={btnColor}
          onClick={handleAddNewQuestion}
          disabled={addNewQuestionDisable}
        >
          + ADD NEW QUESTION
        </button>
        <button className="btnsurvey btncs btnactive">SHARE SURVEY</button>
      </div>
    </div>
  );
}

export default SurveyQues;
