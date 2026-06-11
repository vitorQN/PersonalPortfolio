import './SquaresBg.css';
 
function SquaresBg({ count = 200 }) {
  return (
    <div className="squares-bg">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="square" />
      ))}
    </div>
  );
}
 
export default SquaresBg;