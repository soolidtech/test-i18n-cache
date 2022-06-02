import { i18n } from "meteor/universe:i18n";

import React, { useState, useEffect } from "react";

import LocaleContext from "./LocaleContext";

const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(i18n.getLocale());

  useEffect(() => {
    i18n.onChangeLocale(setLocale);
    return () => {
      i18n.offChangeLocale(setLocale);
    };
  }, [setLocale]);

  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
};

export default LocaleProvider;
