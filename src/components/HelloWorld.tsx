import React, { FC } from 'react';

interface HelloWorldProps {
  name: string;
}

const HelloWorld: FC<HelloWorldProps> = ({ name }) => <p>Hello, {name}</p>;

export default HelloWorld;

// temp fiile to try out params / name props
