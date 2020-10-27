import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./tabs/TabDoor";
import TabDevices from "./tabs/TabDevices";
import TabPrice from "./tabs/TabPrice";
import TabDoorContent from "./TabDoorContent";
import TabDevicesContent from "./TabDevicesContent";
import TabPriceContent from "./TabPriceContent";

class TabsComp extends Component {
  state = { tabIndex: 0 };

  render() {
    return (
      <Tabs
        className="tabs"
        selectedIndex={this.state.tabIndex}
        onSelect={(tabIndex) => this.setState({ tabIndex })}
      >
        <TabList className="tabs-nav-container">
          <Tab className={`tab ${this.state.tabIndex === 0 ? "active" : null}`}>
            <TabDoor />
            <p className="tab-text-lg">
              <strong>
                No commitments <br /> Cancel Online at anytime
              </strong>
            </p>
            <p className="tab-text-sm">
              <strong>Cancel</strong>
            </p>
          </Tab>
          <Tab className={`tab ${this.state.tabIndex === 1 ? "active" : null}`}>
            <TabDevices />
            <p className="tab-text-lg">
              <strong>Watch anywhere</strong>
            </p>
            <p className="tab-text-sm">
              <strong>Devices</strong>
            </p>
          </Tab>
          <Tab className={`tab ${this.state.tabIndex === 2 ? "active" : null}`}>
            <TabPrice />
            <p className="tab-text-lg">
              <strong>Pick Your Price</strong>
            </p>
            <p className="tab-text-sm">
              <strong>Prices</strong>
            </p>
          </Tab>
        </TabList>
        <TabPanel>
          <TabDoorContent />
        </TabPanel>
        <TabPanel>
          <TabDevicesContent />
        </TabPanel>
        <TabPanel>
          <TabPriceContent />
        </TabPanel>
      </Tabs>
    );
  }
}

export default TabsComp;
