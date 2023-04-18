import Card from "../../components/Card"

const Logo = ({logo}) => {
  return (
    <Card className="light">
      {/* logo__img is the same as the class testimonial__client-avatar under testimonial__client */}
      <div className="logo__img">
        <img src={logo.logo} alt={logo.name} />
      </div>
    </Card>
  )
}

export default Logo