import { ReactNode,  useState } from 'react';
import { ContextModal } from './ContexModal';

export interface Props {
  children: ReactNode;
}

export const ProviderModal = ({ children }: Props) => {

  const [modal, setModal] = useState(false);

  const openModal = () =>{
    setModal(false)
  }

  const closeModal = () => {
    setModal(true);
    return;
  };

  const onClickOkModal = () =>{
    setModal(true);
  }
  return (
    <ContextModal.Provider value={{
      modal,
      openModal,
      closeModal,
      onClickOkModal
    }}>
      {children}
    </ContextModal.Provider>
  )
}