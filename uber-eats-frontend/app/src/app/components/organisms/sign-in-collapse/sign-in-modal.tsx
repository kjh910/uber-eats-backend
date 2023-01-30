'use client';

import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React from 'react';
import { ISignInModalProps } from './props';

export const SignInModal = (args:ISignInModalProps) => {
   const { isOpen, onClose } = args;

   return (
      <>
         <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset='scale'
            size={'full'}
         >
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Modal Title</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  1234
               </ModalBody>
               <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
                  </Button>
                  <Button variant='ghost'>Secondary Action</Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   );
};