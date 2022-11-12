import React, { useState,useEffect } from "react";
import Result from "../Result/result";
import moment from 'moment'

const Questions = () => {
  const questions = [
    {

      queImg: " https://en.testometrika.com/upload/questions/56e/56e7575fce5c66102f68965309041c81.svg",
      question: "1. Which shape should be in the rightmost cell with a question mark?",
      options: [
        { id: 1, answer: "https://en.testometrika.com/upload/answers/7f1/7f11134a286731f010982d5d79e8cd26.svg", isCorrect: false },
        { id: 2, answer: "https://en.testometrika.com/upload/answers/e3c/e3c50d49dd3e826c711e33eed9e6b9cb.svg", isCorrect: false },
        { id: 3, answer: "https://en.testometrika.com/upload/answers/370/370cd583ba4fe1ed516fa59e729ddf69.svg", isCorrect: false },
        { id: 4, answer: "https://en.testometrika.com/upload/answers/078/078f9d02c28538a24e685aa90ef651e3.svg", isCorrect: false },
        { id: 5, answer: "https://en.testometrika.com/upload/answers/52e/52e67d35e0f5d7ac65d639f7d74737b1.svg", isCorrect: true },
        { id: 6, answer: "https://en.testometrika.com/upload/answers/110/1108829aabfbc040dee01c20198f57be.svg", isCorrect: false },
      ],
    },
    {
      queImg: " https://en.testometrika.com/upload/questions/857/85779e2ee0f5a8c6874284c8dc7f040a.svg",
      question: "2. Which shape should be in the rightmost cell with a question mark?",
      options: [
        { answer: "https://en.testometrika.com/upload/answers/833/8333eeab5e38a9e4cb24412453f29f7b.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/292/29281ad823bd13e1f99a39e04685e6ed.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/5ef/5ef20f3121c4d9e38517522535eb298c.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/376/3763c71fffa9648c4aa1f1c53aa06bce.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/fe5/fe52d92ce882e1571d445b0951b2d887.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/81f/81ffd37c5b0c47314c5c35d90cc410f3.svg", isCorrect: true },
      ],
    },

    {
      queImg: " https://en.testometrika.com/upload/questions/86c/86c577fabc67aed0dbd84df222f0685a.svg",
      question: "3. Which shape should be in the rightmost cell with a question mark?",
      options: [
        { answer: "https://en.testometrika.com/upload/answers/2f5/2f5bb5003870c7d81339a60fc9ee0abf.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/405/405fc59bd9ca9b483046be0f5641c585.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/4e2/4e23e2df71d493fccae53c20760642c0.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/7df/7dfcfdb549c39a7d6c3cde429291bd03.svg", isCorrect: true },
        { answer: "https://en.testometrika.com/upload/answers/4f9/4f98b73c7fa56a9753c4f3d68b697fe1.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/468/468e4cededf71527edda5d3253dd5a9b.svg", isCorrect: false }
      ],
    },

    {
      queImg: " https://en.testometrika.com/upload/questions/a81/a81ad1de8cfdbb5d180ea3fd50a3bacc.svg",
      question: "4. Which shape should be in the rightmost cell with a question mark?",
      options: [
        { answer: "https://en.testometrika.com/upload/answers/99f/99f5c77985a1b200e9141fdd2ccf7b2d.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/071/0713aa121f002ad9bc4ae153eeb8e39d.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/67d/67d393aef6640deb3010b31f3b9cc95f.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/be5/be506b556903eb28735313c3f34c3e34.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/fea/feae0c9007450070ab504d2a9d250d5d.svg", isCorrect: true },
        { answer: "https://en.testometrika.com/upload/answers/60d/60d396000687765f149079a2effb9e82.svg", isCorrect: false }
      ],
    },

    {
      queImg: " https://en.testometrika.com/upload/questions/a84/a840c4e1d62823491d4fa2e03730cfe1.svg",
      question: "5. Which shape should be in the rightmost cell with a question mark?",
      options: [
        { answer: "https://en.testometrika.com/upload/answers/ad4/ad4b821d3e138226e71ba2cb4f264eef.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/fcd/fcdcdb73eda8bb8fa0e0a41ce823aa0f.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/ff2/ff2627f18be55c1b49bae14010c04251.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/782/7825e330fe924d2a57f0707552dc5253.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/4b0/4b0e932a6a92559edb7de27143b0f630.svg", isCorrect: false },
        { answer: "https://en.testometrika.com/upload/answers/4a5/4a5c07bab54b36da281e942add14f6e3.svg", isCorrect: false },
      ],
    },
  ];

  const [currentQue, setCurrentQue] = useState(0);
  const [displayScore, setDisplayScore] = useState(false);
  const [score, setScore] = useState(0);
  // Timer 
  const [seconds, setSeconds] = useState(0)
  const [startinterval, setstartinterval] = useState(true);

  // SetInterval function start/stop
  useEffect(() => {
    let startintervalcount = null;

    // If startinterval is true then timer will start 
    // on page load setinterval will become true and timer starts
    if (startinterval ) {
      startintervalcount = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else {
      clearInterval(startintervalcount);
    }
    return () => {
      clearInterval(startintervalcount);
    };
  }, [startinterval]);

  console.log(seconds,moment.utc(seconds*1000).format('HH:mm:ss'))
  
  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQue < questions.length - 1) {
      setCurrentQue(currentQue + 1);
    } 

    else {
      setstartinterval(false)
      setDisplayScore(true);
    }
  };
  function handleRetryClick() {
    setCurrentQue(0);
    setDisplayScore(false);
    setScore(0);
    setstartinterval(true)
    setSeconds(0)
  }

  return (
    <div className='app'>
      {displayScore ? (
        // send duration to result page using moment package to convert sec to hours:min:sec format
        <Result score={score} handleRetryClick={handleRetryClick} questions={questions} duration={moment.utc(seconds*1000).format('HH:mm:ss')}/>
      ) : (
        <div className="ques-ans">
          <div className='question-section'>
            <div className='question-count'>
              <span>{currentQue + 1}</span>/{questions.length}
            </div>
            <div className='que-img'>{<img src={questions[currentQue].queImg} />}</div>
            <div className='question-text'>{questions[currentQue].question}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQue].options.map((option) => (
              <button onClick={() => handleAnswerClick(option.isCorrect)}>{<img key={option.id} src={option.answer} alt="can't show image" />}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

}

export default Questions;