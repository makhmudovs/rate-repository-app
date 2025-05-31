import { NativeRouter } from "react-router-native";
import Main from "./components/Main";
import "./global.css";


export default function App() {
  return (
    <NativeRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Main />
    </NativeRouter>
  );
}

