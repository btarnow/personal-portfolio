import Card from './Card'
import { Fragment, ReactFragment } from 'react'
import ReactDOM from 'react-dom'
import { useModalAContext } from '../context/modal-context'
import './modal.css'

const Modal = ({className, children}) => {
    const {showModal, closeModalHandler } = useModalAContext();

    
  return (
    <Fragment>
        {
            showModal &&  ReactDOM.createPortal(<>
            <section id="backdrop" onClick={closeModalHandler}></section>
            {/* The children prop will be whatever is passed between the opening 
            and closing Modal Component instance tag */}
            <Card className={className}>{children}</Card>
            </>, document.querySelector('#overlays'))
        }
    </Fragment>
  )
}

export default Modal