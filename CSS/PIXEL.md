## Introdução

Descrição
Nessa aula vamos falar sobre valores e unidades de medidas no CSS e como podemos usar a documentação do MDN para aprender mais.

Valores e unidades de medidas
Cada propriedade possui valores property: value
Estudo constante a fim de entender as propriedades e seus valores
Na prática
Como conhecer e estudar os valores na documentação?
<color> <length>
Os termos podem variar values ou data types
Documentação MDN: https://developer.mozilla.org/en-US/



## Tipos numéricos e unidades comuns

Descrição
Nessa aula vamos falar sobre tipos numéricos.

Tipos numéricos
<integer> - número inteiro como -10 ou 223
<number> - número decimal como -2.4, 64 ou 0.234
<dimension> - é um <number> com uma unidade junto: 90deg, 2s, 8px
<percentage> - representa uma fração de outro número: 50%
Unidades comuns
<length> - é um dos mais usados no CSS e representa um valor de distância: px, em, vw
<angle> - representa um ângulo: deg, rad, turn
<time> - representa um tempo: s, ms
<resolution> - representa resoluções para dispositivos: dpi


## Distâncias absolutas e relativas

Descrição
Nessa aula vamos entender sobre distâncias absolutas e relativas.

Distâncias absolutas <length>
São fixas e não alteram seu valor.

| Unidade  | Nome                | Equivalência         |
|----------|---------------------|----------------------|
| cm       | Centímetros         | 1cm = 96px/2.54      | 
| in       | Inches (polegadas)  | 1in = 2.54cm = 96px  | 
| px       | Pixels              | 1px = 1/96th of 1in  |
*o mais comum e mais utilizado é o px

*não é recomendado usar cm

Distâncias relativas
São relativas a um outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.
Benefício: Maior adaptação aos diferentes tipos de tela.
| Unidade  | Relativo a                                    |
|----------|-----------------------------------------------|
| em       | Tamanho da font do elemento pai               |
| rem      | Tamanho da font do elemento raiz (root/html)  | 
| vw       | 1% da viewport wid                            |  
| vh       | 1% da viewport height                         |
Normalmente o tamanho da font padrão do navegador é de 16px e para mudar esse valor temos que fazer a alteração no root ou no elemento html.
:root {
	font-size: 18px;
}

/* OU */

html {
	font-size: 18px;
}
O viewport é a parte da tela que está sendo exibida. No caso dos navegadores web, é o que é exibido na janela/tela do documento. Conteúdos que estão fora do viewport só serão exibidos quando feito um scroll da área de visualização.


## Porcentagens

Descrição
As porcentagens são valores bem flexíveis
Em muitos casos é tratado da mesma maneira que as distâncias <length>
Sempre será relativo a algum valor
💻 Exemplo
Relativo ao elemento pai

<!--
<ul>
	<li>One</li>
	<li>Two</li>
	<li>Three
		<ul>
			<li>Three A</li>
			<li>Three B</li>
			<ul>
				<li>Three B 2</li>
			</ul>
		</ul>
	</li>
</ul>
li {
    font-size: 80%;
}

-->