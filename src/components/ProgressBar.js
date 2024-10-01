import { useQuiz } from "../contexts/QuizContexts";

function ProgressBar() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={
          index + Number(answer !== null)
          //if true it adds 1 to index, if false it adds 0 to index
        }
      />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}{" "}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default ProgressBar;
