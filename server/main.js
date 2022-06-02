import { Meteor } from "meteor/meteor";

import "../imports/i18n/en/Test.i18n.yml";
import "../imports/i18n/fr/Test.i18n.yml";

import initI18n from "../imports/i18n/startup";

Meteor.startup(async () => {
  await initI18n();
});
