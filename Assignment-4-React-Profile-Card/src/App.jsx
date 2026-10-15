import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
    return (
        <div className="app">
            <h1>My Profile</h1>

            <ProfileCard
                name="Himanshu Bhavsar"
                image="https://i.pravatar.cc/300?img=12"
                description="MCA student passionate about software development, web technologies and artificial intelligence."
            />
        </div>
    );
}

export default App;