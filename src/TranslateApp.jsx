import TranslateForm from "./components/TranslateForm";
import Misc from "./components/misc";
import logo from "./assets/logo.svg";

function TranslateApp() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[url('src/assets/hero_img.jpg')] bg-cover bg-center ">
      <div className="absolute inset-0 bg-linear-to-b via-black/40 to-black/80" />
      <main className="relative z-50 w-full max-w-6xl flex flex-col items-center gap-8">
        <img src={logo} alt="Translator App" />
        <TranslateForm />
      </main>
      <Misc />
    </div>
  )
}

export default TranslateApp;
