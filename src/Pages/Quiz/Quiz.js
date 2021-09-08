import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import "./Quiz.css";

const Quiz = ({
  time,
  stop,
  name,
  questions,
  score,
  setScore,
  setQuestions,
}) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  const h = () => {
    if (time.h === 0) {
      return "";
    } else {
      return <span>{time.h >= 10 ? time.h : "0" + time.h}</span>;
    }
  };

  return (
    <div className="quiz">
      <span className="subtitle">
        Welcome, <span className="name">{name}</span>{" "}
      </span>
      <div>
        {h()}&nbsp;&nbsp;
        <span>{time.m >= 10 ? time.m : "0" + time.m}</span>&nbsp;:&nbsp;
        <span>{time.s >= 10 ? time.s : "0" + time.s}</span>&nbsp;:&nbsp;
        <span>{time.ms >= 10 ? time.ms : "0" + time.ms}</span>
      </div>
      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>
              {/* {questions[currQues].difficulty} */}
              Score : <span className="score">{score}</span>
            </span>
          </div>
          <Question
            stop={stop}
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
