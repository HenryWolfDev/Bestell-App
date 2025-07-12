import { basket } from "./data.js";
import { Template } from "./templates.js";

export class RenderItems {
  constructor(menuItems) {
    this.menuItems = menuItems;
  }

  // #region RENDER-METHODS
  renderCategory(categoryName, containerID) {
    const container = document.getElementById(containerID);
    const items = this.menuItems.filter(
      // filtert, ob der eingegebene string im parameter derselbe ist wie array.category
      (item) => item.category === categoryName
    );

    items.forEach((item) => {
      const itemBox = Template.createItemBox(item);

      itemBox.addEventListener("click", () => {
        this.addToBasket(item);
        this.renderBasket("basket-list");
        console.log("Basket:", basket);
      });

      container.appendChild(itemBox);
    });
  }

  renderBasket(containerID) {
    const container = document.getElementById(containerID);
    container.innerHTML = ""; // vorher leeren

    basket.forEach((item) => {
      const itemLine = Template.createBasketItem(item);

      this.allBasketItemListener(itemLine, item);

      container.appendChild(itemLine);
    });
    this.renderTotal();
  }

  renderTotal() {
    const payBoxContainer = document.getElementById("basket-total-list");
    payBoxContainer.innerHTML = "";

    if (basket.length > 0) {
      const totalBox = Template.createTotalBox(basket);
      payBoxContainer.appendChild(totalBox);
    }
  }
  // #endregion RENDER-METHODS

  addToBasket(item) {
    const existingItem = basket.find((element) => element.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      basket.push({
        name: item.name,
        price: item.price,
        quantity: 1,
      });
    }
  }

  // #region LISTENER-FOR-BASKET-ICONS
  addToBasketElementListener(icon, item) {
    icon.addEventListener("click", () => {
      const existingItem = basket.find((element) => element.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1;
      }

      this.renderBasket("basket-list");
    });
  }

  removeFromBasketListener(icon, item) {
    icon.addEventListener("click", () => {
      const existingItem = basket.find((element) => element.name === item.name);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }

      this.renderBasket("basket-list");
    });
  }

  deleteFromBasketListener(icon, item) {
    icon.addEventListener("click", () => {
      const index = basket.findIndex((element) => element.name === item.name);
      if (index >= 0) {
        basket.splice(index, 1);
      }

      this.renderBasket("basket-list");
    });
  }

  allBasketItemListener(itemLine, item) {
    const addIcon = itemLine.querySelector(".add-to-basket");
    if (addIcon) {
      this.addToBasketElementListener(addIcon, item);
    }

    const removeIcon = itemLine.querySelector(".remove-from-basket");
    if (removeIcon) {
      this.removeFromBasketListener(removeIcon, item);
    }

    const deleteIcon = itemLine.querySelector(".delete-from-basket");
    if (deleteIcon) {
      this.deleteFromBasketListener(deleteIcon, item);
    }
  }
  // #endregion LISTENER-FOR-BASKET-ICONS
}
