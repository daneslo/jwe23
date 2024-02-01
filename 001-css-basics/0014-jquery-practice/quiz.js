const questions = [
    {
        question: "Was ist die Hauptstadt von Spanien?",
        options: ["Berlin", "Madrid", "Paris", "Mexiko stadt"],
        correctAnswer: "Madrid",
    },
    {
        question: "Wie viele Kontinente gibt es?",
        options: ["4", "6", "7", "8"],
        correctAnswer: "7",
    },
    {
        question: "Wie viele Planeten gibt es in unserem Sonnensystem?",
        options: ["7", "8", "9", "10"],
        correctAnswer: "8",
    }
];

let currentQuestion = 0;
let correctAnswers = 0;



let showQuestion = function (index) {
    let question = questions[currentQuestion].question;
    $("#question-text").text(question);
    answerList(index);
};

let answerList = function (index) {
    let answers = questions[currentQuestion].options;
    $("#answer-list").empty();
    $(answers).each(function(index,answer){
        $("#answer-list").append(`
            <button data.index = "${index}"> [${index}] ${answer}</button><br>
        `);
    });

};
    
  showQuestion(0);

  
  $("#answer-list").on("click", function() {
    console.log($(this));
    
    let selectedAnswer = $(this);
    let correctAnswer = questions[currentQuestion].correctAnswer;


    console.log(selectedAnswer, correctAnswer);

    if (selectedAnswer === correctAnswer) {
      $("#result").text("Richtig! Beantwortet");
      correctAnswers++;
  
    } else {
      $("#result").text("Falsch! Beantwortet" + questions[currentQuestion].options[correctAnswer]);
    }

    $("#answer-list").off("click");
    $("#next-btn").show();
  });

  $("#next-btn").on("click", function () {
    currentQuestion++;

    if (currentQuestion < questions.length){
        showQuestion();

        $("#result").text("");

        $("#answer-list").on("click");

        $("#next-btn").hide();
    } else {
        $("#question-container").hide();
        $("#next-btn").hide();
        $("#result").text("Quiz abgeschlossen. DU hast " + correctAnswers + "von" + questions.length)+ "Fragen richtig beantworten";
    };
});


  
 
