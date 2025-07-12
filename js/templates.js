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
    price.textContent = `${item.price.toFixed(2)}€`;

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

    const add = Template.createAddIcon();
    const remove = Template.createRemoveIcon();
    const trash = Template.createTrashIcon();

    const quantity = document.createElement("span");
    quantity.textContent = `${item.quantity}x`;

    const sum = document.createElement("span");
    sum.innerHTML = CalcUtility.calcItemSum(item.price, item.quantity);

    changeBox.appendChild(remove);
    changeBox.appendChild(quantity);
    changeBox.appendChild(add);
    changeBox.appendChild(sum);
    changeBox.appendChild(trash);

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
    deliveryPrice.textContent = `5.00€`;

    deliveryBox.appendChild(deliveryTitle);
    deliveryBox.appendChild(deliveryPrice);

    // Gesamt
    const totalBox = document.createElement("div");
    const totalTitle = document.createElement("span");
    totalTitle.textContent = `Gesamt`;
    const fullPrice = document.createElement("span");
    fullPrice.textContent = CalcUtility.calcTotalEverything(basket);

    totalBox.appendChild(totalTitle);
    totalBox.appendChild(fullPrice);

    container.appendChild(subtotalBox);
    container.appendChild(deliveryBox);
    container.appendChild(totalBox);

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
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>`;
    return icon;
  }
}
