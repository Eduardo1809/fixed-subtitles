const i={"website-name":r=>{const{normalize:e}=r;return e(["Legendas Corrigidas"])},"website-description":r=>{const{normalize:e}=r;return e(["Legendas corrigidas de fansubs e sites de streaming"])},"not-found":r=>{const{normalize:e}=r;return e(["A página requisitada não foi encontrada."])},"not-found-title":r=>{const{normalize:e}=r;return e(["Página não encontrada"])},"contact-link":r=>{const{normalize:e}=r;return e(["Contato"])},wip:r=>{const{normalize:e}=r;return e(["Página em construção"])},"darkmode-tooltip":r=>{const{normalize:e}=r;return e(["Trocar cores"])},"locale-tooltip":r=>{const{normalize:e}=r;return e(["Trocar língua"])},"code-tooltip":r=>{const{normalize:e}=r;return e([`Abrir página do projeto
(você pode baixar todas as legendas lá)`])},index:{headline:r=>{const{normalize:e}=r;return e(["Procurando legendas corrigidas?"])},description:r=>{const{normalize:e,interpolate:o,named:n}=r;return e([o(n("totalFixedFiles"))," legendas corrigidas, só baixar!"])},latest_updates:r=>{const{normalize:e}=r;return e(["Últimas atualizações"])},actions:{browse:{title:r=>{const{normalize:e}=r;return e(["Procuro legendas"])},description:r=>{const{normalize:e}=r;return e(["Encontre e baixe legendas corrigidas"])},action:r=>{const{normalize:e,interpolate:o,named:n}=r;return e(["Confira todos os ",o(n("n"))," conteúdos corrigidos"])}}},explainer:{title:r=>{const{normalize:e}=r;return e(["Por que corrigir legendas?"])},time:r=>{const{normalize:e}=r;return e(["Algumas vezes os tradutores não podem corrigir elas"])},time2:r=>{const{normalize:e}=r;return e(["É possível que eles estejam sem tempo ocupados com outros projetos, tenham parado de traduzir ou até mesmo, no caso de serviços de streaming, perderam as suas licenças."])},opensource:r=>{const{normalize:e}=r;return e(["Várias pessoas podem ajudar"])},opensource2:r=>{const{normalize:e}=r;return e(["É fácil ignorar os próprios erros, mas se várias pessoas ajudarem é possível evitar esses problemas"])}}},contact:{title:r=>{const{normalize:e}=r;return e(["Contato"])},headline:r=>{const{normalize:e}=r;return e(["Encontrou um erro? Reporte ele aqui. Se você encontrou um erro em uma legenda ou aqui no site descreva onde podemos encontrá-lo. Se for possível, coloque a URL."])},name:r=>{const{normalize:e}=r;return e(["Nome (opcional)"])},message:r=>{const{normalize:e}=r;return e(["Mensagem"])},submit:r=>{const{normalize:e}=r;return e(["Enviar"])},extra:r=>{const{normalize:e,interpolate:o,named:n}=r;return e(["Você também pode entrar em contato na ",o(n("project")),"."])},"extra-project":r=>{const{normalize:e}=r;return e(["página do projeto no GitHub"])},messages:{"missing-data":r=>{const{normalize:e}=r;return e(["Preencha todos os campos."])},submitting:r=>{const{normalize:e}=r;return e(["Enviando..."])},submitted:r=>{const{normalize:e}=r;return e(["Sua mensagem foi enviada."])},error:r=>{const{normalize:e}=r;return e(["Ocorreu um erro ao enviar a mensagem."])}}},"full-season":r=>{const{normalize:e,interpolate:o,named:n}=r;return e([" ",o(n("season"))," de ",o(n("seasonYear"))])},episodes:r=>{const{normalize:e,interpolate:o,named:n,plural:a}=r;return a([e(["Nenhum episódio"]),e([o(n("n"))," episódio"]),e([o(n("n"))," episódios"])])},show_list:r=>{const{normalize:e}=r;return e(["Conteúdos disponíveis"])},"data-source":r=>{const{normalize:e,interpolate:o,named:n}=r;return e(["Dados de animes fornecidos por ",o(n("anilist")),". Projeto hospedado no ",o(n("github")),". Você pode contribuir enviando pull requests."])},"pagination-text":r=>{const{normalize:e,interpolate:o,named:n}=r;return e(["Página ",o(n("current"))," de ",o(n("total"))])},"select-group":r=>{const{normalize:e}=r;return e(["Escolha um dos grupos acima."])},"file-count":r=>{const{normalize:e,interpolate:o,named:n,plural:a}=r;return a([e(["Nenhum arquivo"]),e([o(n("n"))," arquivo"]),e([o(n("n"))," arquivos"])])},"commit-count":r=>{const{normalize:e,interpolate:o,named:n,plural:a}=r;return a([e(["Nenhum commit"]),e([o(n("n"))," commit"]),e([o(n("n"))," commits"])])},"changed-lines-count":r=>{const{normalize:e,interpolate:o,named:n,plural:a}=r;return a([e(["Nenhuma linha corrigida"]),e([o(n("n"))," linha corrigida"]),e([o(n("n"))," linhas corrigidas"])])},"download-all":r=>{const{normalize:e}=r;return e(["Baixar tudo como zip"])},"report-error":r=>{const{normalize:e}=r;return e(["Reportar um erro"])},show:r=>{const{normalize:e}=r;return e(["Nome"])},season:r=>{const{normalize:e}=r;return e(["Temporada"])},last_update:r=>{const{normalize:e}=r;return e(["Atualizado em"])},"download-modal":{title:r=>{const{normalize:e,plural:o}=r;return o([e(["Baixando arquivo"]),e(["Baixando arquivos"])])},"in-progress":r=>{const{normalize:e}=r;return e(["Aguarde enquanto o download termina."])},finished:r=>{const{normalize:e,plural:o}=r;return o([e(["O download terminou. Se você tiver acesso ao vídeo original do grupo basta salvar a legenda na pasta do vídeo, senão você terá que abrir a legenda manualmente e precisará instalar"]),e(["O download terminou. Se você tiver acesso ao vídeo original do grupo basta salvar as legendas na pasta dos vídeos, senão você terá que abrir as legendas manualmente e precisará instalar"])])},fonts:r=>{const{normalize:e,plural:o}=r;return o([e(["a seguinte fonte:"]),e(["as seguintes fontes:"])])},"font-variant-regular":r=>{const{normalize:e}=r;return e(["regular"])},"font-variant-bold":r=>{const{normalize:e}=r;return e(["negrito"])},"font-variant-italic":r=>{const{normalize:e}=r;return e(["itálico"])},"font-variant-bolditalic":r=>{const{normalize:e}=r;return e(["negrito itálico"])},"font-variant-and":r=>{const{normalize:e}=r;return e([" e "])},"font-variant-comma":r=>{const{normalize:e}=r;return e([", "])},download:r=>{const{normalize:e}=r;return e(["Baixar"])},cancel:r=>{const{normalize:e}=r;return e(["Cancelar"])},close:r=>{const{normalize:e}=r;return e(["Fechar"])}},"commit-modal":{title:r=>{const{normalize:e}=r;return e(["Lista de commits"])},explainer:r=>{const{normalize:e,plural:o}=r;return o([e(["Cada commit é um conjunto de modificações que foram feitas para corrigir os arquivos. Você pode abrir o commit abaixo para ver o que foi modificado."]),e(["Cada commit é um conjunto de modificações que foram feitas para corrigir os arquivos, alguns corrigem um arquivo, outros corrigem vários. Você pode abri-los para ver o que foi modificado nos arquivos."])])},date:r=>{const{normalize:e,interpolate:o,named:n}=r;return e(["publicado em ",o(n("date"))])},close:r=>{const{normalize:e}=r;return e(["Fechar"])}},"group-list":{filename:r=>{const{normalize:e}=r;return e(["Nome do arquivo"])},modified:r=>{const{normalize:e}=r;return e(["Última modificação"])},changedLines:r=>{const{normalize:e}=r;return e(["Correções"])}},seasons:{SPRING:r=>{const{normalize:e}=r;return e(["Primavera"])},SUMMER:r=>{const{normalize:e}=r;return e(["Verão"])},FALL:r=>{const{normalize:e}=r;return e(["Outono"])},WINTER:r=>{const{normalize:e}=r;return e(["Inverno"])}},formats:{TV:r=>{const{normalize:e}=r;return e(["TV"])},TV_SHORT:r=>{const{normalize:e}=r;return e(["Curta"])},MOVIE:r=>{const{normalize:e}=r;return e(["Filme"])},SPECIAL:r=>{const{normalize:e}=r;return e(["Especial"])},OVA:r=>{const{normalize:e}=r;return e(["OVA"])},ONA:r=>{const{normalize:e}=r;return e(["ONA"])},MUSIC:r=>{const{normalize:e}=r;return e(["Musical"])}},languages:{en:r=>{const{normalize:e}=r;return e(["Inglês"])},"en-us":r=>{const{normalize:e}=r;return e(["Inglês Americano"])},pt:r=>{const{normalize:e}=r;return e(["Português"])},"pt-br":r=>{const{normalize:e}=r;return e(["Português Brasileiro"])},"pt-pt":r=>{const{normalize:e}=r;return e(["Português Lusitano"])},es:r=>{const{normalize:e}=r;return e(["Espanhol"])},"es-la":r=>{const{normalize:e}=r;return e(["Espanhol Latino Americano"])},"es-es":r=>{const{normalize:e}=r;return e(["Espanhol Europeu"])}},search:{button:r=>{const{normalize:e}=r;return e(["Pesquisar"])},label:r=>{const{normalize:e}=r;return e(["Pesquisar"])},placeholder:r=>{const{normalize:e}=r;return e(["Pesquisar legendas..."])},title:r=>{const{normalize:e,interpolate:o,named:n}=r;return e(['Procurando "',o(n("query")),'"'])},not_found:r=>{const{normalize:e}=r;return e(["Nada encontrado :/"])}}};export{i as default};
