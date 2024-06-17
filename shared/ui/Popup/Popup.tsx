'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

export const Popup = ({
  close,
  open,
}: {
  close: () => void;
  open: boolean;
}) => {
  const ref = useRef(null);
  useOnClickOutside(ref, close);

  return (
    <motion.div
      ref={ref}
      style={{ display: open ? 'flex' : 'none' }}
      animate={{ y: open ? 0 : '100%' }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.3, type: 'spring' }}
      className="fixed left-0 right-0 bottom-0 z-50 flex w-full flex-col h-[70vh] items-center justify-center bg-popup rounded-t-[50px]"
    >
      <div
        className="w-full h-full relative flex flex-col gap-10 py-4 px-10"
        id="popup"
      >
        <div className="mx-auto w-[10vw] h-[5px] rounded-full bg-white/30" />
      </div>
    </motion.div>
  );
};
