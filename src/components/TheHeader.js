import { Component } from "../util/module";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          {
            name: "Search",
            href: "#/",
          },
          {
            name: "Movie",
            href: "#/movie?id=tt9603212",
          },
          {
            name: "About",
            href: "#/about",
          },
        ],
      },
    });
    // 페이지 이동시 이벤트(콜백함수 실행)
    window.addEventListener("popstate", () => {
      this.render();
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
        <a href="#/" class="logo"><span>OMDbAPI</span>.COM</a>
        <nav>
            <ul>
                ${this.state.menus
                  .map((menu) => {
                    const href = menu.href.split("?")[0]; // #/movie?id=tt9603212, 요거 때문에 split
                    const hash = location.hash.split("?")[0]; // 쿼리스트링 제거

                    const isActive = href === hash; // true, false => isActive

                    return /* html */ `
                        <li>
                            <a 
                                class="${isActive ? "active" : ""}"
                                href="${menu.href}">
                                ${menu.name}
                            </a>
                        </li>
                    `;
                  })
                  .join("")}
            </ul>
        </nav>
        <a href="#/about" class="user">
            <img src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Image.png" alt="User">
        </a>
    `;
  }
}
