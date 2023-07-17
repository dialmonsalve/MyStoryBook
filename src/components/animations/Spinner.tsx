
import '../../sass/animations/spinner.scss';

interface Props {
  /**
    * What kind of spinner to use? 
    */
  type?: 'long-play' | 'half-circle'
}

export const Spinner = ({ type='half-circle' }: Props) => {
  return (
    <>
      <div className={`container-spinner`} >
        {
          type === 'long-play'&&
            <>
              <div className="container-spinner__spinner"> </div>
              <div className='container-spinner__needle' ></div>
            </>
        }

        {
          type === 'half-circle' &&
          (<div className="container-spinner__half-spinner"> </div>)
        }
      </div>
    </>
  )
}
