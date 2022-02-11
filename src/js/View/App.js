import { imagePath } from "../config";

class App {
  constructor(parentEl, errorMsg = "Something get wrong") {
    (this.parentEl = parentEl), (this.errorMsg = errorMsg);
  }

  errorMsg() {
    const markup = `
    <div class="Error">
        <p>${this.errorMsg}</p>
    </div>`;

    this.parentEl.innerHTML = ``;
    this.parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner() {
    const markup = `
    <div class="spinner">
    <svg>
       <use href="${imagePath}"></use>
    </svg>
    </div>`;
    this.parentEl.innerHTML = ``;
    this.parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  render() {}
}

export default new App();
