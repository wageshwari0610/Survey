import SurveyNav from "./SurveyNav";
import QuesList from "./QuesList";
import React, { useState } from "react";
import "./surveyques.css";
import { TextField } from "@mui/material";
import DropDown from "./DropDown";
import InputField from "./InputField";
import { useDispatch } from "react-redux";
import { newQuestion } from "../action";
import Emoji from "./Emoji";
// import LongChoice from "./LongChoice";

function SurveyQues() {
  const dispatch = useDispatch();
  const [isOptionFocused, setIsOptionFocused] = useState(false);
  const [optionCount, setOptionCount] = useState(2);
  const [question, setQuestion] = useState("");
  // const [answer, setAnswer] = useState("wageshwari");
  // const [emoji, setEmoji] = useState("");
  const [addNewQuestionDisable, setaddNewQuestionDisable] = useState(true);
  const [dropDownType, setdropDownType] = React.useState("Single");
  const [option, setOption] = useState({
    Option1: "",
    Option2: "",
    Option3: "",
    Option4: "",
    Option5: "",
    Option6: "",
  });
  const handleChangeDropDown = (event) => {
    setaddNewQuestionDisable(true);
    setdropDownType(event.target.value);
    setQuestion("");
    // setAnswer("");
    setOption({
      Option1: "",
      Option2: "",
      Option3: "",
      Option4: "",
      Option5: "",
      Option6: "",
    });
  };
  const optionLength = Object.keys(option).reduce((sum, key) => {
    return option[key] === "" ? sum + 0 : sum + 1;
  }, 0);
  const addMoreOptionDisable = optionCount > 6 ? true : false;

  const btnColor = addNewQuestionDisable
    ? "btncs btninactive"
    : "btncs btnactive";

  const handleChange = (e) => {
    e.preventDefault();
    setOption((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
    if (optionLength > 1 && question !== "") {
      setaddNewQuestionDisable(false);
    }
  };
  const handleQuestion = (e) => {
    if (e.target.name === "Question") {
      setQuestion(e.target.value);
    }
    if (
      dropDownType === "Short" ||
      (dropDownType === "Long" && question !== "")
    ) {
      setaddNewQuestionDisable(false);
    }
  };

  // const handleAnswer = (e) => {
  //   // setAnswer(e.target.value);
  //   if (answer !== "" && question !== "") {
  //     setaddNewQuestionDisable(false);
  //   }
  // };

  // const handleEmoji = (e) => {
  //   setEmoji(e.target.value);
  //   if (emoji !== "") {
  //     setaddNewQuestionDisable(false);
  //   }
  // };

  const handleAddOption = (e) => {
    setOptionCount(optionCount + 2);
  };

  const handleAddNewQuestion = (Type) => {
    switch (Type) {
      case "Single":
        const addNewSingleQuestionOption = {
          isRequired: "false",
          question,
          choices: Object.keys(option).reduce((arr, key) => {
            if (option[key] !== "") {
              arr.push(option[key]);
            }
            return arr;
          }, []),
          DDtype: Type,
        };

        dispatch(newQuestion(addNewSingleQuestionOption));
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
        break;
      case "Multiple":
        const addNewMultipleQuestionOption = {
          isRequired: "false",
          question,
          choices: Object.keys(option).reduce((arr, key) => {
            if (option[key] !== "") {
              arr.push(option[key]);
            }
            return arr;
          }, []),
          DDtype: Type,
        };

        dispatch(newQuestion(addNewMultipleQuestionOption));
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
        break;
      case "Short":
        const addNewShortQuestionAnswer = {
          isRequired: "false",
          question,
          choices: "",
          DDtype: Type,
        };

        dispatch(newQuestion(addNewShortQuestionAnswer));
        setQuestion("");
        // setAnswer("");

        break;
      case "Long":
        const addNewLongQuestionAnswer = {
          isRequired: "false",
          question,
          choices: "",
          DDtype: Type,
        };

        dispatch(newQuestion(addNewLongQuestionAnswer));
        setQuestion("");
        // setAnswer("");
        break;
      case "Emoji":
        const addNewQuestionEmoji = {
          isRequired: "false",
          question,
          choices: "",
          DDtype: Type,
        };

        dispatch(newQuestion(addNewQuestionEmoji));
        setQuestion("");
        // setEmoji("");
        break;
      default:
        break;
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
              <DropDown
                handleChange={handleChangeDropDown}
                dropDownType={dropDownType}
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
          {(dropDownType === "Single" || dropDownType === "Multiple") && (
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
          {/* {(dropDownType === "Short" || dropDownType === "Long") && (
            <LongChoice handleAnswer={handleAnswer} answer={answer} />
          )} */}
          {dropDownType === "Emoji" && (
            <div>
              <Emoji />
            </div>
          )}
        </div>
        <QuesList />
      </div>
      <div className="footer">
        <div className="footerline"></div>
        <button
          className={btnColor}
          onClick={() => handleAddNewQuestion(dropDownType)}
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
