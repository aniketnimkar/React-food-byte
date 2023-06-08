// import React from "react";
// class Profile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       count2: 0,
//     };
//     console.log("Child - contstructer");
//   }

//   componentDidCatch() {
//     console.log("child - componentDidCatch");
//   }

//   render() {
//     const { count } = this.state;
//     console.log("child - render");
//     return (
//       <div>
//         <h1>Profile Class Based Component</h1>;<h3>Name: {this.props.name}</h3>
//         <h2>Count: {count}</h2>
//         <button
//           onClick={() => {
//             this.setState({
//               count: 1,
//             });
//           }}
//         >
//           click
//         </button>
//       </div>
//     );
//   }
// }
// export default Profile;
// // class Profile extends React.Component {
// //   render() {
// //     <h1>Profile Class Based Component</h1>;
// //   }
// // }
