var currentUser = JSON.parse(localStorage.getItem("currentUser"));
var userName = currentUser ? currentUser.username : null;


function writeCurrentUser(){
    var welcomeMessageSpan = document.getElementById("isim");
    welcomeMessageSpan.innerHTML = userName;
}

const toggles = [
    { id: "atManavgat", element: document.getElementById("atManavgat") },
    { id: "atHome", element: document.getElementById("atHome") },
    { id: "gonnaOut", element: document.getElementById("gonnaOut") }
];

toggles.forEach(toggle => {
    toggle.element.addEventListener("change", () => {
        const state = toggle.element.checked;
        saveToggleState(userName, toggle.id, state);
    });
});

function saveToggleState(username, toggleId, state){
    const userKey = username + "_" + toggleId;
    localStorage.setItem(userKey, JSON.stringify(state));
}


function getInfoFromLocalForSelami(username) {
    function setCheckedState(elementId, savedState) {
        const element = document.getElementById(elementId);
        element.checked = savedState === true;
    }

    const userKeyForOut = username + "_" + "gonnaOut";
    const savedStateOut = JSON.parse(localStorage.getItem(userKeyForOut)) || false;
    setCheckedState("selamiDisari", savedStateOut);

    const userKeyForAtHome = username + "_" + "atHome";
    const savedStateAtHome = JSON.parse(localStorage.getItem(userKeyForAtHome)) || false;
    setCheckedState("selamiEv", savedStateAtHome);

    const userKeyForAtManavgat = username + "_" + "atManavgat";
    const savedStateAtManavgat = JSON.parse(localStorage.getItem(userKeyForAtManavgat)) || false;
    setCheckedState("selamiManavgat", savedStateAtManavgat);
}

function getInfoFromLocalForCemil(username) {
    function setCheckedState(elementId, savedState) {
        const element = document.getElementById(elementId);
        element.checked = savedState === true;
    }

    const userKeyForOut = username + "_" + "gonnaOut";
    const savedStateOut = JSON.parse(localStorage.getItem(userKeyForOut)) || false;
    setCheckedState("cemilDisari", savedStateOut);

    const userKeyForAtHome = username + "_" + "atHome";
    const savedStateAtHome = JSON.parse(localStorage.getItem(userKeyForAtHome)) || false;
    setCheckedState("cemilEv", savedStateAtHome);

    const userKeyForAtManavgat = username + "_" + "atManavgat";
    const savedStateAtManavgat = JSON.parse(localStorage.getItem(userKeyForAtManavgat)) || false;
    setCheckedState("cemilManavgat", savedStateAtManavgat);
}

function getInfoFromLocalForTalha(username) {
    function setCheckedState(elementId, savedState) {
        const element = document.getElementById(elementId);
        element.checked = savedState === true;
    }

    const userKeyForOut = username + "_" + "gonnaOut";
    const savedStateOut = JSON.parse(localStorage.getItem(userKeyForOut)) || false;
    setCheckedState("talhaDisari", savedStateOut);

    const userKeyForAtHome = username + "_" + "atHome";
    const savedStateAtHome = JSON.parse(localStorage.getItem(userKeyForAtHome)) || false;
    setCheckedState("talhaEv", savedStateAtHome);

    const userKeyForAtManavgat = username + "_" + "atManavgat";
    const savedStateAtManavgat = JSON.parse(localStorage.getItem(userKeyForAtManavgat)) || false;
    setCheckedState("talhaManavgat", savedStateAtManavgat);
}

function getInfoFromLocalForElyasa(username) {
    function setCheckedState(elementId, savedState) {
        const element = document.getElementById(elementId);
        element.checked = savedState === true;
    }

    const userKeyForOut = username + "_" + "gonnaOut";
    const savedStateOut = JSON.parse(localStorage.getItem(userKeyForOut)) || false;
    setCheckedState("elyasaDisari", savedStateOut);

    const userKeyForAtHome = username + "_" + "atHome";
    const savedStateAtHome = JSON.parse(localStorage.getItem(userKeyForAtHome)) || false;
    setCheckedState("elyasaEv", savedStateAtHome);

    const userKeyForAtManavgat = username + "_" + "atManavgat";
    const savedStateAtManavgat = JSON.parse(localStorage.getItem(userKeyForAtManavgat)) || false;
    setCheckedState("elyasaManavgat", savedStateAtManavgat);
}


window.onload = function(){
    writeCurrentUser();

    toggles.forEach(toggle => {
        const savedState = JSON.parse(localStorage.getItem(userName + "_" + toggle.id)) || false;
        toggle.element.checked = savedState;
    });

    getInfoFromLocalForSelami("selami")
    getInfoFromLocalForCemil("cemil")
    getInfoFromLocalForTalha("talha")
    getInfoFromLocalForElyasa("elyasa")
}



