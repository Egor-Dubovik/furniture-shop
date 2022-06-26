// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import { removeClasses } from "./functions.js";

window.onload = () => {
  const documentActions = (e) => {
    const targetElement = e.target;

    if (window.innerWidth > 768 && isMobile.any()) {
      if (targetElement.classList.contains("menu__arrow")) {
        targetElement.closest(".menu__item").classList.toggle("menu__item_hover");
      }

      const itemsHover = document.querySelectorAll(".menu__item.menu__item_hover");
      if (!targetElement.closest(".menu__item") && itemsHover.length > 0) {
        removeClasses(itemsHover, "menu__item_hover");
      }
    }
  }

  document.addEventListener("click", documentActions);
}