import { menuItems } from "./js/data.js";
import { RenderItems } from "./js/render.js";

const renderItems = new RenderItems(menuItems);

// Hier einfach nur die Kategorie wählen die gerendert werden soll und den container auswählen
renderItems.renderCategory("Hauptgericht", "main-courses");
renderItems.renderCategory("Beilagen", "side-dishes");
renderItems.renderCategory("Dessert", "desserts");
renderItems.renderCategory("Getränke", "drinks");
