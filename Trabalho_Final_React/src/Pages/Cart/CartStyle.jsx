

const styles = {
    container: {
        padding: "30px",
        maxWidth: "1000px",
        margin: "50px auto",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        minHeight: "400px",
        fontFamily: 'Arial, sans-serif'
    },

    titulo: {
        fontSize: "2.5rem",
        color: "#333",
        marginBottom: "15px",
        textAlign: "center",
        borderBottom: "2px solid #ddd",
        paddingBottom: "10px",
    },

    separador: {
        margin: "30px 0",
        border: 0,
        borderTop: "1px solid #ccc",
    },

    listContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },

    listItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        border: "1px solid #eee",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
    },

    itemName: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#555",
        textTransform: 'capitalize',
    },

    itemDetails: {
        display: "flex",
        alignItems: "center",
        gap: "20px",
    },

    removeBtn: {
        background: "#ff4c4c",
        color: "white",
        border: "none",
        padding: "8px 12px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "0.9rem",
        fontWeight: "bold",
        marginLeft: "15px",
        transition: "background 0.2s",
    },
    
    emptyMessage: {
        textAlign: "center",
        fontSize: "1.2rem",
        color: "#999",
        marginTop: "50px",
    }
};

export default styles;