import "./RecentPart.scss";
import flute from '../../media/img/instruments/flute.png'

export default function RecentPart(props) {
  return (
    <div className="recent-part">
      <img src={flute} />
      <h3 className="recent-part-composer">Composer</h3>
      <p className="recent-part-piece">Piece</p>
      <p className="recent-part-date">Date added</p>
    </div>
  );
}
