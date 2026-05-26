# Guia rápido — como redigir casos de teste claros

> Manual de 1 página pra você não travar na atividade.

---

## Estrutura mínima de um caso de teste

| Campo | O que é | Exemplo bom | Exemplo ruim |
|---|---|---|---|
| **ID** | identificador único | `CT-01` | `teste 1` |
| **Tipo** | classificação | `Funcional`, `Edge`, `Usabilidade`, `Performance` | `caso` |
| **Pré-condição** | estado antes do teste | "App logado, 3 fotos na galeria" | "tudo configurado" |
| **Passos** | ações numeradas + atômicas | `1. Tap "Backup"; 2. Selecionar "WiFi only"; 3. Aguardar 30s` | "fazer backup" |
| **Resultado esperado** | comportamento observável | "Notificação 'Backup completo' aparece. Contador mostra 3/3 fotos." | "funciona" |

## Regra de ouro: outro tester consegue executar?

Se a pessoa que pegar seu caso amanhã não souber **exatamente o que clicar**, falta detalhe. Teste o seguinte:

> Mostra o caso pra alguém que **nunca usou o app**. Se ela conseguir executar sem perguntar nada, ta bom.

## Tipos de teste vs aula 1

| Tipo | O que cobre | Quando usar |
|---|---|---|
| **Funcional** | Feature faz o que promete (happy path) | Sempre. Maioria dos casos. |
| **Edge / Sad path** | Comportamento em condição adversa | Sem conexão, dados inválidos, permissão negada, app em background, idle long, baixa memória |
| **Usabilidade** | Feedback visual, clareza de mensagens, fluxo intuitivo | UI feedback, mensagens de erro, animações |
| **Acessibilidade** | TalkBack/VoiceOver, contraste, tap target | Bonus — Knott (2014) defende como pilar |
| **Performance** | Cold start, FPS, memória, bateria | Bonus — aulas posteriores |
| **Integração** | Feature conversa certo com outras | Quando fluxo cruza múltiplas features |
| **Segurança** | OWASP MASVS controles | Aulas posteriores |

## Heurística FEW HICCUPPS (Bolton) — pra inspirar casos

### O que é

Criada por **Michael Bolton** (Developsense), FEW HICCUPPS é uma **mnemônica** de 11 categorias de "oráculos" — referências contra as quais comparar o comportamento do app pra detectar bugs. Pergunta-chave:

> **"Esta feature está consistente com X?"**

Cada letra é um X diferente. Quando algo diverge da expectativa, vira **suspeita de bug** = ideia pra caso de teste.

**Fonte oficial:** <https://developsense.com/blog/2012/10/few-hiccupps>

### Tabela de aplicação

Pergunte pra cada feature: **"a que padrões essa feature deveria obedecer?"**

| Letra | Pergunta | Exemplo de teste |
|---|---|---|
| **F**amiliarity | É consistente com bugs/comportamentos **passados** já conhecidos? | "Bug clássico de cache stale ao trocar usuário — testou nesse app?" |
| **E**xplainability | Comportamento se **explica facilmente** pra outro humano? | "Senha fraca → mensagem explica POR QUÊ é fraca?" |
| **W**orld | Comporta certo no **mundo real** (não só no laboratório)? | "Modo avião + tap em login = erro claro?" |
| **H**istory | Bate com **versões anteriores** do app/feature? | "Backup automático funcionava na v1.33 — v1.34 ainda funciona?" |
| **I**mage | Mantém **reputação/imagem** que app vende? | "DuckDuckGo promete privacy — alguma feature vaza dado?" |
| **C**omparable products | Comporta como **concorrentes** consagrados? | "Saber export PDF vs Notability — qualidade visual mesma?" |
| **C**laims | Cumpre o que app **promete** (loja, marketing, docs)? | "Loja diz 'backup em background' — funciona com app fechado mesmo?" |
| **U**ser expectations | Bate com o que **usuário típico espera**? | "Salvar nota sem internet — espera-se persistir local automaticamente" |
| **P**roduct | É **coerente internamente** (com outras partes do mesmo app)? | "Tema escuro nas Configs afeta todas as telas inclusive modal?" |
| **P**urpose | Cumpre **propósito declarado** da feature/app? | "App de notas que perde dados ao fechar = falha de propósito" |
| **S**tandards | Segue **padrões da plataforma** (iOS HIG / Material Design / WCAG)? | "Bottom nav segue Material 3? Tap target ≥48dp?" |

### Como aplicar nos casos edge (passo a passo)

1. **Escolha 1-2 casos edge** que você redigiu (CT-04, CT-05, etc.)
2. Pra cada um, pergunta: **"qual letra de FEW HICCUPPS sustenta esse caso?"**
3. Anota a letra + 1 frase justificando

### Exemplos concretos — casos edge + heurística aplicada

#### Exemplo A — Caso edge "Sem conexão"

> **CT-04 (Edge):** Modo avião + tentar criar post no Bluesky → app mostra erro claro, dados preservados.

| Heurística | Como aplica | Justificativa |
|---|---|---|
| **W** (World) | Mundo real tem conectividade intermitente (metrô, voo, área rural). | App tem que funcionar fora do laboratório com WiFi perfeito. |
| **U** (User expectations) | Usuário espera que o que digitou **não se perca**. | Forms que zeram dados ao falhar = anti-padrão histórico. |
| **C** (Claims) | App promete "post sempre que quiser". | Falha silenciosa quebra promessa. |

#### Exemplo B — Caso edge "Permissão negada"

> **CT-05 (Edge):** Negar permissão de câmera ao abrir feature de upload → app não crasha + explica como reabilitar.

| Heurística | Como aplica | Justificativa |
|---|---|---|
| **S** (Standards) | iOS HIG + Android Material exigem fluxo gracioso de permissão. | Padrão da plataforma. |
| **E** (Explainability) | Mensagem precisa **explicar por quê precisa** dessa permissão + caminho pra reabilitar. | Mensagem técnica/genérica = bug de UX. |
| **P** (Purpose) | Feature de upload **depende** de câmera ou galeria. Negar = bloqueia propósito. | Sem fallback = falha de propósito. |

#### Exemplo C — Caso edge "App em background"

> **CT-06 (Edge):** Iniciar backup de fotos no Immich + mandar app pra background + voltar 5min depois → backup continua ou retoma sem perder progresso.

| Heurística | Como aplica | Justificativa |
|---|---|---|
| **C** (Claims) | Loja diz "backup em background". | Promessa explícita do produto. |
| **U** (User expectations) | Usuário não quer ficar com app aberto na tela por 30min. | Comportamento esperado de app de backup. |
| **H** (History) | Versões anteriores faziam isso? Regressão? | Captura quebra de feature entre releases. |

#### Exemplo D — Caso edge "Dados inválidos"

> **CT-07 (Edge):** Digitar e-mail malformado (`abc@`, sem TLD) ao criar conta → erro inline imediato.

| Heurística | Como aplica | Justificativa |
|---|---|---|
| **E** (Explainability) | Mensagem deve dizer **o que está errado** ("e-mail inválido — falta domínio"), não só "erro". | Erro genérico = UX ruim. |
| **F** (Familiarity) | Form validation em tempo real é padrão **conhecido**. | Bug clássico: validar só no submit. |
| **S** (Standards) | HTML5 / iOS / Material têm specs de validação inline. | Padrão da plataforma. |

### Dica final

Pra esta atividade (bonus), **escolha 1-2 casos edge** e aplica 1-2 letras em cada. Não precisa cobrir as 11 letras. **Qualidade > quantidade.**

## 5 padrões de bug pra incluir como caso edge

1. **Sem conexão** — modo avião + tentar feature que precisa rede
2. **Dados inválidos** — campos vazios, e-mail malformado, senha curta, char especial
3. **Permissão negada** — usuário recusa permissão (câmera, localização, notificação)
4. **App em background** — pausa no meio do fluxo, volta depois de 5min
5. **Rotacionar device** — landscape ↔ portrait no meio de form
6. (bonus) **Baixa memória** — multitask muitos apps, voltar pro testado
7. (bonus) **Idle long** — feature aberta, deixar 10min, voltar

## Checklist final

- [ ] Cada caso tem ID único
- [ ] Passos numerados e específicos (não vagos)
- [ ] Resultado esperado é **observável** (não "funciona")
- [ ] Mix tem: 3+ funcional, 1+ edge, 1+ usabilidade
- [ ] Total: 5-8 casos
- [ ] Citei a versão do app testada
- [ ] Citei 1 referência
- [ ] Tabela markdown formatada (pode preview no GitHub pra checar)
