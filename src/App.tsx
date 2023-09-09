import { BrowserRouter } from "react-router-dom";
import Router from "@/routes";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "@/components";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
