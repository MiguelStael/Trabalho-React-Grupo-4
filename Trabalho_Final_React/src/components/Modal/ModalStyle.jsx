const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },

  pokeball: {
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    background: "linear-gradient(to bottom, #ff0000 50%, #ffffff 50%)",
    border: "8px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    boxShadow: "0 0 40px rgba(0, 0, 0, 0.6)",
  },

  innerCircle: {
    position: "relative",
    width: "260px",
    height: "260px",
    background: "#fff",
    borderRadius: "50%",
    border: "10px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box",
    textAlign: "center",
  },

  title: {
    fontFamily: "'Press Start 2P', cursive",
    fontSize: "1.1rem",
    color: "#222",
    marginBottom: "12px",
  },

  text: {
    fontSize: "1rem",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    lineHeight: 1.4,
    marginBottom: "15px",
  },

  summary: {
    fontSize: "0.85rem",
    color: "#111",
    marginBottom: "15px",
  },

  button: {
    background: "#ff0000",
    border: "3px solid #4f0303ff",
    color: "#ffffffff",
    borderRadius: "10px",
    padding: "5px 10px",
    fontSize: "0.8rem",
    fontWeight: "bold",
    cursor: "pointer",
    fontFamily: "'Press Start 2P', cursive",
    transition: "transform 0.2s, background 0.2s",
  },
};

export default styles;
