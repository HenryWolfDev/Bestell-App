export class RenderItems {
  constructor(menuItems) {
    this.menuItems = menuItems;
  }

  renderCategory(categoryName, containerID) {
    const container = document.getElementById(containerID);
    const items = this.menuItems.filter(
      // filtert, ob der eingegebene string im parameter derselbe ist wie in array.category
      (item) => item.category === categoryName
    );

    items.forEach((item) => {
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

      const icon = document.createElement("div");
      icon.classList.add("item-icon");
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112"/></svg>`;

      itemBox.appendChild(icon);
      itemBox.appendChild(title);
      itemBox.appendChild(desc);
      itemBox.appendChild(price);

      container.appendChild(itemBox);
    });
  }
}
