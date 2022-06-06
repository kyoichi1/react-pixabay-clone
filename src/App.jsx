
import './App.css';
import ImageGallery from './ImageGallery';


function App() {
  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form>
        <input type="text" placeholder='画像を探す'/>
      </form>
    <ImageGallery />
    </div>
  );
}

export default App;
