'use client';

import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

export default function SignInTemplate() {
   console.log(222);
   return (
      <>
         <Box>
            <Grid templateColumns='repeat(2, 1fr)' gap={10} px={'10rem'} py={'20rem'}>
               <GridItem w='80%' h='10rem'>
                  <Text
                     fontSize={'36px'}
                     fontWeight={700}
                     size={'36px'}
                     lineHeight={'44px'}
                     fontFamily={'sans-serif'}
                     color={'#ffffff'}
                     as={'a'}
                     _hover={
                        {
                           color:'#282C2D'
                        }
                     }
                     
                  >
                    サインインして運転・配達
                  </Text>
                  <Box
                     paddingBottom={'64px'}
                     border={'solid'}
                     borderBottomColor={'#8C8273'}
                  />
               </GridItem>
               <GridItem w='80%' h='10rem' >
                  <Text
                     fontSize={'36px'}
                     fontWeight={700}
                     size={'36px'}
                     lineHeight={'44px'}
                     fontFamily={'sans-serif'}
                     color={'#ffffff'}
                     as={'a'}
                  >
                    サインインして運転・配達
                  </Text>
                  <Box
                     paddingBottom={'64px'}
                     border={'solid'}
                     borderBottomColor={'#8C8273'}
                  />

               </GridItem>
            </Grid>
         </Box>
      </>
   );
}
