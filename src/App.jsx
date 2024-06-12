import Container from "./components/Container";
import "./index.css";
import AppPage from "./pages/AppPage";

function App() {
  return (
    <>
      <main>
        <Container>
          <AppPage />
        </Container>
      </main>
    </>
  );
}

export default App;
