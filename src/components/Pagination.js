import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    const { prevPage, nextPage, buttonState } = this.props;
    const { prev, next } = buttonState;

    return (
      <div className="pagination">
        <input type="button" value="Prev" onClick={prevPage} disabled={!prev} />{" "}
        <input type="button" value="Next" onClick={nextPage} disabled={!next} />
      </div>
    );
  }
}
