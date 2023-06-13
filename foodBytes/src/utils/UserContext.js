import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummy Name",
    email: "dummy@xyz.com",
  },
});

export default UserContext;
