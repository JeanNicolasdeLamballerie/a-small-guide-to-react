import React from 'react';
import Links from './router/Links';
function AppBase () {
  return (
    // This is what's displayed automatically in the [outlet] when the route is equal to "/". This is basically our homepage.
    <Links />

  );
}

export default AppBase;
