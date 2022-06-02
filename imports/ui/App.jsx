import React from "react";

import Hello from "./Hello";
import LocaleSwitch from "./LocaleSwitch";
import LocaleProvider from "./LocaleProvider";

export const App = () => (
  <LocaleProvider>
    <h1>Welcome to Meteor!</h1>
    <LocaleSwitch />
    <Hello />
  </LocaleProvider>
);
