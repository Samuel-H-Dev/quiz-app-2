const imageURI = process.env.PUBLIC_URL + '/images/'


export default function Card({data, quizLength, quizId, handleAnswer}){
    
    
    return(
    <div className="quiz-card">
        <h2>Guess the Movie <span>({quizId + 1}/{quizLength})</span></h2>
        {/* <h3>{ data[quizId].question }</h3> */}
        <img src={imageURI + data[quizId].image} alt="" />
        <ul>
            {data[quizId].options.map(
                (e, index) => {
                    return(
                    <li key={index} onClick={() => {handleAnswer(e.isCorrect)}}> {e.answer}</li>
                    )
                }
            )}
        </ul>
    </div>
)}