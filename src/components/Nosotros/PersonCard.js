import "./PersonCard.scss"

export default function Card(props) {
  return (
    <div className="person-card">
      <img src={props.photo} />
      <div className="person-info">
        <h3>{props.name}</h3>
        <p>{props.position}</p>
        <p>{props.info}</p>
      </div>
    </div>
  )
}