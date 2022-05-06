const WRITE_ID = {
    "user": "#screenUser",
    "answer": "#screenAnswer"
};

window.onload = () => {
    addEvents();

};

function writeScreen(elementID, text) {
    const SCREEN_TEXT = document.querySelector(elementID);
    SCREEN_TEXT.textContent = text;
}

function addEvents() {
    const addEventClearBtn = () => {
        const CLEAR_BTN = document.querySelector(".clear");
        CLEAR_BTN.addEventListener("click", () => {
            writeScreen(WRITE_ID["user"], "");
            writeScreen(WRITE_ID["answer"], "");
        })        
    }

    const addEventDeleteBtn = () => {
        const DELETE_BTN = document.querySelector(".delete");
        DELETE_BTN.addEventListener("click", () => {
            const newWrite = document.querySelector(WRITE_ID["user"]).textContent.slice(0, -1);
            writeScreen(WRITE_ID["user"], newWrite);
        })        
    }

    const addEventSmallBtn = () => {
        const smallButtons = document.querySelectorAll(".smallBtn");
        smallButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                writeScreen(WRITE_ID["user"], document.querySelector(WRITE_ID["user"]).textContent + btn.textContent);
                console.log("clicked " + btn.textContent);
            })
        })
    };

    const addEventOperatorsBtn = () => {
        const getValues = () => {};
        const addValues = (val1, val2) => {return val1 + val2};
        const subValues = (val1, val2) => {return val1 - val2};
        const divValues = (val1, val2) => {{return val1 / val2}};
        const multiValues = (val1, val2) => {{return val1 * val2}};

        const OPERATOR_PRIORITY_DIC = {
            "+" : 0,
            "-" : 0,
            "x" : 1,
            "/" : 1
        }

        const OPERATOR_DIC = {
            "+" : [OPERATOR_PRIORITY_DIC["+"], addValues],
            "-" : [OPERATOR_PRIORITY_DIC["-"], subValues],
            "x" : [OPERATOR_PRIORITY_DIC["x"], multiValues],
            "/" : [OPERATOR_PRIORITY_DIC["/"], divValues],
        };

        const OPERATOR = document.querySelectorAll(".operator");
        OPERATOR.forEach((operator) => {
            operator.addEventListener("click", () => {
                const event = OPERATOR_DIC[operator.textContent];
            });
        });
        console.log(OPERATOR_DIC["+"])
    };
    
    // Need to construct a priority queue / heap to account for operator priority
    const addEventEqualBtn = () => {
        let operatorPriorityQueue = {};

        const EQUAL = document.querySelector(".equal");
        const parseOperators = () => {
            console.log("Parsing operators")
            
        };

        EQUAL.addEventListener("click", () => {
            parseOperators();
        });
    };

    addEventClearBtn();
    addEventDeleteBtn();
    addEventEqualBtn();
    addEventSmallBtn();
    addEventOperatorsBtn();

    
}