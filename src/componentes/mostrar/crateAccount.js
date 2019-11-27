import React from 'react';
import Header from '../header';
import Footer from '../footer';
import SectionCreateAccount from '../section-createAccount';

function CreateAccount() {
  return (
    <div className="CreateAccount">
      <Header />
      <SectionCreateAccount />
      {/* <Links /> */}
      <Footer />
    </div>
  );
}
export default CreateAccount;
