import { useState } from "react";
import "./App.css";

function App() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <div className="page">

            <div className="form-card">

                <h1>Controlled Form</h1>
                <p>Enter your details below</p>

                <form>

                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label>Message</label>
                    <textarea
                        name="message"
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                    />

                </form>

                <div className="preview">

                    <h2>Entered Data</h2>

                    <p>
                        <strong>Name:</strong>{" "}
                        {formData.name || "Not entered"}
                    </p>

                    <p>
                        <strong>Email:</strong>{" "}
                        {formData.email || "Not entered"}
                    </p>

                    <p>
                        <strong>Message:</strong>{" "}
                        {formData.message || "Not entered"}
                    </p>

                </div>

            </div>

        </div>
    );
}

export default App;