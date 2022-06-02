import { i18n } from "meteor/universe:i18n";

import { useCallback } from "react";

import useLocale from "./useLocale";

const useTranslator = (prefix = "") => {
  const locale = useLocale();

  return useCallback(
    (key, ...args) => i18n.getTranslation(prefix, key, ...args),
    [locale]
  );
};

export default useTranslator;
