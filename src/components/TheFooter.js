import { Component } from "../util/module";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
            <div>
                <a href="https://github.com/NohWookJin">
                    Github Repository
                </a>
            </div>
            <div>
                <a href="https://github.com/NohWookJin">
                    ${new Date().getFullYear()}
                    NohWookJin
                </a>
            </div>
        `;
  }
}
