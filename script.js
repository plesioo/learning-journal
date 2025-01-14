import { blogs } from "./data.js";

setCopyrightDate();

function setCopyrightDate() {
  document.getElementById('footer-cr').innerText = `Copyright ©${new Date().getFullYear()}`
}
