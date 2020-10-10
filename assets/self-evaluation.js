const localStorageKey = "self-evaluator";
const itemClass = "evaluator-item";
const storedItems = JSON.parse(localStorage.getItem(localStorageKey));

const setItem = (key, value) => {
    let items = storedItems;
    if (!items) {
        items = {};
    }
    items[key] = value;
    localStorage.setItem(localStorageKey, JSON.stringify(items));
};

const registerItemState = (e) => {
    if (e.checked) {
        setItem(e.id, "1");
    } else {
        setItem(e.id, "0");
    }
};

const items = document.getElementsByClassName(itemClass);

Array.from(items).forEach((item) => {
    item.addEventListener('click', registerItemState.bind(null, item));
});

if (storedItems) {
    Array.from(Object.keys(storedItems)).forEach((element) => {
        document.getElementById(element).checked = storedItems[element] === "1";
    });
}

