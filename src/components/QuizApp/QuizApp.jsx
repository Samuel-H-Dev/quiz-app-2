import "./QuizApp.css";
import Card from "./card";
import { useState } from "react";
import Results from "./Results";
import data from "../../data/quiz.json"

const quizLength = data.length


export default function QuizApp(){
    
    const [quizId, setQuizId] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    
    const handleAnswer = (isCorrect) =>{
        if (isCorrect) setScore(score + 1)

        const newQuizId = quizId + 1;
    
        (newQuizId < quizLength)
        ? setQuizId (newQuizId)
        : setShowResult(true)
    };
    
    const handleReset = () =>{
    setQuizId(0)
    setScore(0)
    setShowResult(false)
    };
    
    return(
        <>
        {
            showResult
            ? <Results 
            quizLength={quizLength}
            handleReset={handleReset}
            score={score}
            />
            : <Card 
            data={data}
            quizId={quizId}
            quizLength={quizLength}
            handleAnswer={handleAnswer}
            />
        }
        <h3>Quiz App</h3>
        </>
    )
}