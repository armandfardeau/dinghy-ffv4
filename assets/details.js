const detailsLocalStorageKey = "details-state";
const tagName = "details";

const detailsStoredItems = JSON.parse(localStorage.getItem(detailsLocalStorageKey));

const setDetailsItem = (key, value) => {
    let items = detailsStoredItems;
    if (!items) {
        items = {};
    }
    items[key] = value;
    localStorage.setItem(detailsLocalStorageKey, JSON.stringify(items));
};

const registerDetailsItemState = (item) => {
    if (item.open) {
        setDetailsItem(item.id, "close");
    } else {
        setDetailsItem(item.id, "open");
    }
};

const detailsItems = document.getElementsByTagName(tagName);

Array.from(detailsItems).forEach((item) => {
    item.addEventListener('click', registerDetailsItemState.bind(null, item));
});

if (detailsStoredItems) {
    Array.from(Object.keys(detailsStoredItems)).forEach((element) => {
        let item = document.getElementById(element);
        if (item) {
            item.open = detailsStoredItems[element] === "open";
        }
    });
}

