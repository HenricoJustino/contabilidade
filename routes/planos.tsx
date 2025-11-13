import { Head } from "$fresh/runtime.ts";

export default function planos() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="/styles/planos.css" />
      </Head>
      <main id="planos-main">
        <h1 className="titulo">Planos</h1>
        <section className="planos-list">
          {/* Card do Serviço 1 (modelo) */}
          <article className="planos-card">
            <div className="card-header">
              <div>
                <h3 className="service-title">Empresas de Serviços</h3>
                <p className="service-subtitle">Comparativo de planos: Essencial e Completo</p>
              </div>
            </div>
            <div className="card-table">
              <table className="comparativo">
                <thead>
                  <tr>
                    <th className="start">Descrição</th>
                    <th className="center">Essencial</th>
                    <th className="center">Completo</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Contabilidade */}
                  <tr className="section">
                    <th>Contabilidade</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <td className="descricao">Contabilidade Completa</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-check"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Relatórios Contábeis</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-check"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Importação e conciliação de extrato</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-xmark"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Análise Financeira</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-xmark"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Reuniões de apresentação de resultados trimestrais</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-xmark"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>

                  {/* Atendimento */}
                  <tr className="section">
                    <th>Atendimento</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <td className="descricao">Atendimento exclusivo com contador dedicado</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-check"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Whatsapp (9h às 19h)</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-check"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Email (9h às 19h)</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-xmark"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Telefone (9h às 18h)</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-xmark"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Reuniões individuais</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-xmark"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>

                  {/* Fiscal */}
                  <tr className="section">
                    <th>Fiscal</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <td className="descricao">Planejamento tributário</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-check"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Auxílio na emissão de NFS</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-check"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Regime tributário</td>
                    <td className="plano basico"><small>simples nacional</small></td>
                    <td className="plano completo"><small>todos (honorário ajustado conforme demandas)</small></td>
                  </tr>
                  <tr>
                    <td className="descricao">Faturamento</td>
                    <td className="plano basico"><small>até 100k/mês</small></td>
                    <td className="plano completo"><small>ilimitado (honorário ajustado conforme faturamento)</small></td>
                  </tr>

                  {/* Departamento Pessoal */}
                  <tr className="section">
                    <th>Departamento Pessoal</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <td className="descricao">Folha de pagamento</td>
                    <td className="plano basico"><small>cobrado à parte</small></td>
                    <td className="plano completo"><small>até 4 funcionários grátis</small></td>
                  </tr>
                  <tr>
                    <td className="descricao">Pró‑labore para os sócios</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-check"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr className="total">
                    <td className="descricao"></td>
                    <td className="price">R$ 250,00/mês</td>
                    <td className="price highlight">R$ 400,00/mês</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* Card do Serviço 2 (modelo) */}
          <article className="planos-card">
            <div className="card-header">
              <div>
                <h3 className="service-title">Empresas de Comércio</h3>
                <p className="service-subtitle">Comparativo de planos: Essencial e Completo</p>
              </div>
            </div>
            <div className="card-table">
              <table className="comparativo">
                <thead>
                  <tr>
                    <th className="start">Descrição</th>
                    <th className="center">Essencial</th>
                    <th className="center">Completo</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Contabilidade */}
                  <tr className="section">
                    <th>Contabilidade</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <td className="descricao">Contabilidade Completa</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-check"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Relatórios Contábeis</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-check"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Importação e conciliação de extrato</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-xmark"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Análise Financeira</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-xmark"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Reuniões de apresentação de resultados trimestrais</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-xmark"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>

                  {/* Atendimento */}
                  <tr className="section">
                    <th>Atendimento</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <td className="descricao">Atendimento exclusivo com contador dedicado</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-check"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Whatsapp (9h às 19h)</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-check"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Email (9h às 19h)</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-xmark"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Telefone (9h às 18h)</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-xmark"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Reuniões individuais</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-xmark"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>

                  {/* Fiscal */}
                  <tr className="section">
                    <th>Fiscal</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <td className="descricao">Planejamento tributário</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-check"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Auxílio na emissão de NFS</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-check"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr>
                    <td className="descricao">Regime tributário</td>
                    <td className="plano basico"><small>simples nacional</small></td>
                    <td className="plano completo"><small>todos (honorário ajustado conforme demandas)</small></td>
                  </tr>
                  <tr>
                    <td className="descricao">Faturamento</td>
                    <td className="plano basico"><small>até 100k/mês</small></td>
                    <td className="plano completo"><small>ilimitado (honorário ajustado conforme faturamento)</small></td>
                  </tr>

                  {/* Departamento Pessoal */}
                  <tr className="section">
                    <th>Departamento Pessoal</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <td className="descricao">Folha de pagamento</td>
                    <td className="plano basico"><small>até 3 funcionários grátis</small></td>
                    <td className="plano completo"><small>até 6 funcionários grátis</small></td>
                  </tr>
                  <tr>
                    <td className="descricao">Pró‑labore para os sócios</td>
                    <td className="plano basico"><i class="fa-solid fa-circle-check"></i></td>
                    <td className="plano completo"><i class="fa-solid fa-circle-check"></i></td>
                  </tr>
                  <tr className="total">
                    <td className="descricao"></td>
                    <td className="price">R$ 350,00/mês</td>
                    <td className="price highlight">R$ 500,00/mês</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </main>
    </div>
    
  );
}
