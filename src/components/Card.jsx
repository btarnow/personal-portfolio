import './card.css'

const Card = (props, className, onClick) => {
  return (
    <article className={`card ${className}`} onClick={onClick} >
        {props.children}
    </article>
  )
}

export default Card