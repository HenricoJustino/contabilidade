import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Menu() {
  return (
    <nav>
      
          <div className="blur"></div> 
        <div className="logo">
          <h1 id="logo">IM</h1>
          <small>CONTABILIDADE</small>
        </div>
        <div className="menu">
            <a href="/">Início</a>
            <a href="/servicos">Serviços</a>
            <a href="/planos">Planos</a>
        </div>
        
        <a className="btn" href="">Fale Conosco</a>
    </nav>
  );
}
