import { useState } from "react"

function App() {
  const [color, setColor] = useState('yellow')

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap
      justify-center bottom-2 inset-x-0 px-2">
          <div className="flex flex-wrap
      justify-center gap-3 shadow-lg bg-white px-5 py-2 rounded-2xl">
            <button
              onClick={() => setColor("Red")}
              className="outline-none px-5 py-2 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >Red</button>

            <button
              onClick={() => setColor("skyblue")}
              className="outline-none px-5 py-2 rounded-2xl text-black shadow-lg"
              style={{ backgroundColor: "skyblue" }}
            >skyblue</button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-5 py-2 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >blue</button>

            <button
              onClick={() => setColor("pink")}
              className="outline-none px-5 py-2 rounded-2xl text-black shadow-lg"
              style={{ backgroundColor: "pink" }}
            >pink</button>

            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-5 py-2 rounded-2xl text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >yellow</button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-5 py-2 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >green</button>

            <button
              onClick={() => setColor("black")}
              className="outline-none px-5 py-2 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >black</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
