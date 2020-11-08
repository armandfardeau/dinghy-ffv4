const itemLocalStorageKey = "self-evaluator";
const levelLocalStorageKey = "completed-level";
const itemClass = "evaluator-item";
const levelClass = "evaluator-level";
const storedItems = JSON.parse(localStorage.getItem(itemLocalStorageKey));
const storedLevels = JSON.parse(localStorage.getItem(levelLocalStorageKey));
const completedClass = "completed";

const setElement = (store, storageKey, key, value) => {
    let items = store;
    if (!items) {
        items = {};
    }
    items[key] = value;
    localStorage.setItem(storageKey, JSON.stringify(items));
};

const registerItemState = (e) => {
    if (e.checked) {
        setElement(storedItems, itemLocalStorageKey, e.id, "1");
    } else {
        setElement(storedItems, itemLocalStorageKey, e.id, "0");
    }
};

const registerLevelState = (e, completedState = false) => {
    if (completedState) {
        setElement(storedLevels, levelLocalStorageKey, e.id, "1");
    } else {
        setElement(storedLevels, levelLocalStorageKey, e.id, "0");
    }
};

const getChildren = (nodes) => {
    return Array.from(nodes).map((i) => {
        if (i.childNodes.length === 0 && i.classList !== undefined) {
            return i;
        } else {
            return getChildren(i.childNodes);
        }
    }).flat();
};

const childNodes = (e) => {
    let nodes = e.childNodes;
    return getChildren(nodes).filter((e) => {
        return e.classList.contains("evaluator-item");
    });
};

const checkForLevelCompletion = (e) => {
    let inputs = childNodes(e);
    let checked = Array.from(inputs).filter((input) => {
        if (input.checked) {
            return input;
        }
    });
    if (inputs.length === checked.length) {
        registerLevelState(e, true);
        e.classList.add(completedClass);
    } else {
        registerLevelState(e);
        e.classList.remove(completedClass);
    }
};

const items = document.getElementsByClassName(itemClass);
const levels = document.getElementsByClassName(levelClass);

Array.from(items).forEach((item) => {
    item.addEventListener('click', registerItemState.bind(null, item));
});

Array.from(levels).forEach((item) => {
    item.addEventListener('click', checkForLevelCompletion.bind(null, item));
});

if (storedItems) {
    Array.from(Object.keys(storedItems)).forEach((element) => {
        let item = document.getElementById(element);
        if (item) {
            item.checked = storedItems[element] === "1";
        }
    });
}

if (storedLevels) {
    Array.from(Object.keys(storedLevels)).forEach((element) => {
        let item = document.getElementById(element);
        if (item) {
            storedLevels[element] === "1" ? item.classList.add(completedClass) : item.classList.remove(completedClass);
        }
    });
}

