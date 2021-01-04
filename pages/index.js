import * as React from "react";

import { Logo, P, Card, CardWrapper, Wrapper } from "./components";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: fetch("http://worldclockapi.com/api/json/est/now"),
      page: 0,
    };
  }

  componentDidMount() {
    fetch("http://worldclockapi.com/api/json/est/now")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  firstCard() {
    return alert("hi!");
  }

  secondCard() {
    return alert("also works!");
  }
  render() {
    if (this.state.page == 0) {
      return (
        <Wrapper>
          <Logo>mateo.</Logo>
          <CardWrapper type="full">
            <Card type="long">
              <P>Date</P>
            </Card>
            <Card type="long" onPress={this.firstCard}>
              <P>Other button</P>
            </Card>
            <Card type="long" onPress={this.firstCard}>
              <P>Today is</P>
            </Card>
          </CardWrapper>
          <CardWrapper type="full">
            <Card type="long" onPress={this.secondCard}>
              <P>One more button</P>
            </Card>
          </CardWrapper>
        </Wrapper>
      );
    }
    return null;
  }
}
