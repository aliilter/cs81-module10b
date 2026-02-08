import { useState } from "react";

export default function Profile({ name, occupation, funFact, extraDetail }) {
    const [showDetail, setShowDetail] = useState(false);

    function handleToggle() {
        setShowDetail((prev) => !prev);
    }

    return (
        <div style={styles.card}>
            <h2 style={styles.name}>{name}</h2>
            <p style={styles.line}>
                <strong>Role:</strong> {occupation}
            </p>
            <p style={styles.line}>
                <strong>Fun fact:</strong> {funFact}
            </p>

            <button style={styles.button} onClick={handleToggle}>
                {showDetail ? "Hide" : "Show"} Extra Detail
            </button>

            {showDetail && <p style={styles.detail}>{extraDetail}</p>}
        </div>
    );
}

const styles = {
    card: {
        maxWidth: "420px",
        margin: "40px auto",
        padding: "18px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        fontFamily: "system-ui, Arial, sans-serif",
    },
    name: {
        marginTop: 0,
        marginBottom: "10px",
    },
    line: {
        margin: "8px 0",
    },
    button: {
        marginTop: "12px",
        padding: "10px 12px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        background: "white",
        cursor: "pointer",
    },
    detail: {
        marginTop: "14px",
        padding: "10px",
        borderRadius: "10px",
        background: "#f6f6f6",
    },
};
