// import { useState } from "react";
// import AppButton from "./UI/AppButton/AppButton";
// import TransBlock from "./TransBlock";

// export default function TabsContent({targetCard}) {
//   const [content, setContent] = useState("trans");

//   const btns = [
//     { text: "trans", value: "trans" },
//     { text: "trans2", value: "trans2" },
//   ];

//   return (
//     <div className="tabs">
//       <div className="tabs__btns">
//         {btns.map((btn) => (
//           <button
//             className={btn.value === content ? "tab-btn active" : "tab-btn"}
//             key={btn.value}
//             value={btn.value}
//             onClick={() => setContent(btn.value)}
//           >
//             {btn.text}
//           </button>
//         ))}
//       </div>
//       <div className="tabs__content">
//         { content === 'trans' ? <TransBlock targetCard={targetCard} /> : <></> }
//       </div>
//     </div>
//   );
// }
