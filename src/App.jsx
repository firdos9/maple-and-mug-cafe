import AppLayout from "./layouts/AppLayout";
import AppRoutes from "./routes/AppRoutes";
import "./styles/global.css";

function App() {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  );
}

export default App;
