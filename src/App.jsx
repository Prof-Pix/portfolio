import "./App.css";
import About from "./components/main/About";
import Profile from "./components/main/Profile";

function App() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-5 lg:grid-rows-1 grid-rows-2 grid-cols-1 p-6 max-w-screen-sm lg:max-w-screen-2xl xl:mx-auto mx-auto lg:mx-0">
        <div className="lg:py-14 lg:pl-24 xl:pl-36 lg:pr-12 lg:fixed relative lg:w-2/5 mb-16">
          <Profile />
        </div>
        <div className="lg:py-14 lg:pl-12 lg:pr-16 lg:col-start-3 lg:col-span-3 ">
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
