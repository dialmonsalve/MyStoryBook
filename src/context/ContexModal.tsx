import { createContext } from 'react';


interface ContextProps {
  modal:boolean
  openModal():void
  closeModal():void
  onClickOkModal():void;
}

export const ContextModal = createContext({} as ContextProps)