import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useOrders() {
  const { orders } = useContext(AppStateContext);

  return orders;
}
