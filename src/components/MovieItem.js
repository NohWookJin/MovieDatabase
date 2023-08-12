import { Component } from "../util/module";

export default class MovieItem extends Component {
  // MovieList의 10개 movie로부터, 각각의 영화에 대한 정보를 받아올 예정
  constructor(props) {
    super({
      props,
      tagName: "a",
    });
  }
  render() {
    // Component에 저장되어 있는 movie 배열
    const { movie } = this.props;

    // a 태그(this.el)의 hreft 속성 생성, 두 번째 인수는 경로
    this.el.setAttribute("href", `#/movie?id=${movie.imdbID}`);
    this.el.classList.add("movie");
    this.el.style.backgroundImage = `url(${movie.Poster})`;
    this.el.innerHTML = /* html */ `
        <div class="info">
            <div class="year">
                ${movie.Year}
            </div>
            <div class="title">
                ${movie.Title}
            </div>
        </div>
    `;
  }
}
