import React from 'react';

function FooterComp() {
  return (
    <div className="container h-[200px] bg-gray-300 p-5 mx-auto border">
      <div className="flex gap-3">
        <p>Travly @2025</p>
        <p>|</p>
        <ul className="flex gap-3">
          <li>About</li>
          <li>|</li>
          <li>FAQ</li>
          <li>|</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  );
}

export default FooterComp;
