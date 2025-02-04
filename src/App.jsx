import Layout from "./components/Layout";
import Hero from "./components/Hero";
import CoffeeForm from "./components/CoffeeForm";
import Stats from "./components/Stats";
import History from "./components/History";
function App() {
  const isAuthenticated = false;
  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  );
  return (
    <>
      <Layout>
        <Hero />
        <CoffeeForm />
        {isAuthenticated && authenticatedContent}
      </Layout>
    </>
  );
}

export default App;
