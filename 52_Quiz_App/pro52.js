const quiz = document.querySelector('#quiz')
const answerEle = document.querySelectorAll('.answer')
const questionEle = document.querySelector('#question')
const a_text = document.querySelector('#a_text')
const b_text = document.querySelector('#b_text')
const c_text = document.querySelector('#c_text')
const d_text = document.querySelector('#d_text')
const submitBtn = document.querySelector('#submit')


let currentQuiz = 0
let score = 0


async function ApiData() {
    const quizData = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple'
    const res = await fetch(quizData) // Correctly fetching the URL
    const data1 = await res.json()
    const questions = data1.results


    // Call mainFunction with the fetched data
    mainFunction(questions)
}

function mainFunction(data) {
    // Process your questions here

    loadQuiz()


    function loadQuiz() {

        deselectAnswers()


        let currentData = data[currentQuiz]

        let allAnswers = [currentData.correct_answer, currentData.incorrect_answers[0], currentData.incorrect_answers[1], currentData.incorrect_answers[2]];

        allAnswers.sort(() => Math.random() - 0.5)

        questionEle.innerHTML = currentData.question
        a_text.innerHTML = allAnswers[0]
        b_text.innerHTML = allAnswers[1]
        c_text.innerHTML = allAnswers[2]
        d_text.innerHTML = allAnswers[3]

    }

    function getSelected() {
        let answer

        answerEle.forEach(ans => {
            if (ans.checked) {
                answer = document.querySelector(`label[for="${ans.id}"]`).innerText;
            }
        })

        return answer
    }

    function deselectAnswers() {
        answerEle.forEach(answerEl => answerEl.checked = false)
    }

    submitBtn.addEventListener('click', () => {
        console.log("btn clcked");

        const answer = getSelected()


        if (answer) {
            console.log(answer);
            console.log(data[currentQuiz].correct_answer);

            if (answer === data[currentQuiz].correct_answer) {
                score++
                console.log(score);

            }


            currentQuiz++

            if (currentQuiz < data.length) {
                loadQuiz()
            } else {
                quiz.innerHTML = `
                        <h2>You Answered ${score}/${data.length} Questions Correctly </h2>
                        <button onclick="location.reload()">Reload</button>
                `
            }

        }


    })






}

ApiData()
