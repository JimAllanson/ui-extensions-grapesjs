declare global {
  interface Window {
    on: Function;
    off: Function;
  }
  interface Node {
    on : Function,
    off: Function
  }
  interface NodeList {
    __proto__ : Object,
    on : Function
    addEventListener : Function
  }
}
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
}
Node.prototype.off = window.off = function (name, fn) {
  this.removeEventListener(name, fn, false);
}
NodeList.prototype.__proto__ = Array.prototype;

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem, i) {
    elem.on(name, fn);
  });
}

export {
  $,
  $$
};