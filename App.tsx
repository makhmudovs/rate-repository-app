import { NativeRouter } from "react-router-native";
import Main from "./src/Main";

export default function App() {
  return (
    <>
      <NativeRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Main />
      </NativeRouter>
    </>
  );
}
