export default function Card({data, quizLength, quizId}){
    
    
    return(
    <div className="quiz-card">
        <p>{quizId + 1}/{quizLength}</p>
        <h3>{ data[quizId].question }</h3>
        <ul>
            {data[quizId].options.map(
                (e, index) => {
                    return(
                    <li key={index} onClick={"hello"}> {e.answer}</li>
                    )
                }
            )}
        </ul>
    </div>
)}