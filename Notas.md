# Observación webpack

Está configurado en modo ***development***, ademais de que o plugin `CopyPlugin` contén de 3 obxetos que son os que queremos enviar cando executemos webpack:

```javascript
plugins: [
      
        new MiniCssExtractPlugin({ filename: './css/styles.css' }), // Arquivo CSS final
        new CopyPlugin({
          patterns: [
            { from: "./src/imaxenes", to: "imaxenes" },
            { from: "./src/views", to: "views" },
            { from: "./src/index.html",  },
          ],
        })
    ]
```

>[!WARNING]
> Esta configuración implica crear nos arquivos de `*.html` os arquivos de `<ruta>/bundle.js` de javascript ademáis de integrar tamén a ruta do `<ruta>/*.css`

> EXEMPLO
```HTML

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>HTML + CSS</title>
    <script defer src="./javascript/bundle.js"></script>
    <link href="./css/styles.css" rel="stylesheet">
</head>
```

Quedan introducidos no `index.html` e `app.html`