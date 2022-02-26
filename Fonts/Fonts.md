## Introdução font-properties


Descrição
A tipografia transmite uma mensagem, por exemplo, quando queremos dar uma ênfase no texto nós podemos escrever o mesmo em negrito.

Nós podemos transmitir uma mensagem diferente dependendo do estilo que escrevemos o texto.

Algumas das propriedades de fonts do CSS que podem nos ajudar a transmitir uma mensagem através dos textos da página são:
- font-family
- font-weight
- font-style
- font-size



## Web-fonts


Descrição
Web Fonts
Fontes do sistema x Fontes da web
Fontes do sistema são as fontes que estão instaladas na máquina do usuário e nem sempre o cliente vai ter instalado as fontes usadas no projeto e isso pode fazer com que os estilos dos textos não sejam aplicados corretamente, mas para resolver esses casos podemos preparar nossas fonts para web ou usar fontes da web.

Como usar fontes para web?
@font-face
@import
link
Referência
https://fonts.google.com/
https://css-tricks.com/snippets/css/using-font-face-in-css/


## Font-variant e font-stretch

Font Variant
Faz variações na apresentação da fonte
- Link: https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant


## Font Stretch
Alargamento ou encolhimento da fonte
Aceita palavras-chaves como: expanded, condensed, normal
Aceita porcentagens de 50% a 200%
Essa propriedade não vai funcionar em todas as fontes

- Link: https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch

## Referência
- Link: https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals




## Letter e word-spacing

Descrição
Letter spacing
Define o espaçamento entre os caracteres

- Link: https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing



## Word spacing
Define o espaçamento entre palavras

- Link: https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing




## Line-height e text-transform


Descrição
Line height
Define os espaços entre linhas
Pode ser com unidades ou sem unidades de medida
Valores comuns: 1.5 ou 2

-Link: https://developer.mozilla.org/en-US/docs/Web/CSS/line-height


## Text transform

Transformação do texto
Valores podem ser: none | capitalize | uppercase | lowercase | full-width | full-size-kana

- Link: https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform


## Text-decoration



Descrição
Text decoration
Aparência decorativa de um texto
line: underline | overline | line-through
podemos aplicar mais de 1 valor
style: wavy | dotted | double | dashed | solid
color: <color> values

- Link: https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration




## Text-align

Descrição
Text align
Alinhamento de um texto
Valores: start | end | left | right | center | justify | match-parent

- Link: https://developer.mozilla.org/en-US/docs/Web/CSS/text-align



## Text-shadow


Descrição
Text shadow
Sombra aplicada a um texto
Permite múltiplos valores
p {
  text-shadow: 1px 1px 1px red,
	       2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}
- Link: https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow


## Shorthand


Descrição
Podemos usar o shorthand font para determinar os seguintes valores: 

- font-style, font-variant, font-weight, font-stretch, font-size, line-height e font-family
p {
  font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}