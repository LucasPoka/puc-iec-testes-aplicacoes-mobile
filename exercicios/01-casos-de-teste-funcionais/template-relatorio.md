# Atividade 1 — Casos de Teste Funcionais — [Seu Nome]

> Copia este arquivo, renomeia pra `<seu-nome>-casos-teste.md`, preenche e entrega via GitHub.
> **Tamanho alvo:** 1 página.

---

## 0. Identificação

- **Aluno:** [seu nome completo]
- **App escolhido:** [Immich / Bluesky / DuckDuckGo / Saber / Wikipedia iOS]
- **Plataforma testada:** [iOS / Android]
- **Versão do app:** [ex: 1.34.0 — checa em Configurações]
- **Feature escolhida:** [ex: "criar post" / "backup automático" / "buscar artigo"]
- **Justificativa de escolha da feature (1 frase):** [Por quê?]

---

## 1. Casos de teste

| ID | Tipo | Pré-condição | Passos | Resultado esperado |
|---|---|---|---|---|
| CT-01 | Funcional | [estado inicial] | 1. [...]<br/>2. [...]<br/>3. [...] | [observável + específico] |
| CT-02 | Funcional | [...] | 1. [...]<br/>2. [...] | [...] |
| CT-03 | Funcional | [...] | 1. [...] | [...] |
| CT-04 | Edge | [estado adverso: sem conexão / dados inválidos / permissão negada / app background] | 1. [...] | [erro tratado, app não crasha] |
| CT-05 | Edge | [...] | 1. [...] | [...] |
| CT-06 | Usabilidade | [...] | 1. [...] | [feedback visual / mensagem clara / a11y] |

> Pode adicionar mais linhas — alvo: **5-8 casos**.

---

## 2. Referência

[1 referência — slide aula 1, livro técnico, blog (Bach, Bolton, Knott), paper]

---

## 🎁 Bonus (opcional)

### Heurística FEW HICCUPPS aplicada (escolha 1-2 dos casos edge)

> **O que é + exemplos:** ver [guia-redacao-casos.md — seção FEW HICCUPPS](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/01-casos-de-teste-funcionais/guia-redacao-casos.md#heurística-few-hiccupps-bolton--pra-inspirar-casos)
>
> Resumo: 11 categorias de "oráculos" (Bolton) — pergunta "esta feature é consistente com X?" pra cada letra (F=Familiarity passado, E=Explainability, W=World, H=History, I=Image, C=Comparable products, C=Claims, U=User expectations, P=Product, P=Purpose, S=Standards).

| Caso | Heurística (1-2 letras) | Como aplica (1 frase) |
|---|---|---|
| CT-04 | **W** (World) + **U** (User expectations) | [Modo avião é mundo real; usuário espera que dados não sumam] |
| CT-05 | **S** (Standards) + **E** (Explainability) | [iOS HIG exige fluxo gracioso de permissão; mensagem deve explicar por quê] |

### Charter de teste exploratório (Bach SBTM)

```
Charter: explorar [feature X] do app [Y] usando [estratégia Z]
        durante [tempo] pra descobrir [tipo de risco].

Notas:
- [observação 1]
- [bug encontrado: ...]
- [pergunta aberta: ...]
```

### Cobertura de 2ª feature

[Repete tabela de casos pra outra feature]
