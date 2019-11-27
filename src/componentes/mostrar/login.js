import React from 'react';
import Header from '../header';
import Footer from '../footer';
import SectionLogin from '../section-login';

function Login() {
  return (
    <div className="Login">
      <Header />
      <SectionLogin />
      {/* <Links /> */}
      <Footer />
    </div>
  );
}

export default Login;
