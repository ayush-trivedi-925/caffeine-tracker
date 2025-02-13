import Layout from "./components/Layout";
import Hero from "./components/Hero";
import CoffeeForm from "./components/CoffeeForm";
import Stats from "./components/Stats";
import History from "./components/History";
import { useState } from "react";
function App() {
  const isAuthenticated = true;
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
