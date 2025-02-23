import React, { useState } from "react";
import Custom3DModel from "./Custom3DModel";
// import ThreeDShapeRotator from "./3DImageGenerator";

function App() {
    const [prompt, setPrompt] = useState("cube");

    return (
        <div>
            <h1>AI Smart Board - 3D Model Generator</h1>
            <input
                type="text"
                placeholder="Enter text for 3D object"
                onChange={(e) => setPrompt(e.target.value)}
            />
            {/* <ThreeDShapeRotator prompt={prompt} /> */}
            <Custom3DModel  />
        </div>
    );
}

export default App;
