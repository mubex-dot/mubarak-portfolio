import Layout from "./layout/Layout";

function App({ isLoadingComplete }: { isLoadingComplete: boolean }) {
  return (
    <>
      <Layout isLoadingComplete={isLoadingComplete} />
    </>
  );
}

export default App;
