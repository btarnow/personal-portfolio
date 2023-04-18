import Card from "../../components/Card"

const Logo = ({logo}) => {
  return (
    <Card className="light">
      <div className="logo__img">
        <img src={logo.logo} alt={logo.name} />
      </div>
      {/* <p>{logo.name}</p> */}
    </Card>
  )
}

export default Logo