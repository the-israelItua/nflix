import React, { Component } from "react";
import Header from "../components/Header";
import TabsComp from "../components/TabsComp";
import Footer from "../components/Footer";

class IndexPage extends Component {
  render() {
    return (
      <>
        <Header />
        <TabsComp />
        <Footer />
      </>
    );
  }
}

export default IndexPage;
