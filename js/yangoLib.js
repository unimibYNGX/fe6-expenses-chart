function add(name, id) {
  document.getElementById(id).classList.add(name);
}

function remove(name, id) {
  document.getElementById(id).classList.remove(name);
}

function show(id) {
  remove("hide", id);
}

function hide(id) {
  add("hide", id);
}

function set(id, attr, value) {
  var el = document.getElementById(id);
  el.style.setProperty(attr, value);
}

function setByClass(class_id, attr, value) {
  var els = document.getElementsByClassName(class_id);
  for (let i = 0; i < els.length; i++) {
    const element = els[i];
    element.style.setProperty(attr, value);
  }
}

function checkSize(request, query) {
  var x = window.matchMedia("(" + query + ")");
  switch (request) {
    case "device":
      x.matches ? mobile() : desktop();
      break;
    case "font-size":
      x.matches ? small() : big();
      break;
    default:
      console.log("request not recognized");
      break;
  }
}

function mobile() {
  set("card-top", "width", "80vw");
  set("card-bottom", "width", "80vw");
}

function desktop() {
  set("card-top", "width", "350px");
  set("card-bottom", "width", "350px");
}

window.addEventListener("resize", function (event) {
  checkSize("device", "max-width: 475px");
});
checkSize("device", "max-width: 475px");
