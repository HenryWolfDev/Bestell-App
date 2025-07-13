import { CalcUtility } from "./calcUtitlity.js";

export class Template {
  static createItemBox(item) {
    const itemBox = document.createElement("div");
    itemBox.classList.add("item-box");

    const title = document.createElement("h3");
    title.classList.add("item-title");
    title.textContent = `${item.name}`;

    const desc = document.createElement("span");
    desc.classList.add("item-desc");
    desc.textContent = `${item.description}`;

    const price = document.createElement("span");
    price.classList.add("item-price");
    price.textContent = `${item.price.toFixed(2).replace(".", ",")}€`;

    const icon = Template.createAddIconItemBox();

    itemBox.appendChild(icon);
    itemBox.appendChild(title);
    itemBox.appendChild(desc);
    itemBox.appendChild(price);

    return itemBox;
  }

  static createBasketItem(item) {
    const itemLine = document.createElement("div");
    itemLine.classList.add("basket-item");

    const name = document.createElement("span");
    name.textContent = `${item.name}`;

    const changeBox = document.createElement("div");
    changeBox.classList.add("change-box");

    const moveBox = document.createElement("div");

    const add = Template.createAddIcon();
    const remove = Template.createRemoveIcon();
    const trash = Template.createTrashIcon();

    const quantity = document.createElement("span");
    quantity.textContent = `${item.quantity}x`;

    moveBox.appendChild(trash);
    moveBox.appendChild(remove);
    moveBox.appendChild(quantity);
    moveBox.appendChild(add);

    const sum = document.createElement("span");
    sum.innerHTML = CalcUtility.calcItemSum(item.price, item.quantity);

    changeBox.appendChild(moveBox);
    // changeBox.appendChild(trash);
    changeBox.appendChild(sum);

    itemLine.appendChild(name);
    itemLine.appendChild(changeBox);

    return itemLine;
  }

  static createTotalBox(basket) {
    const container = document.createElement("div");
    container.id = "basket-total";

    // Zwischensumme
    const subtotalBox = document.createElement("div");
    const subtotalTitle = document.createElement("span");
    subtotalTitle.textContent = `Zwischensumme`;
    const subtotal = document.createElement("span");
    subtotal.innerHTML = CalcUtility.calcItemTotal(basket);

    subtotalBox.appendChild(subtotalTitle);
    subtotalBox.appendChild(subtotal);

    // Lieferkosten
    const deliveryBox = document.createElement("div");
    const deliveryTitle = document.createElement("span");
    deliveryTitle.textContent = `Lieferkosten`;
    const deliveryPrice = document.createElement("span");
    deliveryPrice.textContent = `5,00€`;

    deliveryBox.appendChild(deliveryTitle);
    deliveryBox.appendChild(deliveryPrice);

    // Gesamt
    const totalBox = document.createElement("div");
    totalBox.classList.add("total-box");
    const totalTitle = document.createElement("span");

    totalTitle.textContent = `Gesamt`;
    const fullPrice = document.createElement("span");
    fullPrice.textContent = CalcUtility.calcTotalEverything(basket);

    totalBox.appendChild(totalTitle);
    totalBox.appendChild(fullPrice);

    // Bezahl-Button
    const payNowBox = document.createElement("div");
    payNowBox.classList.add("pay-button-box");

    const payButton = document.createElement("button");
    payButton.id = "pay-now-button";
    payButton.textContent = "Jetzt bezahlen";

    const cardIcon = Template.createCardIcon();
    cardIcon.classList.add("card-icon");

    payButton.appendChild(cardIcon);

    payNowBox.appendChild(payButton);

    container.appendChild(subtotalBox);
    container.appendChild(deliveryBox);
    container.appendChild(totalBox);
    container.appendChild(payNowBox);

    return container;
  }

  static createAddIconItemBox() {
    const icon = document.createElement("div");
    icon.classList.add("item-icon");
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112"/></svg>`;
    return icon;
  }

  static createAddIcon() {
    const icon = document.createElement("span");
    icon.classList.add("basket-icon", "add-to-basket");
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112"/></svg>`;
    return icon;
  }

  static createRemoveIcon() {
    const icon = document.createElement("span");
    icon.classList.add("basket-icon", "remove-from-basket");
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"/></svg>`;
    return icon;
  }

  static createTrashIcon() {
    const icon = document.createElement("span");
    icon.classList.add("basket-icon", "delete-from-basket");
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M432 144l-28.67 275.74A32 32 0 01371.55 448H140.46a32 32 0 01-31.78-28.26L80 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><rect x="32" y="64" width="448" height="80" rx="16" ry="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M312 240L200 352M312 352L200 240"/></svg>`;
    return icon;
  }

  static createCardIcon() {
    const card = document.createElement("span");
    card.classList.add("card-icon");
    card.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><rect x="48" y="96" width="416" height="320" rx="56" ry="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="60" d="M48 192h416M128 300h48v20h-48z"/></svg>`;
    return card;
  }
}
