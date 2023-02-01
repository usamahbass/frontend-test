import { Suspense, useEffect } from "react";
import { gapi } from "gapi-script";
import { BrowserRouter as Router } from "react-router-dom";
import Loading from "./components/General/Loading";
import Routes from "./routes";

const App = () => {
  useEffect(() => {
    function startGapi() {
      gapi.client.init({
        clientId: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
        scope: "",
      });
    }

    gapi.load("client:auth2", startGapi);
  });

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes />
      </Router>
    </Suspense>
  );
};

export default App;
