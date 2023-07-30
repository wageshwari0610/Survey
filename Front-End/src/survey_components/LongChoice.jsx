import { TextareaAutosize } from "@mui/base";

export default function LongChoice(props) {
  return (
    <div className="textQuestionAnswer">
      <TextareaAutosize
        id="standard-basic"
        variant="standard"
        className="question-answer"
        onChange={props.handleAnswer}
        name="Answer"
        value={props.answer}
      />
    </div>
  );
}
