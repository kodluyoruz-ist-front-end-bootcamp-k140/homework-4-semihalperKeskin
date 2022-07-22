import { useContext } from "react";
import { AppToastContext } from "../component/context";

export const useToast = () => useContext(AppToastContext)