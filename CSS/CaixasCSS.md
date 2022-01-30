## Introdução

Descrição
O Box Model é fundamental para fazer layouts para web porque ele vai te dar maior facilidade na hora de aplicar o CSS. Ao entender os conceitos do Box Model muitas questões do CSS começam a fazer sentido.

O que é o Box Model?
Cada elemento é representado como uma caixa retangular
Essa caixa possui propriedades de uma caixa em 2 dimensões (largura x altura)
Propriedades da caixa
Tamanho (largura x altura) → width | height
Conteúdo → content
Bordas → border
Preenchimento interno → padding
Espaços fora da caixa → margin

## Box Sizing

Descrição
Nessa aula vamos ver sobre o box-sizing que é o responsável pelo calculo do tamanho total da caixa (box).

Podemos usar a ferramenta de desenvolvedor do próprio navegador para visualizar as especificações dos elementos da página
E é por isso que é tão importante conhecer a propriedade do box-sizing.

Por padrão o navegador vai calcular o tamanho da caixa pelo content-box e vai somar com os outros boxes, no exemplo acima no lugar de 100px a caixa vai ficar com uma largura de 140px. Para que isso não aconteça, é possível mudar qual vai ser a referência para o calculo do tamanho da caixa adicionando a propriedade box-sizing: border-box;.

Dessa forma o elemento vai ficar com a largura (width) determinado, que no caso do exemplo citado é de 100px.

Normalmente usa-se o código abaixo como forma de "resetar" o box-sizing que vem por padrão nos navegadores.

* {
   box-sizing: border-box;
}

O seletor * seleciona todos os elementos da página.


## Display-block-inline

Display Block
 * Ocupa toda a linha, colocando o próximo elemento abaixo desse

Display Inline
 * Os elementos ficam ao lado do outro e não empurram outros elementos para baixo
