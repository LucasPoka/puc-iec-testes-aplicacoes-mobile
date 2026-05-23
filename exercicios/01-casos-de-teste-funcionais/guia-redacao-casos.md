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

Pergunte pra cada feature: **a que padrões essa feature deveria obedecer?**

| Letra | Pergunta | Exemplo de teste |
|---|---|---|
| **F**amiliarity | Como apps similares fazem? | "Bluesky deveria comportar como Twitter no logout?" |
| **E**xplainability | Mensagens de erro são claras? | "Senha fraca → texto explica por quê?" |
| **W**orld | Comporta certo no mundo real? | "Modo avião + tap em login = erro claro" |
| **H**istory | Versões anteriores comportavam assim? | "Update v1.34 quebrou backup automático?" |
| **I**mage | App tem reputação a manter (privacy/etc.)? | "DuckDuckGo: zero tracking confirmado?" |
| **C**omparable products | Como concorrentes fazem? | "Saber vs Notability — export PDF tem mesma qualidade?" |
| **C**laims | O que app promete na loja? | "App diz 'sync rápido' — 30s sync de 100 fotos passa?" |
| **U**ser expectations | O que aluno (usuário típico) espera? | "Salvar sem internet — espera-se persistir local?" |
| **P**roduct | Coerência interna do produto | "Tema escuro afeta todas as telas?" |
| **P**urpose | Cumpre propósito declarado? | "App de notas perde dados ao fechar = falha de propósito" |
| **S**tandards | Padrões iOS HIG / Material Design? | "Bottom nav segue Material spec?" |

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
