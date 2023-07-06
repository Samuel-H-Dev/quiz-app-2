export default function Results({ quizLength, handleReset, score }){

    return(
        <div className="quiz-card">
            <h2>Results</h2>
            <h3>You Scored {score} out of {quizLength}</h3>
            <button onClick={handleReset}>Reset</button>

        </div>
    )
}