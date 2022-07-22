import { useAppContext } from "../component/context";

export function useAppState() {
  const { state } = useAppContext()
  return state
}