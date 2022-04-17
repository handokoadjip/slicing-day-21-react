import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import {
  Navbar,
  SectionContent1,
  SectionContent2,
  SectionContent3,
  SectionAbout,
  Footer,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Designspiration | Christina Michelaitsch";
  }

  render() {
    return (
      <>
        <Header>
          <Navbar />
        </Header>
        <Main>
          <SectionContent1 />
          <SectionContent2 />
          <SectionContent3 />
          <SectionAbout />
        </Main>
        <Footer />
      </>
    );
  }
}

export default index;
