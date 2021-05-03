import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      < Header />
      <Container>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
      </Container>
      <Footer />
    </Router>


  );
}

export default App;
