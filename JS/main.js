const form = document.querySelector("form");
const money_input = document.querySelector("[type='number']");

const amount_of_needs = document.querySelector(".amount_of_needs");
const savings_amount = document.querySelector(".savings_amount");
const amount_to_invest = document.querySelector(".amount_to_invest");
const amount_of_luxuries = document.querySelector(".amount_of_luxuries");

form.onsubmit = function (event) {
    event.preventDefault();
    if (money_input.value) {
        amount_of_needs.textContent = `${Number(money_input.value) * 0.5} د.أ`;
        savings_amount.textContent = `${Number(money_input.value) * 0.2} د.أ`;
        amount_to_invest.textContent = `${Number(money_input.value) * 0.2} د.أ`;
        amount_of_luxuries.textContent = `${Number(money_input.value) * 0.1} د.أ`;

        money_input.value= ""
    }
}