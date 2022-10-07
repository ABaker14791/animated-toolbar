const logo = document.getElementById("logo");
const tools = document.getElementById("tools");
const toolbar = document.getElementById("toolbar");

// Tools
const square = document.getElementById("tool-sq");
const line = document.getElementById("tool-line");
const arrow = document.getElementById("tool-arr");
const circle = document.getElementById("tool-cir");
const triangle = document.getElementById("tool-tri");

function openToolbar() {
  logo.addEventListener("click", () => {
    tools.classList.toggle("openToolbar");
    logo.classList.toggle("addMargin");
    toolbar.classList.toggle("addPadding");
    toolbar.classList.remove(
      "toolbar-sq",
      "toolbar-line",
      "toolbar-arr",
      "toolbar-cir",
      "toolbar-tri"
    );
  });
}
openToolbar();

square.addEventListener("click", () => {
  toolbar.classList.remove(
    "toolbar-line",
    "toolbar-arr",
    "toolbar-cir",
    "toolbar-tri"
  );
  toolbar.classList.add("toolbar-sq");
});

line.addEventListener("click", () => {
  toolbar.classList.remove(
    "toolbar-sq",
    "toolbar-arr",
    "toolbar-cir",
    "toolbar-tri"
  );
  toolbar.classList.add("toolbar-line");
});

arrow.addEventListener("click", () => {
  toolbar.classList.remove(
    "toolbar-sq",
    "toolbar-line",
    "toolbar-cir",
    "toolbar-tri"
  );
  toolbar.classList.add("toolbar-arr");
});

circle.addEventListener("click", () => {
  toolbar.classList.remove(
    "toolbar-sq",
    "toolbar-line",
    "toolbar-arr",
    "toolbar-tri"
  );
  toolbar.classList.add("toolbar-cir");
});

triangle.addEventListener("click", () => {
  toolbar.classList.remove(
    "toolbar-sq",
    "toolbar-line",
    "toolbar-arr",
    "toolbar-cir"
  );
  toolbar.classList.add("toolbar-tri");
});
