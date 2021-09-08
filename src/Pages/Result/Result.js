import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router";
import "./Result.css";

const Result = ({ name, score, time }) => {
  const history = useHistory();
  const passingMarks = 6;

  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);
  console.log(time)

  const h = () => {
    if (time.h === 0) {
      return "";
    } else {
      return <span>{time.h >= 10 ? time.h : "0" + time.h}</span>;
    }
  };

  return (
    
    <div className="result">
      <span className="final">
        {" "}
        {name} Your Final Score : <span className="score">{score}</span>/10{" "}
      </span>
      {score > passingMarks ? (
        <span className="finalresult">
          You have <span className="pass">Passed</span> the Quiz
        </span>
      ) : (
        <span className="finalresult">
          You have <span className="fail">Failed</span> the Quiz by{" "}
          {passingMarks + 1 - score} Mark/s
        </span>
      )}
      <span className="finalTime">{h()}And You took
        <span> {time.m } </span>Minutes
        <span> {time.s } </span>Seconds for Quiz.
        </span>
      
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
