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
      });

      container.appendChild(itemBox);
    });
  }

  renderNavbar() {
    const navToggle = document.getElementById("nav-toggle");
    const navList = document.getElementById("nav-list");
    const items = navList.querySelectorAll("li");

    let currentIndex = 0;

    // Zeigt nur das Erste Element an
    items.forEach((item, index) => {
      if (index !== 0) {
        item.style.display = "none";
      }
    });

    navToggle.addEventListener("click", () => {
      // Aktuelles Element verstecken
      items[currentIndex].style.display = "none";

      // Index hochzählen
      currentIndex = (currentIndex + 1) % items.length;

      // Neues Element anzeigen
      items[currentIndex].style.display = "list-item";
    });
  }

  renderBasket(containerID) {
    const container = document.getElementById(containerID);
    container.innerHTML = "";

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

    const totalBox = Template.createTotalBox(basket);
    payBoxContainer.appendChild(totalBox);

    if (basket.length > 0) {
      this.PayButtonListener();
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

  // #region LISTENER
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
      } else {
        const index = basket.findIndex((element) => element.name === item.name);
        if (index >= 0) {
          basket.splice(index, 1);
        }
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

  mobileToggleListener() {
    const mobileToggle = document.getElementById("mobile-toggle");
    const basketWrapper = document.querySelector(".basket-wrapper");
    const basketTitle = document.querySelector(".basket-title");

    mobileToggle.addEventListener("click", () => {
      basketWrapper.classList.toggle("fullscreen");
      document.body.classList.add("no-scroll");

      // Icon erstellen
      const closeIcon = Template.createClosIcon();
      // Direkt Listener hinzufügen
      closeIcon.addEventListener("click", () => {
        document.body.classList.remove("no-scroll");
        basketWrapper.classList.remove("fullscreen");
        closeIcon.remove(); // Icon entfernen, falls gewünscht
      });

      basketTitle.appendChild(closeIcon);
    });
  }

  PayButtonListener() {
    const payButton = document.getElementById("pay-now-button");
    const overlay = document.getElementById("payment-overlay");
    const closeBtn = document.getElementById("close-overlay");

    payButton.addEventListener("click", () => {
      overlay.classList.remove("hidden");
      // Löscht basket Elemente komplett
      basket.length = 0;
      this.renderBasket("basket-list");
    });

    closeBtn.addEventListener("click", () => {
      overlay.classList.add("hidden");
    });
  }
  // #endregion
}
