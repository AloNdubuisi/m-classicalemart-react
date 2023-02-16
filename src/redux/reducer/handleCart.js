// const cart = [];

// const handleCart = (state = cart, action) => {
//   const product = action.payload;
//   switch (action.type) {
//     case "ADDITEM":
//       //To check if product already exists:
//       const exist = state.find((x) => x.id === product.id);
//       if (exist) {
//         //lets increement the product quantity here
//         return state.map((x) =>
//           x.id === product.id ? { ...x, qty: x.qty + 1 } : x
//         );
//       } else {
//         const product = action.payload;
//         return [...state, { ...product, qty: 1, }];
//       }
//       break;

//         case "DELETEITEM":
//             const exist1 = state.find((x) => x.id === product.id);
//             if (exist1.qty === 1) {
//             return state.filter((x) => x.id !== exist1.id);
//         } else {
//             return state.map((x) =>
//             x.id === product.id ? { ...x, qty: x.qty - 1 } : x
//             );
//         }
//         break;
//     default:
//       return state;
//       break;
//   }
// };
// export default handleCart;


const cart = [];

const handleCart = (state = cart, action) => {
const product = action.payload;
switch (action.type) {
case "ADDITEM":
//To check if product already exists:
const exist = state.find((x) => x.id === product.id);
if (exist) {
//lets increement the product quantity here
return state.map((x) =>
x.id === product.id ? { ...x, qty: x.qty + 1 } : x
);
} else {
return [...state, { ...product, qty: 1 }];
}
case "DELETEITEM":
const exist1 = state.find((x) => x.id === product.id);
if (exist1.qty === 1) {
return state.filter((x) => x.id !== exist1.id);
} else {
return state.map((x) =>
x.id === product.id ? { ...x, qty: x.qty - 1 } : x
);
}
default:
return state;
}
};

export default handleCart;