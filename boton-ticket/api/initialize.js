export default async function handler(req, res) {
  // Intercom manda POST, pero dejamos GET para probar en el navegador.
  if (req.method !== 'POST' && req.method !== 'GET') {
    res.status(405).end();
    return;
  }

  const payload = {
    canvas: {
      content: {
        components: [
          {
            type: "button",
            id: "perfil",
            label: "👤 Perfil",
            style: "primary",
            action: {
              type: "url",
              url: "https://forms.clickup.com/9015976944/f/8cp9rzg-4715/HSNC131ER92PU4853I"
            }
          },
          {
            type: "button",
            id: "bookie",
            label: "🎲 Bookie",
            style: "primary",
            action: {
              type: "url",
              url: "https://forms.clickup.com/9015976944/f/8cp9rzg-4675/XPKO9IEEXTQV2KKEWM"
            }
          },
          {
            type: "button",
            id: "af",
            label: "👻 AF",
            style: "primary",
            action: {
              type: "url",
              url: "https://forms.clickup.com/9015976944/f/8cp9rzg-4655/CUYDGJQ9H2EUUP4B2E"
            }
          }
        ]
      }
    }
  };

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(payload);
}

