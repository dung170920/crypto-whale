import { BrowserRouter } from "react-router-dom";
import Router from "@/routes";
import PerfectScrollbar from "react-perfect-scrollbar";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "@/components";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <PerfectScrollbar>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PerfectScrollbar>
    </ErrorBoundary>
  );
}

export default App;
