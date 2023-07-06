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


    return(
        <>
        {
            showResult
            ? <Results 
            quizLength={quizLength}/>
            : <Card 
            data={data}
            quizId={quizId}
            quizLength={quizLength}
            />
        }
        <h3>Quiz App</h3>
        </>
    )
}