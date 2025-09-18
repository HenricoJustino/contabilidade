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
            <a href="">Início</a>
            <a href="">Serviços</a>
            <a href="">Planos</a>
        </div>
        
        <a className="btn-inicio" href="">RTESFale Conosco</a>
    </nav>
  );
}
