import { BsFillChatRightDotsFill } from "react-icons/bs";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Dashboard from "./components/Dashboard";
import Hero from "./components/Hero";
import Company from "./components/Company";
import Category from "./components/Category";

function App() {
  return (
//     <div className="p-6 h-screen">
//       <div className=" flex items-center justify-center rounded-xl shadow-md bg-white  p-6  w-[275px] hover:scale-110 duration-300 translate-x-4">
//         <div>
//           <BsFillChatRightDotsFill className="mr-3" size={20} />
//         </div>

//         <div>
//           <h1 className=" text-xl font-medium">ChitChat</h1>
//           <p className="text-gray-500">You have a New Message!</p>
//         </div>
//       </div>

//       <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 flex-auto">
//   <div className="flex-shrink-0">
   
//     <BsFillChatRightDotsFill size={20}/>
//     </div>
//   <div>
//     <div className="text-xl font-medium text-black">ChitChat</div>
//     <p className="text-gray-500">You have a new message!</p>
//   </div>
// </div>

//     </div>
<>
{/* <Login/> */}
{/* <Payment/> */}
<Dashboard/>
<Hero/>
<Company/>
<Category/>
</>
  );
}

export default App;
