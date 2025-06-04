import { useEffect, useState } from 'react';

export const useOpenClose = ({
  initialStatus = false
}: {
  initialStatus?: boolean;
} = {}): { isOpen: boolean; open: VoidFunction; close: VoidFunction; firstLoad: boolean } => {
  const [isOpen, setIsOpen] = useState(initialStatus);

  const [firstLoad, setFirstLoad] = useState<boolean>(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    !firstLoad && isOpen && setFirstLoad(true);
  }, [isOpen]);

  return { isOpen, open, close, firstLoad };
};
