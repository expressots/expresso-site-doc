---
sidebar_position: 1
---

# Compressão

O pacote npm compression é um middleware que pode comprimir corpos de resposta para solicitações que passam por ele, o que pode ajudar a reduzir o tamanho dos dados que são enviados pela rede, levando a tempos de resposta mais rápidos e uso menor de largura de banda. Ele usa a biblioteca zlib para realizar a compressão gzip ou deflate, ambos amplamente suportados pelos navegadores da web modernos.

## Pacote de compressão

- Desempenho: Pode reduzir significativamente o tamanho do corpo da resposta, diminuindo assim o tempo que um cliente leva para baixar a resposta e renderizar o conteúdo.

- Eficiência: Ajuda na redução do consumo de largura de banda, o que é especialmente útil se o seu servidor estiver enviando grandes quantidades de dados ou se você tiver largura de banda limitada.
Contras do pacote npm Compression:

- Sobrecarga: Embora a compressão reduza o tamanho do corpo da resposta, ela adiciona alguma sobrecarga computacional do lado do servidor, pois o servidor deve comprimir o corpo da resposta antes de enviá-lo.

:::caution SOBRECARGA DA COMPRESSÃO
Isso pode não ser ideal para sites de alto tráfego onde os recursos do servidor estão em alta demanda.
:::

Nem todo conteúdo se beneficia da compressão. Arquivos binários como imagens e vídeos já são comprimidos e tentar comprimi-los ainda mais às vezes pode até aumentar o tamanho deles.

## Quando usar

Decidir quando usar a compressão depende do caso de uso. Se o seu site serve muitos dados textuais (HTML, CSS, JS, JSON, XML etc.), então usar o pacote de compressão npm pode resultar em economias significativas de largura de banda e benefícios de desempenho. No entanto, se o seu site tem um tráfego extremamente alto, a sobrecarga computacional adicional da compressão pode começar a se tornar um gargalo.

Em cenários de alto tráfego, pode ser mais benéfico usar um proxy reverso ou uma CDN (Rede de Entrega de Conteúdo) que pode servir ativos estáticos e realizar caching. Isso pode desviar parte do tráfego dos seus servidores principais e também servir conteúdo de locais geograficamente mais próximos dos usuários, resultando em tempos de resposta mais rápidos. Esses serviços geralmente lidam com a compressão por conta própria, o que significa que você não precisaria usar o pacote de compressão npm.

As abordagens modernas podem envolver uma combinação de técnicas - servir ativos estáticos de uma CDN, armazenar em cache respostas quando apropriado, utilizar HTTP/2 para multiplexação e dividir seu aplicativo em microserviços para distribuir a carga.

Lembre-se, essas abordagens não são mutuamente exclusivas. Muitas vezes, a melhor abordagem é usar uma combinação dessas técnicas com base nos requisitos específicos do seu aplicativo. Testar e monitorar seu aplicativo sob cargas de trabalho realistas pode ajudá-lo a tomar a melhor decisão.

## Usar com ExpressoTS

Instale o middleware de compressão npm.

```bash
npm i compression
```

Após a instalação, você pode adicionar o middleware ao seu aplicativo ExpressoTS.

```typescript
import compression from "compression";

// Adicione no método de criação do aplicativo no array de middleware
AppInstance.create(container, [compression()]);
```

Aqui está outro exemplo: usando compressão com filtros, filtrando solicitações que contêm corpos de carga útil maiores que 100 * 1024 bytes:

```typescript
AppInstance.create(container, [
        compression({
            level: 6,
            threshold: 100 * 1024,
            filter: (req, res) => {
                if (req.headers["x-no-compression"]) {
                    return false;
                }
                return compression.filter(req, res);
            },
        }),
    ]);
```

:::tip
Para mais informações sobre o pacote de compressão npm, por favor visite o **[pacote compression do npm](https://www.npmjs.com/package/compression)**.
:::

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas