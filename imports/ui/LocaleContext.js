import { i18n } from "meteor/universe:i18n";
import { createContext } from "react";

const LocaleContext = createContext(i18n.getLocale());

export default LocaleContext;
