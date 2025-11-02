import UserPage from './pages/UserPage';
import './App.css';

function App() {

  return (
    <>
  <UserPage />
 </>
  )
}

export default App
// import { useState } from "react"
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

// function App() {
//   const [images, setImages] = useState([])
//   const [arr, setArr] = useState([]);
//   const [number, setNumber] = useState(0);

//  const handleDelete = () => {
//   arr.pop();
//   // setArr([...arr]);
//   console.log(arr);
//   console.log("Hovered Delete");
//  }

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files)
//     const newImages = files.map((file) => URL.createObjectURL(file))
//     console.log(newImages);
//     setImages((prevImages) => [...prevImages, ...newImages])
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setArr((prev)=> [...prev,e.target.elements[0].value]);
//     console.log(arr);
//     // console.log(e.target.elements[0].value)
//   }

//   const handleChange = (e) => {
//     setNumber(e.target.value);
//   }

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//         backgroundColor: "green",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "1rem",
//         color: "white",
//         overflowY: "auto",
//       }}
//     >
//       {/* File input for multiple images */}
//       <input
//         type="file"
//         accept="image/*"
//         multiple
//         onChange={handleImageUpload}
//       />

//       {/* Display all uploaded images */}
//       <div
//         style={{
//           display: "flex",
//           gap: "10px",
//           flexWrap: "wrap",
//           justifyContent: "center",
//         }}
//       >
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`Uploaded ${index}`}
//             style={{
//               width: "100px",
//               height: "100px",
//               objectFit: "cover",
//               borderRadius: "8px",
//             }}
//           />
//         ))}
//       </div>

//       {/* ToggleGroup */}
//       <ToggleGroup type="single">
//         <ToggleGroupItem value="bold" aria-label="Toggle bold">
//           <h2>About Me</h2>
//         </ToggleGroupItem>
//         <ToggleGroupItem value="italic" aria-label="Toggle italic">
//           <h2>Experiences</h2>
//         </ToggleGroupItem>
//         <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
//           <h2>Recommended</h2>
//         </ToggleGroupItem>
//       </ToggleGroup>

//       {/* Number input form */}
//  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//   <h2
//     style={{
//       fontSize: "24px",
//       fontWeight: "700",
//       background: "linear-gradient(90deg, #0072ff, #00c6ff)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//       textShadow: "2px 2px 10px rgba(0, 114, 255, 0.2)",
//       marginBottom: "15px",
//       letterSpacing: "1px",
//       fontFamily: "'Poppins', sans-serif",
//     }}
//   >
//     Enter num:
//   </h2>

//   {arr.map((val, indx) => (
//     <span
//       key={indx}
//       style={{
//         fontSize: "20px",
//         color: "#0072ff",
//         fontWeight: "600",
//         background: "rgba(0, 114, 255, 0.1)",
//         padding: "4px 10px",
//         borderRadius: "8px",
//       }}
//     >
//       {val}
//     </span>
//   ))}
// </div>

//       <form onSubmit={handleSubmit}>
//         <input
//   type="number"
//   value={number}
//   onChange={handleChange}
//   style={{
//     padding: "10px 15px",
//     borderRadius: "10px",
//     border: "2px solid #0072ff",
//     outline: "none",
//     fontSize: "16px",
//     width: "150px",
//     transition: "all 0.3s ease",
//     boxShadow: "0 2px 6px rgba(0, 114, 255, 0.2)",
//     fontFamily: "'Poppins', sans-serif",
//   }}
//   onFocus={(e) => {
//     e.target.style.border = "2px solid #00c6ff";
//     e.target.style.boxShadow = "0 4px 10px rgba(0, 114, 255, 0.3)";
//   }}
//   onBlur={(e) => {
//     e.target.style.border = "2px solid #0072ff";
//     e.target.style.boxShadow = "0 2px 6px rgba(0, 114, 255, 0.2)";
//   }}
// />
//           <button
//       type="submit"
//       style={{
//         background: "linear-gradient(135deg, #00c6ff, #0072ff)",
//         border: "none",
//         color: "white",
//         padding: "12px 30px",
//         fontSize: "16px",
//         fontWeight: "600",
//         borderRadius: "50px",
//         cursor: "pointer",
//         transition: "all 0.3s ease",
//         boxShadow: "0 4px 10px rgba(0, 114, 255, 0.3)",
//         letterSpacing: "1px",
//       }}
//       onMouseOver={(e) => {
//         e.target.style.background =
//           "linear-gradient(135deg, #0072ff, #00c6ff)";
//         e.target.style.transform = "scale(1.05)";
//         e.target.style.boxShadow = "0 6px 15px rgba(0, 114, 255, 0.4)";
//       }}
//       onMouseOut={(e) => {
//         e.target.style.background =
//           "linear-gradient(135deg, #00c6ff, #0072ff)";
//         e.target.style.transform = "scale(1)";
//         e.target.style.boxShadow = "0 4px 10px rgba(0, 114, 255, 0.3)";
//       }}
//       onMouseDown={(e) => {
//         e.target.style.transform = "scale(0.98)";
//         e.target.style.boxShadow = "0 2px 5px rgba(0, 114, 255, 0.3)";
//       }}
//       onMouseUp={(e) => {
//         e.target.style.transform = "scale(1.05)";
//         e.target.style.boxShadow = "0 6px 15px rgba(0, 114, 255, 0.4)";
//       }}
//     >
//       Submit
//     </button>
//       </form>
//       <button
//       onClick={handleDelete}
//       style={{
//         background: "linear-gradient(135deg, #00c6ff, #0072ff)",
//         border: "none",
//         color: "white",
//         padding: "12px 30px",
//         fontSize: "16px",
//         fontWeight: "600",
//         borderRadius: "50px",
//         cursor: "pointer",
//         transition: "all 0.3s ease",
//         boxShadow: "0 4px 10px rgba(0, 114, 255, 0.3)",
//         letterSpacing: "1px",
//       }}
//       onMouseOver={(e) => {
//         e.target.style.background =
//           "linear-gradient(135deg, #0072ff, #00c6ff)";
//         e.target.style.transform = "scale(1.05)";
//         e.target.style.boxShadow = "0 6px 15px rgba(0, 114, 255, 0.4)";
//       }}
//       onMouseOut={(e) => {
//         e.target.style.background =
//           "linear-gradient(135deg, #00c6ff, #0072ff)";
//         e.target.style.transform = "scale(1)";
//         e.target.style.boxShadow = "0 4px 10px rgba(0, 114, 255, 0.3)";
//       }}
//       onMouseDown={(e) => {
//         e.target.style.transform = "scale(0.98)";
//         e.target.style.boxShadow = "0 2px 5px rgba(0, 114, 255, 0.3)";
//       }}
//       onMouseUp={(e) => {
//         e.target.style.transform = "scale(1.05)";
//         e.target.style.boxShadow = "0 6px 15px rgba(0, 114, 255, 0.4)";
//       }}
//     >
//       Remove
//     </button>
//     </div>
//   )
// }

// export default App;