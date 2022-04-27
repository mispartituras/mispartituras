import "./Filter.scss";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Filter(props) {
  const [data, setData] = React.useState([]);
  let myList = [];

  //Fetch data from Google Sheets API
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/1b2l5fS3N3QM7zvNGtmHrlYC344j5v9HATf8d4JykhQw/values/${props.instrument}?key=AIzaSyDMk6p2-FZDwC1Cn56PVTJJF4-kw6znd24`
      );
      const processedData = await data.json();
      setData(processedData.values.slice(1));
    };
    fetchData();
  }, []);

  myList = data.map((item, index) => {
    let color = "";
    //Select the color linked to "Nivel"
    switch (item[4]) {
      case "Básico":
        color = "#d4ffb3";
        break;
      case "Intermedio":
        color = "#feffb3";
        break;
      case "Avanzado":
        color = "#ffcb8f";
        break;
    }
    let styles = {
      backgroundColor: color,
    };
    return (
      <div key={item[0]} className="filter-item" style={styles}>
        <p className="filter-piece">{item[1]}</p>
        <p className="filter-composer">{item[2]}</p>
      </div>
    );
  });

  return (
    <div className="filter">
      <div className="filter-button-wrapper">
        <button onClick={() => props.onClick("instSelect")}>
          <span>
            <AiOutlineArrowLeft />
          </span>{" "}
          Instrumentos
        </button>
        <button className="filtro-button">Filtro</button>
      </div>
      <div className="filter-wrapper">{myList}</div>
    </div>
  );
}

export default Filter;
