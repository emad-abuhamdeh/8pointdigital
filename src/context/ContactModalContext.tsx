import { createContext, useContext, useState, ReactNode } from "react";

interface ContactModalContextType {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

const ContactModalContext = createContext<ContactModalContextType>({
  openModal: () => {},
  closeModal: () => {},
  isOpen: false,
});

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ContactModalContext.Provider value={{ openModal: () => setIsOpen(true), closeModal: () => setIsOpen(false), isOpen }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactModalContext);
}
