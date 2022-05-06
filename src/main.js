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

    addEventClearBtn();
    addEventDeleteBtn();
    addEventSmallBtn();
}



//const add = (val1, val2) => {
  //  console.log(val1 + " " + val2);
  //  writeScreen(Number(val1) + Number(val2))};

//add(1, 3);