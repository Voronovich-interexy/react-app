/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function App() {
  return (
    <body>
      <main id="main">
        <div className="wrapper">
          <nav className="navigation">
            <div className="burger__menu">
              <input id="menu__toggle" type="checkbox" />
              <label className="burger__menu-btn" htmlFor="menu__toggle">
                <span></span>
              </label>
              <ul className="navigation__list">
                <li>
                  <a className="navigation__list-item" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="navigation__list-item" href="#">
                    Products
                  </a>
                </li>
                <li>
                  <a className="navigation__list-item" href="#">
                    Articles
                  </a>
                </li>
                <li>
                  <a className="navigation__list-item" href="#">
                    News
                  </a>
                </li>
                <li>
                  <a className="navigation__list-item" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="navigation__list-item" href="#">
                    Our team
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="content">
            <header className="header">
              <h1>HEADER</h1>
              <div className="dropdown__wrapper">
                <div className="dropdown">
                  <button autoFocus className="dropbtn">
                    Dropdown
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
                <div className="dropdown">
                  <button autoFocus className="dropbtn">
                    Dropdown
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
                <div className="dropdown">
                  <button autoFocus className="dropbtn">
                    Dropdown
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              </div>
            </header>
            <div className="content__wrapper">
              <section className="content__wrapper-article">
                <div className="canvas__chart">
                  <canvas id="line-chart"></canvas>
                </div>

                <div className="search">
                  <input
                    autoComplete="off"
                    id="search"
                    type="text"
                    className="input"
                    placeholder="search..."
                  />
                  <ul id="match-list"></ul>
                  <article className="article article-api"></article>
                </div>
                <article className="article article-chars"></article>

                <article className="article">
                  <b>CSS ANIMATION</b>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem at
                  mollitia explicabo vero rem asperiores dolorum debitis eum ipsam. Animi magnam
                  voluptates officia veniam aut, odit repellat tenetur minima suscipit? Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Exercitationem at mollitia explicabo
                  vero rem asperiores dolorum debitis eum ipsam. Animi magnam voluptates officia
                  veniam aut, odit repellat tenetur minima suscipit? Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Exercitationem at mollitia explicabo vero rem
                  asperiores dolorum debitis eum ipsam. Animi magnam voluptates officia veniam aut,
                  odit repellat tenetur minima suscipit?
                  <div className="square__container">
                    <div className="running__square"></div>
                  </div>
                </article>
                <article className="article">
                  <b>REQUEST ANIMATION FRAME</b>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem at
                  mollitia explicabo vero rem asperiores dolorum debitis eum ipsam. Animi magnam
                  voluptates officia veniam aut, odit repellat tenetur minima suscipit? Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Exercitationem at mollitia explicabo
                  vero rem asperiores dolorum debitis eum ipsam. Animi magnam voluptates officia
                  veniam aut, odit repellat tenetur minima suscipit? Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Exercitationem at mollitia explicabo vero rem
                  asperiores dolorum debitis eum ipsam. Animi magnam voluptates officia veniam aut,
                  odit repellat tenetur minima suscipit?
                  <div className="square__container-frame">
                    <div className="running__square-frame"></div>
                  </div>
                </article>
                <article className="article">
                  <b>TIMEOUT ANIMATION</b>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem at
                  mollitia explicabo vero rem asperiores dolorum debitis eum ipsam. Animi magnam
                  voluptates officia veniam aut, odit repellat tenetur minima suscipit? Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Exercitationem at mollitia explicabo
                  vero rem asperiores dolorum debitis eum ipsam. Animi magnam voluptates officia
                  veniam aut, odit repellat tenetur minima suscipit? Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Exercitationem at mollitia explicabo vero rem
                  asperiores dolorum debitis eum ipsam. Animi magnam voluptates officia veniam aut,
                  odit repellat tenetur minima suscipit?
                  <div className="square__container-js">
                    <div className="running__square-js"></div>
                  </div>
                </article>
              </section>
              <aside className="aside">
                <div className="tab">
                  <input type="checkbox" id="chck1" />
                  <label className="tab-label" htmlFor="chck1">
                    Article 1
                  </label>
                  <div className="tab-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
                  </div>
                </div>
                <div className="tab">
                  <input type="checkbox" id="chck2" />
                  <label className="tab-label" htmlFor="chck2">
                    Article 2
                  </label>
                  <div className="tab-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                  </div>
                </div>
              </aside>
            </div>
            <footer className="footer">FOOTER</footer>
          </div>
        </div>
      </main>
    </body>
  );
}

export default App;
