import React from "react";
import {Helmet} from "react-helmet";
import App from './App';
    const answerChoice = [
        'Seems unlikely.',
        'Not a chance.',
        'In your dreams.',
        'Get real, kid.',
        'Absolutely.',
        'Maybe.',
        'It is certain.',
        'Ask me later.',
        'Chances seem good.',
        'I don\'t know, I\'m just a stupid piece of plastic.',
        'Ask again later.',
        'Signs point to yes.',
        'No.',
        'Yes.',
        'Nope.',
        'Don\'t count on it.',
        'Is the Pope Catholic?',
        'Does a one legged duck swim in a circle?'
    ];
    const index = Math.floor(Math.random() * answerChoice.length);
const answer = answerChoice[index];
function Answer(){
return(
<div className="answer">
      <Helmet title="Question Answered!"/>
      <h1 class="answerTell">The answer to your question is:</h1>
     <h1 class="finalAnswer">
         {answer}
     </h1>
     <h3 class="random">The magic 8 ball gives random answers.</h3>
<a href="/"><button class="homepageButton">Homepage</button></a>
    </div>
)
}
export default Answer