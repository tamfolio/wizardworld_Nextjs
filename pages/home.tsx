import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div className="Homepage">
      <h1>Welcome to Wizard world</h1>
      <div className="container">
        <div className="box">
          <Link href="./elixir">
            <h2>Elixirs</h2>
          </Link>
        </div>
        <div className="box">
          <Link href='./spells'>
            <h2>Spells</h2>
          </Link>
        </div>
        <div className="box">
            <Link href='/wizards'>
            <h2>Wizards</h2>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
