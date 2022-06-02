import React from "react";

import useTranslator from "./useTranslator";

const Hello = () => {
  const t = useTranslator();

  return <p>{t("Test.helloWorld")}</p>;
};

export default Hello;
