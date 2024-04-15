import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div className="App">
      <h1 className="m-2">Natural Pic</h1>
      <Gallery filter={"home"}/>
    </div>
  );
};
export default Home;
