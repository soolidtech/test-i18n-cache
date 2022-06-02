import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { App } from "/imports/ui/App";

import initI18n from "../imports/i18n/startup";

Meteor.startup(async () => {
  await initI18n();
  render(<App />, document.getElementById("react-target"));
});
