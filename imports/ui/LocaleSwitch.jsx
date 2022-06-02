import React from "react";

import { i18n } from "meteor/universe:i18n";

import useLocale from "./useLocale";

const LocaleSwitch = () => {
  const onChange = (ev) => {
    // i18n.setLocale(ev.target.value, {
    //   noDownload: false,
    //   silent: false,
    //   async: false,
    //   fresh: false,
    // });
    i18n.setLocale(ev.target.value);
  };

  const locale = useLocale();

  return (
    <select value={locale} id="locale-switch" onChange={onChange}>
      <option value="fr">French</option>
      <option value="en">English</option>
    </select>
  );
};

export default LocaleSwitch;
