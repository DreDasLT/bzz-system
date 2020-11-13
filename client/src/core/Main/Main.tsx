import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from '../../views/Home/Home';
import Map from '../../views/Map/Map';
import NotFound from '../../views/NotFound/NotFound';

const StyledApp = styled.div`
  background-color: black;
  font-size: 32px;
  color: white;
`;

const Main = () => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isOpenHeader, setIsOpenHeader] = useState(false);
  return (
    <>
      <Router>
        <div className='bg-gray-100 font-family-karla flex'>
          <aside className='relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl'>
            <div className='p-6'>
              <a
                href='index.html'
                className='text-white text-3xl font-semibold uppercase hover:text-gray-300'
              >
                Admin
              </a>
              <button className='w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center'>
                <i className='fas fa-plus mr-3'></i> New Report
              </button>
            </div>
            <nav className='text-white text-base font-semibold pt-3'>
              <Link
                to='/'
                className='flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item'
              >
                <i className='fas fa-tachometer-alt mr-3'></i>
                Dashboard
              </Link>

              <Link
                to='/map'
                className='flex items-center active-nav-link text-white py-4 pl-6 nav-item'
              >
                <i className='fas fa-tachometer-alt mr-3'></i>
                Map
              </Link>
            </nav>
            <a
              href='#'
              className='absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4'
            >
              <i className='fas fa-arrow-circle-up mr-3'></i>
              Upgrade to Pro!
            </a>
          </aside>

          <div className='relative w-full flex flex-col h-screen overflow-y-hidden'>
            <header className='w-full flex items-center bg-white py-2 px-6 hidden sm:flex'>
              <div className='w-1/2'></div>
              <div className='relative w-1/2 flex justify-end'>
                <button
                  onClick={() => {
                    setIsOpenProfile(!isOpenProfile);
                    console.log(!isOpenProfile);
                  }}
                  className='realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none'
                >
                  <img src='https://source.unsplash.com/uJ8LNVCBjFQ/400x400' />
                </button>
                {isOpenProfile && (
                  <div
                    x-show='isOpen'
                    className='absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16'
                  >
                    <a
                      href='#'
                      className='block px-4 py-2 account-link hover:text-white'
                    >
                      Account
                    </a>
                    <a
                      href='#'
                      className='block px-4 py-2 account-link hover:text-white'
                    >
                      Support
                    </a>
                    <a
                      href='#'
                      className='block px-4 py-2 account-link hover:text-white'
                    >
                      Sign Out
                    </a>
                  </div>
                )}
              </div>
            </header>

            <header
              className='w-full bg-sidebar py-5 px-6 sm:hidden'
            >
              <div className='flex items-center justify-between'>
                <a
                  href='index.html'
                  className='text-white text-3xl font-semibold uppercase hover:text-gray-300'
                >
                  Admin
                </a>
                <button
                  onClick={() => {
                    setIsOpenHeader(!isOpenHeader)
                    console.log(isOpenHeader)
                  }}
                  className='text-white text-3xl focus:outline-none'
                >
                  {isOpenHeader ? 
                    (<i className='fas fa-times'></i>) :
                    (<i className='fas fa-bars'></i>)}
                </button>
              </div>

              <nav className={isOpenHeader ? 'flex flex-col pt-4': 'hidden'}>
                <Link
                  to='/'
                  className='flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
                >
                  <i className='fas fa-tachometer-alt mr-3'></i>
                  Dashboard
                </Link>
                <Link
                  to='/map'
                  className='flex items-center active-nav-link text-white py-2 pl-4 nav-item'
                >
                  <i className='fas fa-sticky-note mr-3'></i>
                  Blank Page
                </Link>
                <button className='w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center'>
                  <i className='fas fa-arrow-circle-up mr-3'></i> Upgrade to
                  Pro!
                </button>
                <button className='w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center'>
                  <i className='fas fa-plus mr-3'></i> New Report
                </button>
              </nav>
            </header>

            <div className='w-full h-screen overflow-x-hidden border-t flex flex-col'>
              <main className='w-full flex-grow p-6'>
                <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route>
                  <Route path='/map'>
                    <Map />
                  </Route>
                  <Route component={NotFound} />
                </Switch>
              </main>

              <footer className='w-full bg-white text-right p-4'>
                Built by{' '}
                <a
                  target='_blank'
                  className='underline'
                >
                  Vilius Antanavičius
                </a>
                .
              </footer>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Main;
