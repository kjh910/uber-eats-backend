'use client';

import { ChakraProvider , extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { BeforeLoginHeader } from './components/organisms/before-login-header/before-login-header';


export const theme = extendTheme({
   styles: {
      global: {
         body: {
            backgroundColor: '#181a1b',
         },
         html: {
            height: '100%'
         }
      }
   }
});

const client = new QueryClient();

export default function RootLayout({
   children,
}: {
  children: React.ReactNode
}) {
   return (
      <html lang="en">
         {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
         <head />
         <body>
            <RecoilRoot>
               <QueryClientProvider client={client}>
                  <ChakraProvider theme={theme}>
                     <BeforeLoginHeader />
                     {children}
                  </ChakraProvider>
               </QueryClientProvider>
            </RecoilRoot>
         </body>
      </html>
   );
}
