/*
 * :file description: 
 * :name: /kaola/components/counter.tsx
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-01-23 19:30:47
 * :last editor: 张德志
 * :date last edited: 2024-01-23 19:39:28
 */
'use client';

import { useState } from 'react';
import { Button } from '@nextui-org/button';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Button radius="full" onPress={() => setCount(count + 1)}>
      Count is {count}
    </Button>
  );
};
