const styles = {
  page: {
    padding: "40px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  title: {
    textAlign: "center",
    fontSize: "2.2rem",
    marginBottom: "25px",
    fontWeight: "bold",
  },

  layout: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },


  itemsCard: {
    flex: "1 1 500px",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    minWidth: "300px",
  },

  emptyMessage: {
    textAlign: "center",
    padding: "40px",
    color: "#777",
    fontSize: "1.1rem",
  },

  itemRow: {
    display: "grid",
    gridTemplateColumns: "1.5fr 0.7fr 1fr 0.7fr",
    alignItems: "center",
    padding: "15px 0",
    borderBottom: "1px solid #eee",
  },

  itemInfo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  img: {
    width: "55px",
  },

  pokemonName: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: "1.1rem",
  },

  smallText: {
    color: "#777",
  },

  price: {
    fontWeight: "bold",
  },


  qtyBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  qtyBtn: {
    width: "28px",
    height: "28px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    background: "#f2f2f2",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold",
  },

  qtyNumber: {
    fontWeight: "bold",
    fontSize: "1.1rem",
  },

  totalItem: {
    fontWeight: "bold",
    color: "#333",
  },


  summaryCard: {
    flex: "0 1 350px",
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    height: "fit-content",
    minWidth: "280px",
    position: "sticky",
    top: "80px",
  },

  summaryTitle: {
    fontSize: "1.4rem",
    marginBottom: "20px",
    fontWeight: "bold",
  },

  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
  },

  summaryTotal: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#222",
  },

  line: {
    margin: "10px 0",
    border: 0,
    borderTop: "1px solid #ddd",
  },

  checkoutBtn: {
    width: "100%",
    marginTop: "20px",
    padding: "14px",
    background: "#ff4d4f",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
  },
};

export default styles;
