export default function Moves({ history, jumpTo }) {
    const Moves = history.map((_, move) => {
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
    <ol>
        {Moves}
    </ol>
    );
}