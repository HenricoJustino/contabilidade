import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      <main id="main">
        <div className="img"></div>
        <h1>Contabilidade online, fácil e segura para sua empresa</h1>
      </main>
      <main className="main2">
        <div className="text">
          
        </div>
        <div className="img2">
          <img className="imgmain2" src="italo.png" alt="" />
        </div>
      </main>
    </div>
    
  );
} 
