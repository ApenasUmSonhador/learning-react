export default function Moves({ history, jumpTo, currentMove }) {
    const pastMoves = currentMove == 0 ? null : 
      history.filter((_, move) => move < currentMove).map((_, move) => {
          let description;
          if (move > 0) {
              description = 'Go to move #' + move;
          } else {
              description = 'Go to game start';
          }
          return (
            <li key={move}>
              <button onClick={() => {{jumpTo(move)}}}>{description}</button>
            </li>
          );
        });
    return(
    <ul>
        {pastMoves}
        <li>You are at move #{currentMove+1}</li>
    </ul>
    );
}