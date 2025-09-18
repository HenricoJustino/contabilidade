import { type PageProps } from "$fresh/server.ts";
import { Menu } from "../components/Menu.tsx";
import { Teste } from "../components/Teste.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>IM Contabilidade</title>
        <link rel="stylesheet" href="/styles/index.css" />
        <link rel="stylesheet" href="/styles/menu.css" />
        <link rel="stylesheet" href="/Rosel.ttf" />
      </head>
      <body>
        <Menu />
        <Component />
      </body>
    </html>
  );
}
