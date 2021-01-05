import * as React from "react";

import { Logo, P, Card, CardWrapper, Wrapper } from "./components";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dow: null,
      year: null,
      month: null,
      day: null,
      hour: null,
      minute: null,
      page: 0,
    };
  }

  componentDidMount() {
    const { DateTime } = require("luxon");
    const data = DateTime.local().c;

    console.log(data);

    this.setState({
      year: data.year,
      month: data.month,
      day: data.day,
      hour: data.hour,
      minute: data.minute,
    });

    //  fetch("http://worldtimeapi.org/api/timezone/EST")
    //    .then((response) => response.json())
    //    .then((data) => {
    //      console.log(data);
    //      var {DateTime } = require('luxon');
    //      console.log(DateTime.local())
    //      this.setState({
    //        dow: data.day_of_week,
    //        year: null,
    //        month: null,
    //        day: data.day_of_year,
    //        hour: null,
    //        minute: null,
    //      });
    //    });
    //this.setState({date: data}))
  }

  firstCard() {
    return alert("hi!");
  }

  secondCard() {
    return alert("also works!");
  }
  render() {
    const data = this.state;
    const todayDate = data.month + "/" + data.day + "/" + data.year;

    if (data.page == 0) {
      return (
        <Wrapper>
          <Logo>mateo.</Logo>
          <CardWrapper type="full">
            <Card type="long">
              <P>
                {todayDate}
              </P>
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
