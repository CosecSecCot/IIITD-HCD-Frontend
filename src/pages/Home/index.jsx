import Navbar from '../../components/Navbar';
import background from '../../assets/testing.svg';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      

      <main className="relative w-full min-h-[calc(100vh-80px)] mt-20"> {/* Adjusted for the larger navbar */}
        <img
          src={background}
          alt="Background Illustration"
          className="w-full h-auto object-contain"
        />
      </main>
    </div>
  );
}

export default App;
