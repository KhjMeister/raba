import Head from "next/head";
import React, {  useState } from "react";

import LandingHeader from '../layout/LandingHeader';
import Footer from '../layout/Footer';

import Modal from '../common/Modal';

const Layout = ({children}) => {

  return (
    <>
      <LandingHeader />
      { children}
      <Footer />
      <Modal />
    </>
  );
};

export default Layout;
