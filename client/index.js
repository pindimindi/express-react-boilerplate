import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
// import { Provider } from "react-redux";
// import { Router } from "react-router-dom";
// import history from "./history";
// import store from "./store";
// import App from "./app";

// establishes socket connection

// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
//       <App />
//     </Router>
//   </Provider>,
//   document.getElementById("app")
// );

ReactDOM.render(
  <Root />,
  document.getElementById("app") // make sure this is the same as the id of the div in your index.html
);
