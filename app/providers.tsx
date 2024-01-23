/*
 * :file description: 
 * :name: /kaola/app/providers.tsx
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-01-23 19:30:47
 * :last editor: 张德志
 * :date last edited: 2024-01-23 19:43:50
 */
'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
}
