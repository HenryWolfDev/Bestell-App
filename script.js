import { menuItems, basket } from "./js/data.js";
import { RenderItems } from "./js/menuManager.js";

const renderItems = new RenderItems(menuItems);

// Hier wird gewählt welche category in welchen container kommt
renderItems.renderCategory("Hauptgericht", "main-courses");
renderItems.renderCategory("Beilagen", "side-dishes");
renderItems.renderCategory("Dessert", "desserts");
renderItems.renderCategory("Getränke", "drinks");

renderItems.renderNavbar();
renderItems.mobileToggleListener();
renderItems.mobileToggleCloseListener();
