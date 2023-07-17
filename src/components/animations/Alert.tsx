import '../../sass/animations/alert.scss'

type ToastDirection =
  'toUp' | 'toRight' | 'toDown' | 'toLeft' | 'toFade' |
  'jumpToUp' | 'jumpToRight' | 'jumpToDown' | 'jumpToLeft' | 'jumpToDown';

interface Props {
  direction?: ToastDirection
  message: string
  type?: 'success' | 'info' | 'warning' | 'danger'
}

export const Alert = ({
  direction = 'toUp',
  message,
  type = 'success'
}: Props) => {

  return (
    <div
      className={`container-alert ${type} ${direction} `}>
      {message}
    </div>
  )
}
