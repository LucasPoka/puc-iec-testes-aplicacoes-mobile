# README — Atividade 2 Setup + Suíte Unitária — [Seu Nome]

> Use isso como base do README.md do seu projeto.

## Identificação

- **Aluno:** [seu nome]
- **Plataforma:** [iOS / Android]
- **Versão IDE:** [Xcode 16.2 / Android Studio Iguana 2024.1]
- **Versão SDK:** [iOS 18 / API 34]
- **Repo (seu fork):** [URL]

## Setup verificado

```bash
# iOS
xcodebuild -version
xcrun simctl list devices | grep "iPhone 16"

# Android
./gradlew --version
emulator -list-avds
```

## Como rodar os testes

### iOS
```bash
xcodebuild test \
  -scheme MeuApp \
  -destination 'platform=iOS Simulator,name=iPhone 16'
```

### Android
```bash
./gradlew testDebugUnitTest
```

## Estrutura do projeto

```
MeuApp/
├── MeuApp/
│   └── Utilities.swift       ← (iOS) suas 5 funções
├── MeuAppTests/
│   └── UtilitiesTests.swift  ← seus 5 testes
└── MeuApp.xcodeproj
```

OU (Android):

```
app/
├── src/main/java/com/example/meuapp/
│   └── Utilities.kt
└── src/test/java/com/example/meuapp/
    └── UtilitiesTest.kt
```

## Funções implementadas

| Função | O que faz |
|---|---|
| `isValidEmail` | Valida formato e-mail (regex simples) |
| `daysBetween` | Calcula dias entre 2 datas |
| `formatCurrencyBRL` | Formata Decimal/Double como "R$ 1.234,56" |
| `capitalizeWords` | "hello world" → "Hello World" |
| `average` | Média de array de doubles |

## Casos de teste

| ID | Função | Tipo | Esperado |
|---|---|---|---|
| T01 | isValidEmail | Happy | `"a@b.c"` → true |
| T02 | isValidEmail | Edge | `""` → false |
| T03 | daysBetween | Happy | mesmo dia → 0 |
| T04 | formatCurrencyBRL | Happy | `1000` → `"R$ 1.000,00"` |
| T05 | average | Edge | `[]` → 0 |

## Screenshot

![Testes verdes 5/5](./screenshot-tests.png)

> Substitua imagem pelo print real do test runner.

## Referência

[1 referência — XCTest docs, JUnit 5 docs, slide aula 2, Fowler Practical Pyramid]

---

## 🎁 Bonus implementado (opcional)

- [ ] 2 plataformas (iOS + Android)
- [ ] Coverage ≥70% — [Xcode coverage / JaCoCo report]
- [ ] Mock com MockK / OCMock em 1 teste
- [ ] CI GitHub Actions verde
- [ ] Testes parametrizados (`@ParameterizedTest` / `XCTContext.runActivity`)

[Cole prints / paths relevantes]
