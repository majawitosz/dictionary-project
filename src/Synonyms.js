export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}> {synonym}</li>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
// <div className="Synonyms"><strong>Synonyms:</strong>{props}</div>