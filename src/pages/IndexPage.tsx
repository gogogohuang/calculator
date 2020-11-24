import React from 'react';
import Head from 'next/head';
import App from 'components/App/App';
import { wrapper } from 'root/store';

const Index = () => {
  return (
    <>
      <Head>
        <title>Calculate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no maximum-scale=1" />
      </Head>
      <App />
    </>
  );
};

export default wrapper.withRedux(Index);
