import Profile from "./Profile";

export default function App() {
    return (
        <div>
            <h1 style={{ textAlign: "center", marginTop: "24px" }}>
                Dynamic Profile
            </h1>

            <Profile
                name="Aylin Demir"
                occupation="Community Soccer Coach"
                funFact="Can juggle a soccer ball 200+ times."
                extraDetail="Quote: 'Consistency beats intensity.' Favorite training drill: rondos."
            />
        </div>
    );
}
