const localStorageKey = "details-state";
const tagName = "details";

const storedItems = JSON.parse(localStorage.getItem(localStorageKey));

const setItem = (key, value) => {
    let items = storedItems;
    if (!items) {
        items = {};
    }
    items[key] = value;
    localStorage.setItem(localStorageKey, JSON.stringify(items));
};

const registerItemState = (item) => {
    if (item.open) {
        setItem(item.id, "close");
    } else {
        setItem(item.id, "open");
    }
};

const items = document.getElementsByTagName(tagName);

Array.from(items).forEach((item) => {
    item.addEventListener('click', registerItemState.bind(null, item));
});

if (storedItems) {
    Array.from(Object.keys(storedItems)).forEach((element) => {
        document.getElementById(element).open = storedItems[element] === "open";
    });
}

