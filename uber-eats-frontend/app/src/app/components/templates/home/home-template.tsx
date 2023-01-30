'use client';

import { border, Box, Button, Flex, Input, Text, VStack } from '@chakra-ui/react';

export default function HomeTemplate() {
   return (
      <Flex
         justifyContent={"center"}
      >
         <VStack>
            <Box
               maxWidth={"360px"}
               minHeight={"100vh"}
            >
               <Text
                  pt={"16px"}
                  color={"#ffffff"}
                  fontSize={"24px"}
                  fontFamily={"sans-serif"}
                  fontWeight={400}
               >
                  電話番号またはメール アドレスをお知らせください
               </Text>
               <Box h={"8px"} />
               <Box
                  bg={"transparent"}
                  borderRadius={"8px"}
                  border={"2px solid transparent"}
               >
                  <Input 
                     // variant={"filled"} 
                     placeholder="電話番号またはメールアドレスを入力"
                     bg={"#222426"}
                     lineHeight={"24px"}
                     padding={"10px 0 10px 12px"}
                     border={"none"}
                     color={"#ffffff"}
                     focusBorderColor={"#8C8273"}
                     _placeholder={
                        {
                           fontSize:"16px"
                        }
                     }
                  />
               </Box>
               <Button 
                  mt={4} 
                  bg={"#000000"} 
                  color={"#ffffff"} 
                  w="100%"
                  minHeight={"48px"}
                  _hover={
                     {
                        bgColor:"#262a2b"
                     }
                  }
               >
                  継行
               </Button>
               <Box h={"16px"} />
               <Flex
                  color={"#B5AFA6"}
                  pt={"4px"}
               >
                  <Text
                     color={"#B5AFA6"}
                     height={"1px"}
                     fontFamily={"sans-serif"}
                  >
                     ーーーーーーーーー
                  </Text>
                  <Text
                   pl="5px"
                   pr="5px"
                   fontFamily={"sans-serif"}
                  >
                     または
                  </Text>
                  <Text
                     color={"#B5AFA6"}
                     height={"1px"}
                     fontFamily={"sans-serif"}
                  >
                     ーーーーーーーーー
                  </Text>
               </Flex>
               <Button 
                  mt={4} 
                  bg={"#222426"} 
                  color={"#ffffff"} 
                  w="100%"
                  minHeight={"48px"}
                  fontWeight={500}
                  _hover={
                     {
                        bgColor:"#282c2d"
                     }
                  }
               >
                  Google で継行する
               </Button>
               <Button 
                  mt={2} 
                  bg={"#222426"} 
                  color={"#ffffff"} 
                  w="100%"
                  minHeight={"48px"}
                  fontWeight={500}
                  _hover={
                     {
                        bgColor:"#282c2d"
                     }
                  }
               >
                  Apple で継行する
               </Button>
               <Button 
                  mt={2} 
                  bg={"#222426"} 
                  color={"#ffffff"} 
                  w="100%"
                  minHeight={"48px"}
                  fontWeight={500}
                  _hover={
                     {
                        bgColor:"#282c2d"
                     }
                  }
               >
                  Facebook で継行する
               </Button>
               <Box h={"24px"} />
            </Box>

         </VStack>
      </Flex>
   );
}
