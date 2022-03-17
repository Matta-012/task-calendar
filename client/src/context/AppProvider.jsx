import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import PropTypes from "prop-types";

export default function AppProvider({ children }) {
  return (
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
