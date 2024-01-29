const container = document.querySelector(".container");
const modeBtn = document.querySelector(".mode-button");
const containerCategory = document.querySelector(".container__quiz-card");
const root = document.querySelector(":root");
let containerQuiz;
let total = 0;
let width = 0;

const data = [
    {
        id: "1",
        img: './assets/icons/icon-3.svg',
        name: "Html",
        question: [
            {
                id: "1",
                text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                trueanswer: 1,
                answers: [
                    {
                        id: "1",
                        answer: "4.5 : 1",
                        variant: 'A',
                    },
                    {
                        id: "2",
                        answer: "0 : 0 ",
                        variant: 'B',
                    },
                    {
                        id: "3",
                        answer: "2.5 : 1",
                        variant: 'C',
                    },
                    {
                        id: "4",
                        answer: "5 : 1",
                        variant: 'D',
                    }
                ]
            },
            {
                id: "2",
                text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                trueanswer: 3,
                answers: [
                    {
                        id: "1",
                        variant: "A",
                        answer: "false",
                    },
                    {
                        id: "2",
                        variant: "B",
                        answer: "false",
                    },
                    {
                        id: "3",
                        variant: "C",
                        answer: "true",
                    },
                    {
                        id: "4",
                        variant: "D",
                        answer: "false",
                    }
                ]
            },
            {
                id: "3",
                text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                trueanswer: 4,
                answers: [
                    {
                        id: "1",
                        variant: "A",
                        answer: "True",
                    },
                    {
                        id: "2",
                        variant: "B",
                        answer: "True",
                    },
                    {
                        id: "3",
                        variant: "C",
                        answer: "False",
                    },
                    {
                        id: "4",
                        variant: "D",
                        answer: "True",
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        img: './assets/icons/icon-4.svg',
        name: "Css",
        question: [
            {
                id: "1",
                text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                trueanswer: 2,
                answers: [
                    {
                        id: "1",
                        answer: "4.5 : 1",
                        variant: 'A',
                    },
                    {
                        id: "2",
                        answer: "0 : 0 ",
                        variant: 'B',
                    },
                    {
                        id: "3",
                        answer: "2.5 : 1",
                        variant: 'C',
                    },
                    {
                        id: "4",
                        answer: "5 : 1",
                        variant: 'D',
                    }
                ]
            },
            {
                id: "2",
                text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                trueanswer: 3,
                answers: [
                    {
                        id: "1",
                        answer: "4.5 : 1",
                        variant: 'A',
                    },
                    {
                        id: "2",
                        answer: "0 : 0 ",
                        variant: 'B',
                    },
                    {
                        id: "3",
                        answer: "2.5 : 1",
                        variant: 'C',
                    },
                    {
                        id: "4",
                        answer: "5 : 1",
                        variant: 'D',
                    }
                ]
            }
        ]
    },
    {
        id: '3',
        img: './assets/icons/icon-5.svg',
        name: "JavaScript",
        question: [
            {
                id: "1",
                text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                trueanswer: 1,
                answers: [
                    {
                        id: "1",
                        answer: "4.5 : 1",
                        variant: 'A',
                    },
                    {
                        id: "2",
                        answer: "0 : 0 ",
                        variant: 'B',
                    },
                    {
                        id: "3",
                        answer: "2.5 : 1",
                        variant: 'C',
                    },
                    {
                        id: "4",
                        answer: "5 : 1",
                        variant: 'D',
                    }
                ]
            },
            {
                id: "2",
                text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                trueanswer: 2,
                answers: [
                    {
                        id: "1",
                        answer: "4.5 : 1",
                        variant: 'A',
                    },
                    {
                        id: "2",
                        answer: "0 : 0 ",
                        variant: 'B',
                    },
                    {
                        id: "3",
                        answer: "2.5 : 1",
                        variant: 'C',
                    },
                    {
                        id: "4",
                        answer: "5 : 1",
                        variant: 'D',
                    }
                ]
            }
        ]
    },
    {
        id: '4',
        img: './assets/icons/icon-6.svg',
        name: "Accessibility",
        question: [
            {
                id: "1",
                text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                trueanswer: 3,
                answers: [
                    {
                        id: "1",
                        answer: "4.5 : 1",
                        variant: 'A',
                    },
                    {
                        id: "2",
                        answer: "0 : 0 ",
                        variant: 'B',
                    },
                    {
                        id: "3",
                        answer: "2.5 : 1",
                        variant: 'C',
                    },
                    {
                        id: "4",
                        answer: "5 : 1",
                        variant: 'D',
                    }
                ]
            },
            {
                id: "2",
                text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                trueanswer: 1,
                answers: [
                    {
                        id: "1",
                        answer: "4.5 : 1",
                        variant: 'A',
                    },
                    {
                        id: "2",
                        answer: "0 : 0 ",
                        variant: 'B',
                    },
                    {
                        id: "3",
                        answer: "2.5 : 1",
                        variant: 'C',
                    },
                    {
                        id: "4",
                        answer: "5 : 1",
                        variant: 'D',
                    }
                ]
            }
        ]
    }
];

//   GetCurrentUrl
let params = getCurrentUrl();
function getCurrentUrl() {
    let urlParams = new URLSearchParams(window.location.search);
    let categoryID = urlParams.get('categoryID');
    let questionID = urlParams.get('questionID');
    let result = urlParams.get('result');

    let pageName = window.location.pathname.split('/').pop();
    return {
        categoryID: categoryID,
        questionID: questionID,
        result: result,
        pageName: pageName
    }
}

if (params.questionID && params.categoryID && !params.result) {
    generateQuestionPage(params.categoryID, params.questionID);
}
if (params.questionID && params.categoryID && params.result) {
    generateResultPage(params.categoryID);
}
if (!params.questionID && !params.categoryID) {
    getCategoryData(data);
}

//  GetAnswerData
function getAnswerData(x) {
    let dataHtml = '';
    x.map((item) => {
        dataHtml += `
        <div data-id=${item.id} class="container__quiz-parts-part slct ">
                    <div class="container__part-img img-back">
                        <p>${item.variant}</p>
                    </div>
                    <p class="answer-text">${item.answer}</p>
                </div>
        `
    })
    containerCategory.innerHTML = dataHtml;
    callAnswerOrCategory('answer');
}

//   GetCategoryData
function getCategoryData(x) {
    let dataHtml = '';
    x.map((item) => {
        dataHtml += `
        <div data-category-id=${item.id} class="container__quiz-parts-part">
                    <div class="container__part-img img-one">
                        <img src="${item.img}" alt="icon">
                    </div>
                    <p>${item.name}</p>
                </div>
        `
    })
    containerCategory.innerHTML = dataHtml;
    callAnswerOrCategory('category');
}

//  GenerateQuestionPage
function generateQuestionPage(catID, questionID) {
    let dataF = data.find(item => item.id == catID);
    let question = getQuestionByIDs(catID, questionID);
    getAnswerData(question.answers);
    if (question) {
        let questionBlock = document.querySelector('.cont-quiz');
        let containerHeadAccess = document.querySelector('.container__head-access');

        containerHeadAccess.innerHTML = `
        <div class="container__head-img img-fourth img-design">
                        <img src="${dataF.img}" alt="icon">
                    </div>
                    <p id="accessibility">${dataF.name}</p>
        `

        questionBlock.innerHTML = `
    <span>Question ${question.id} of ${dataF.question.length}</span>
                <p>${question.text}</p>
                <div class="container__question-design">
                    <div style='width:${width}%' class="container__question-design-loading"></div>
                </div> 
    `
        widthDesign(catID);
        let containerQuestion = document.querySelector(".cont-parts-btn");

        containerQuestion.innerHTML = ` 
    <button type="submit" class="container__quiz-parts-btn">Submit Answer</button>             
    `
        callAnswerOrCategory('answer');
        checkAnswer(question, catID);
    } else {
        setUrl('delete');
    }
}

function widthDesign(catID) {
    let categoryId = data.find(item => item.id == catID);
    width += Number(100 / categoryId.question.length);
}

//  GenerateresultPage    
function generateResultPage(categoryID) {
    let question = data.find(item => item.id == categoryID);

    let questionBlockResult = document.querySelector('.cont-quiz');
    let questionBlockResultRight = document.querySelector('.container__quiz-parts');
    let containerHeadAccess = document.querySelector('.container__head-access');

    containerHeadAccess.innerHTML = `
    <div class="container__head-img img-fourth img-design">
                    <img src="${question.img}" alt="icon">
                </div>
                <p id="accessibility">${question.name}</p>
    `
    questionBlockResult.innerHTML = `
    <header class="container__quiz-title">
                <h1>Quiz completed</h1>
                <h1>You scored...</h1>
            </header>
    `
    questionBlockResultRight.innerHTML = `
    <div class="container__quiz-parts-part" id="score-card">
    <div class="container__head-access" id="score-img">
        <div class="container__head-img img-fourth img-design">
            <img src="${question.img}" alt="icon">
        </div>
        <p id="accessibility">${question.name}</p>
    </div>
    <p class="answer-text">${total}</p>
    <span>out of ${question.question.length}</span>
    </div>
    <a href='./index.html'><button id="play-again" type="submit" class="container__quiz-parts-btn">Play Again</button></a>
    `
}

//  GetNextQuestion
function getNextQuestion(catID, questionID) {
    let category = data.find(item => item.id === catID);

    if (!category || !category.question) {
        return null;
    }

    let currentQuestionIndex = category.question.findIndex(item => item.id === questionID);
    if (currentQuestionIndex == -1 || currentQuestionIndex == category.question.length - 1) {
        return null;
    }
    return category.question[currentQuestionIndex + 1]
}

//   CheckAnswer
function checkAnswer(question, catID) {
    let submitBtn = document.querySelector('.container__quiz-parts-btn');
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let selectedElement = document.querySelector('.container__quiz-parts-part.selected');
        let selectedID = selectedElement?.getAttribute('data-id');
        let nextQuestion = getNextQuestion(catID, question.id);
        let rightElement = document.querySelector(`.container__quiz-parts-part[data-id="${question.trueanswer}"]`);
        let righClasstElement = document.querySelector('.container__quiz-parts-part.correct-answer')

        if (!righClasstElement) {
            if (selectedID) {
                if (selectedID == question.trueanswer) {
                    selectedElement.classList.add('correct-answer');
                    total += 1;
                } else {
                    selectedElement.classList.add('incorrect-answer');
                    rightElement.classList.add('correct-answer');
                }

                e.target.innerText = nextQuestion ? 'Next Question' : 'Submit Answer';
            } else {
                alert('no result');
            }
        }
        else {
            if (nextQuestion) {
                setUrl("update", { categoryID: catID, questionID: nextQuestion?.id });
            } else {
                setUrl("update", { categoryID: catID, questionID: question.id, result: true });
            }
        }
    })
}

function callAnswerOrCategory(type) {
    containerQuiz = document.querySelectorAll(".container__quiz-parts-part");
    containerQuiz.forEach(item => {
        if (type == 'category') {
            item.addEventListener('click', handleCategoryClick);
        }
        else if (type == 'answer') {
            item.addEventListener('click', selectCategory);
        }
    });
}

function selectCategory(event) {
    containerQuiz.forEach(item => {
        item.classList.remove("selected");
    })
    event.target.classList.add("selected");
}

function handleCategoryClick(event) {
    let catID = event.target.getAttribute("data-category-id");
    let firstQuestionID = getFirstQuestionIDByCategory(catID);

    let newParams = {
        categoryID: catID,
        questionID: firstQuestionID,

    }
    setUrl('update', newParams);
}

//   GetFirstQuestionIDByCategory
function getFirstQuestionIDByCategory(catID) {
    let category = data.find(item => item.id === catID);
    if (category && category.question && category.question.length > 0) {
        return category.question[0].id
    } else {
        return null
    }
}

//   SetUrl
function setUrl(type, params) {
    let newUrl = new URL(window.location.href);

    if (type == 'delete') {
        newUrl.search = '';
        getCategoryData();
    }
    else if (type == 'update') {
        Object.entries(params).forEach(([key, value]) => newUrl.searchParams.set(key, value));

        if (params.result) {
            generateResultPage(params.categoryID);
        } else {
            generateQuestionPage(params.categoryID, params.questionID);
        }

    }
    window.history.replaceState({}, '', newUrl);
}

//  GetQuestionByIDs
function getQuestionByIDs(catID, questionID) {
    let category = data.find(item => item.id == catID);

    if (category && category.question && category.question.length > 0) {
        let question = category.question.find(q => q.id == questionID)
        return question;
    }
    else {
        return null;
    }
}

modeBtn.addEventListener("click", (e) => {
    modeBtn.classList.toggle("active");
    if (!modeBtn.classList.contains("active")) {
        localStorage.setItem("theme", "light");
        root.style.setProperty('--light-grey', '#F4F6FA');
        root.style.setProperty('--color-dark', '#313E51');
        root.style.setProperty('--color-white', '#FFF');
        root.style.setProperty('--color-1', '#FFF1E9');
    } else {
        localStorage.setItem("theme", "dark");
        root.style.setProperty('--light-grey', '#313E51');
        root.style.setProperty('--color-dark', '#F4F6FA');
        root.style.setProperty('--color-white', '#313E51');
        root.style.setProperty('--color-1', '#313E51');
    }
});
