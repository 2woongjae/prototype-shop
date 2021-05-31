import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function usePrototypes() {
  const { prototypes } = useContext(AppStateContext);

  return prototypes;
}
