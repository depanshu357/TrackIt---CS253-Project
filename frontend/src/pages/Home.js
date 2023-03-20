import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDuesContext } from "../hooks/useDuesContext";
import { useExpenseContext } from "../hooks/useExpenseContext";

import Shopkeeper from "./Shopkeeper";
import Customer from "./Customer";

const Home = () => {
  const { expense, dispatch } = useExpenseContext();
  const { Dues, dispatch: dispatchd } = useDuesContext();
  const { user } = useAuthContext();
  const [borrows, setBorrows] = useState(null);

  if (user.userType !== "Shopkeeper") {
    return (
      <>
        <Customer />
      </>
    );
  } else {
    return (
      <>
        <Shopkeeper />
      </>
    );
  }
};

export default Home;
