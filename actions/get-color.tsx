import { Color } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
    const res = await fetch(URL);

    return res.json();
    

};
export default getColors;

// import { useEffect } from 'react';Color
// import { io } from 'socket.io-client';



// const getCategories = io('http://localhost:3001/api/b6c9ab9c-c777-41bd-9f11-cebc8150a0d8');

// const App = () => {
//   useEffect(() => {
//     getCategories.on('message', (data) => {
//       console.log('Received message:', data);


//       // ทำอะไรก็ตามที่คุณต้องการเมื่อมีข้อมูลถูกส่งมาจาก WebSocket server
//     });
// export default getCategories;