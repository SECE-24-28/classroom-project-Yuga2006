import { useState } from "react";

export default function GuessGame() {
  const [number] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const checkGuess = () => {
    const g = Number(guess);

    if (!g) {
      setMessage("Enter a valid number!");
      return;
    }

    if (g === number) {
      setMessage(" Correct! You guessed the number!");
    } else {
      const diff = Math.abs(g - number);

      if (diff <= 3) setMessage(" Very close!");
      else if (g > number) setMessage(" Too High!");
      else if (g < number) setMessage(" Too Low!");
    }
  };

  const resetGame = () => {
    window.location.reload(); // simple reset
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.heading}>Guess The Number Game </h1>

        <input
          type="number"
          placeholder="Enter your guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          style={styles.input}
        />

        <button onClick={checkGuess} style={styles.button}>
          Check
        </button>

        <p style={styles.message}>{message}</p>

        <button onClick={resetGame} style={styles.reset}>
          Reset Game
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  box: {
    backgroundColor: "#f0f0f0",
    padding: "60px 80px",
    borderRadius: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "Arial",
  },
  heading: {
    color: "#333",
    margin: "0 0 30px 0",
  },

  input: {
    padding: "10px",
    fontSize: "18px",
    width: "200px",
  },
  button: {
    padding: "10px 20px",
    marginTop: "15px",
    fontSize: "18px",
    cursor: "pointer",
    border: "2px solid white",
  },
  message: {
    marginTop: "20px",
    fontSize: "20px",
    color: "#333",
  },
  reset: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "2px solid white",
  },
};
