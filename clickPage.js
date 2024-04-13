document.addEventListener("DOMContentLoaded", function () {
  const productsClick = document.querySelector(".products_click");
  const body = document.querySelector("body");
  let overlay = null;

  productsClick.addEventListener("click", function () {
    if (!overlay) {
      // Create overlay element if it doesn't exist
      overlay = document.createElement("div");
      overlay.classList.add("overlay");

      overlay.style.position = "fixed";
      overlay.style.top = "4.4rem";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.zIndex = "9999";

      fetch("clickPage.html")
        .then((response) => response.text())
        .then((data) => {
          overlay.innerHTML = data;
          body.appendChild(overlay);
        })
        .catch((error) =>
          console.error("Error fetching clickPage.html:", error)
        );
    } else {
      overlay.remove();
      overlay = null;
    }
    return false;
  });
  body.addEventListener("click", function (event) {
    if (event.target.classList.contains("overlay")) {
      overlay.remove();
      overlay = null;
    }
  });
});
