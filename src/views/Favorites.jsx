import Gallery from "../components/Gallery";

const Favorites = () => {
  return (
    <div className="App">
      <h1 className="m-2">Fotos favoritas</h1>
      <Gallery filter={"favoritos"}/>
    </div>
  );
};
export default Favorites;
