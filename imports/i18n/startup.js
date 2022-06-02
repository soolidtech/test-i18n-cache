import { i18n } from "meteor/universe:i18n";

const initI18n = async () => {
  i18n.setOptions({
    defaultLocale: "en",
  });

  await i18n.setLocale("en");
};

export default initI18n;
