// not working till now

import React, { Component } from "react";

export default class StickyHeader extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const y = window.scrollY;
    if (!this.props.containerTop) return;
    this.setState({
      visible: y > this.props.containerTop
    });
  }

  render() {
    const className = this.state.visible
      ? "stickyHeader isStuck"
      : "stickyHeader";
    return (
      <header className={className}>
        <div className="header-container">
          <h1>Stickey thundery Rescue</h1>
        </div>
      </header>
    );
  }
}
