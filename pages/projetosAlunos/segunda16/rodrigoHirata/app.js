const quuiz = [
  {
  question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ?',
  answers: [
      'スーパーファミコン',
    'プレイステーション2',
    'ニンテンドウスイッチ',
    'ニンテンドーDS'
  ],
      correct: 'ニンテンドーDS'
  },{
      question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ?',
  answers: [
      'スーパーファミコン',
    'プレイステーション2',
    'ニンテンドウスイッチ',
    'ニンテンドーDS'
  ],
      correct: 'ニンテンドーDS'
  }, {
      question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ?',
  answers: [
      'スーパーファミコン',
    'プレイステーション2',
    'ニンテンドウスイッチ',
    'ニンテンドーDS'
  ],
      correct: 'ニンテンドーDS'
  },
];

const quizLength = quuiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName ('button');
const buttonLenght = $button.length;

const setupQuiz = () => {
document.getElementById('js-question').textContent = quuiz[quizIndex].question;
let buttonIndex = 0;

while(buttonIndex < buttonLenght){
    $button[buttonIndex].textContent = quuiz[quizIndex].answrers[buttonIndex];
    buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
   if(quuiz[quizIndex].correct === e.target.textContent){
   window.alert('sekai!');
   } else {
    window.alert('fusekai!');
    } 
    quizIndex++;
    
    if(quizIndex < quizLength){
        
        setupQuiz();
    } else{
        window.alert('end');
    }
};

let handlerIndex = 0;

while (handlerIndex < buttonLenght){
           $button[handlerIndex].addEventListener('click', (e) =>{
              clickHandler(e); 
           });
        handlerIndex++;
  }

