import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-container">
        <div className="rodape-section">
          <h3>Contato</h3>
          <ul>
            <li><i className="fa-solid fa-phone"></i> (11) 99999-9999</li>
            <li><i className="fa-solid fa-envelope"></i> contato@contabilidade.com.br</li>
            <li><i className="fa-solid fa-location-dot"></i> Av. Paulista, 1000 - São Paulo/SP</li>
          </ul>
        </div>
        
        <div className="rodape-section">
          <h3>Horário de Atendimento</h3>
          <p>Segunda a Sexta: 9h às 18h</p>
          <p>Sábados: 9h às 13h</p>
        </div>
        
        <div className="rodape-section">
          <h3>Redes Sociais</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i class="fa-brands fa-youtube"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
      
      <div className="rodape-bottom">
        <p>&copy; {new Date().getFullYear()} Contabilidade. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
