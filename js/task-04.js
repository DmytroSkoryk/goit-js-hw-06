const refs = {
    addBtn: document.querySelector('#counter button[data-action="increment"]'),
    removeBtn: document.querySelector('#counter button[data-action="decrement"]'),
    reslt: document.querySelector('#value'),
};
let counterValue = 0;

function onBtnAdd() {
    counterValue += 1;
    refs.reslt.textContent = counterValue;
}

function onBtnRemove() {
    counterValue -= 1;
    refs.reslt.textContent = counterValue;
}

refs.addBtn.addEventListener("click", onBtnAdd);
refs.removeBtn.addEventListener("click", onBtnRemove);