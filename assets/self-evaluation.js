const storedItems = JSON.parse(localStorage.getItem("self-evaluator"));

const setItem = (key, value) => {
    let items = storedItems;
    if (!items) {
        items = {};
    }
    items[key] = value;
    localStorage.setItem("self-evaluator", JSON.stringify(items));
};

const registerItemState = (e) => {
    if (e.checked) {
        setItem(e.id, "1");
    } else {
        setItem(e.id, "0");
    }
};

const items = document.getElementsByClassName("evaluator-item");

Array.from(items).forEach((item) => {
    item.addEventListener('click', registerItemState.bind(null, item));
});

if (storedItems) {
    Array.from(Object.keys(storedItems)).forEach((element) => {
        document.getElementById(element).checked = storedItems[element] === "1";
    });
}

