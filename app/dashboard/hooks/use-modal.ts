import { create } from "zustand";

interface UseModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useModal = create<UseModalProps>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
