'use client';

import { Popup } from '@/shared/ui/Popup';
import { AnimatePresence } from 'framer-motion';
import { createContext, useState } from 'react';

export const PopupContext = createContext<{
  open: boolean;
  toggle?: () => void;
}>({ open: false });

export const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <PopupContext.Provider value={{ open: isOpen, toggle }}>
      <AnimatePresence>
        <Popup close={close} open={isOpen} key="popup" />
      </AnimatePresence>
      {children}
    </PopupContext.Provider>
  );
};
