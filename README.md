# kanban-angular

## Passos
Para executar o projeto basta rodar os seguintes comandos na pasta BACK:

```
npm i

npm run server`
```

E os seguintes comandos na pasta FRONT

```
npm i -f

ng serve
```

## Considerações:

Primeiramente gostaria de agradecer a oportunidade, gostei bastante da proposta do teste, e tive a oportunidade neste meio tempo de atualizar meus conhecimentos em função das atualizações do Angular. 

Falando um pouco mais sobre o projeto, sempro utilizo o Angular CLI para dar o start em meus projetos, bem como o SASS em conjunto com a metodologia BEM para implementação e padronização de folhas de estilo, e o ngx-bootstrao que implementa abstrai a implentação dos componentes do bootstrap para o angular, é necessário rodar o `npm i -f` com a tag `--force` pois o ngx-bootstrap ainda não lançou oficialmente uma versão para o Angular 14, porém a biblioteca ainda assimm funciona normalmente. Acredito que eu tenha resolvido todos os requitos do desafio, com exceção da implementação do docker, tentei dar uma olhada, mas precisaria de mais de estudo para implementar, em relação ao dompurify não utilizei pois o angular já contém features que já resolvem o problema e por padrão executa um sanitize nos códigos, já o marked por uma decisão de UX/UI, não vi muito sentido se tratanto do contexto de design e proporta do board em utilizar. 

Novamente deixo aqui meus sinceros agradecimento, e me coloco a disposição para quaisquer esclarecimentos sobre os códigos, muito obrigado!
