const quizdata = [
    
    {
        question:"How old are you?",
        a:"10",
        b:"20",
        c:"30",
        d:"40",
       correct:"b",
    },
    {
        question:"Who is the best player?",
        a:"kohli",
        b:"dhoni",
        c:"sachin",
        d:"smith",
       correct:"b",
    }
];

const quiz=document.getElementById('quiz');
const answersE1 = document.querySelectorAll(".answer");

const questionE1=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');                
const submitBtn = document.getElementById('submit');

let currentquiz = 0;
let score = 0;

loadquiz();

function loadquiz() {

    deselectAnswers();
    
    const currentquizdata = quizdata[currentquiz];

   questionE1.innerText = currentquizdata.question;

   a_text.innerText = currentquizdata.a;
   b_text.innerText = currentquizdata.b;
   c_text.innerText = currentquizdata.c;
   d_text.innerText = currentquizdata.d;  
}

function getSelect() {
  
  let ans = undefined;
  
  answersE1.forEach((answerE1) => {
          if (answerE1.checked) {
              ans = answerE1.id;
          }
      });

  return ans; 
}

function deselectAnswers() {
    answersE1.forEach((answerE1) => {
      answerE1.checked=false;
    });
}

submitBtn.addEventListener('click' , () => {

      const ans = getSelect();

      if(ans){
        
        if(ans ===  quizdata[currentquiz].correct)
        {score+=10;}
        else
        {score-=5;}

        currentquiz++;  

        if(currentquiz < quizdata.length)
        {
            loadquiz();
        }        
         else
         {
             quiz.innerHTML = `<h2>You scored ${score}/${quizdata.length * 10}</h2>
             <button onclick="location.reload()">Reload</button`
        }
      }    
});

