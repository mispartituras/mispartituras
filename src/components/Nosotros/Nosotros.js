import "./Nosotros.scss";
import Card from './PersonCard.js';
import michael from '../../media/img/michael-photo.png';
import carlos from '../../media/img/carlos-photo.jpeg';

export default function Nosotros() {
  return (
    <section id="nosotros" className="container" >
      <h1 className="section-title">Nosotros</h1>
      <div className="people">
        <Card photo={carlos} name="Carlos" position="CEO" />
        <Card photo={michael} name="Michael" position="Admin / Web Development" />
      </div>
      <p className="about-nosotros">Por fin, un sitio pensado para profesores y estudiantes de conservatorio. Sabemos que no siempre es fácil elegir un repertorio, por eso, mispartituras.com te ayuda a encontrar piezas y obras del nivel y el estilo que quieras de la manera más sencilla.<br/> <br />

Esperamos que, a partir de ahora, tengas un sitio de referencia para encontrar el repertorio adecuado para tus clases, tus audiciones, un concierto o para tu disfrute personal en casa. <br /><br />

¡A tocar!</p>
    </section>
  )
}