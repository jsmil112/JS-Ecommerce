import React from 'react';

export default function Sidebar({ open, toggleOpen }) {
  //   return (
  //     <div id="sideBarRoot">
  //       <div id="sideBarContent"></div>
  //     </div>
  //   );

  const adminPower = ['add', 'edit', 'select', 'disable', 'alter power'];

  return (
    <div id="sideBarRoot">
      <div id="sideBarButton" onClick={toggleOpen}>
        X
      </div>
      {/* <div id="sideBarButtonArea">?ADMIN?</div> */}

      <ul>
        {adminPower.map(p => (
          <li>{`${p}`}</li>
        ))}
      </ul>
    </div>
  );
}
