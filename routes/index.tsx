import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      <main id="main">
        <div className="img"></div>
        <div className="texto">
          <p>Contabilidade online,</p>
          <p>fácil e segura para sua</p>
          <p>empresa</p>
        </div>
        <a href="" className="btn-inicio bi">Fale Conosco</a>
      </main>
      <main className="main2">
        <h1>Serviços</h1>
        <section>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </section>
      </main>
    </div>
    
  );
} 
