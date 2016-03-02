import React from 'react';

const Layout = ({content = () => null }) => (
  <div>
    <header>
        <h1>Impossible List</h1>
    </header>

    <div>
        {content()}
    </div>
    
  </div>
);

export default Layout;