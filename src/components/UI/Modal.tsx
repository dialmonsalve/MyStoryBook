
import { useState } from 'react';
import { Button } from '../Input/Button';
import '../../sass/components/modal.scss';
import '../../sass/components/modalHide.scss'

type Hide =
  | 'fadeout' | 'toUp' | 'toDown' | 'toRight' | 'toLeft'
  | 'jumpToLeft' | 'jumpToUp'

interface Props {
  type?: 'success' | 'danger' | 'warning' | 'info'
  title?: string;
  content?: string
  hide?: Hide
}

export const Modal = ({
  type = 'success',
  title = 'success',
  content = 'Are you sure?',
  hide = 'fadeout'
}: Props) => {

  const [hideModal, setHideModal] = useState(false);

  const sideHide = (): Hide => {

    switch (hide) {
      case 'toUp':
        return 'toUp'
      case 'toDown':
        return 'toDown'
      case 'toLeft':
        return 'toLeft'
      case 'toRight':
        return 'toRight'
      case 'jumpToUp':
        return 'jumpToUp'
      case 'jumpToLeft':
        return 'jumpToLeft'

      default:
        return 'fadeout';
    }
  }

  const color = () => {

    switch (type) {
      case 'danger':
        return '#ff0000'
      case 'info':
        return '#022BFF'
      case 'warning':
        return '#ffd900'
      default:
        return '#37ff00'
    }
  }

  const onHideModal = () => {
    setHideModal(true)
  };

  const onsHowModal = ()=>{
    setHideModal(false)
  }

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation(); // Stop event propagation
  };

  return (
    <>
    <Button
      label='Show'
      onClick={onsHowModal}
    />
      <div
        className={`modal ${hideModal ? `modal-hide-${sideHide()}` : ''}`}
        onClick={onHideModal}
      >
        <div className='modal-content' onClick={handleContentClick} >

          <div className='modal-content__frame' >
            <p className='modal-content__frame--title'
              style={{ color: color() }}
            >{title}</p>
            <p className='modal-content__frame--message'
              style={{ color: color() }}
            >{content}</p>
            <div className={`${type}`} ></div>
          </div>
          <div className='modal-content__buttons'>
            <Button
              label='ok'
              backgroundColor='green'
              isAnimated
              onClick={onHideModal}
            />
          </div>
        </div>
      </div>
    </>
  )
}
