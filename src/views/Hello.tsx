import React, { FC } from 'react';
import { useParams } from 'react-router';
import HelloWorld from '../components/HelloWorld';

const Hello: FC = () => {
  const { name } = useParams();

  return (
    <>
      <h1>Hello page</h1>
      <HelloWorld name={name} />
    </>
  );
};

export default Hello;

// Just a temp file to try out params and props
