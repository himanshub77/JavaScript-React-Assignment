import ProfileCard from "./ProfileCard";

function App() {
    return (
        <div className="app">
            <h1>React Profile Card</h1>

            <ProfileCard
                name="Himanshu Bhavsar"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxrWsdJFvBx8g6CtZnXj9S9xcOtMmEysWTAz1M-HSrxg&s=10"
                description="MCA student interested in software development, cybersecurity and emerging technologies."
            />
        </div>
    );
}

export default App;