# Starter — A4 Maestro Suite

Template inicial pra entrega da Atividade 4. **10 flows de exemplo** rodando contra o app oficial **TestesQAMobile** (`com.apptestesmobile`).

## App alvo

- 🍎 [App Store BR](https://apps.apple.com/br/app/testes-qa-mobile/id6755933674)
- 🤖 [Play Store](https://play.google.com/store/apps/details?id=com.apptestesmobile)
- Bundle: `com.apptestesmobile`

Instale gratuitamente via lojas. App tem 35 exercícios em 12 categorias com bugs propositais.

## 10 flows incluídos

### Essenciais (5)

| # | Flow | Categoria do app | Tag |
|---|------|------------------|-----|
| 01 | `01-launch.yaml` | Smoke | `essencial` |
| 02 | `02-cadastro.yaml` | Funcional 1.1 | `essencial` |
| 03 | `03-calculadora.yaml` | Funcional 1.2 | `essencial` |
| 04 | `04-todo.yaml` | Funcional 1.3 | `essencial` |
| 05 | `05-onboarding.yaml` | Usabilidade 2.1 | `essencial` |

### Avançados (5)

| # | Flow | Recurso Maestro demonstrado | Tag |
|---|------|----------------------------|-----|
| 06 | `06-gestures-pinch.yaml` | `pinchToZoom` (Categoria 10 Gestos) | `avancado` |
| 07 | `07-performance-list.yaml` | `repeat` + `swipe` agressivo (Categoria 5) | `avancado` |
| 08 | `08-conditional-onboarding.yaml` | `runFlow when:` (conditional) | `avancado` |
| 09 | `09-fragment-login.yaml` | `runFlow:` reutilizando fragmento + env vars | `avancado` |
| 10 | `10-script-fakedata.yaml` | `runScript` JS pra gerar dados fake | `avancado` |

Plus: `_fragments/login.yaml` (fragmento reutilizável) + `maestro-config.yaml`.

## Como usar

### 1. Instalar Maestro CLI

Ver [`../../../docs/INSTALACAO_MAESTRO.md`](../../../docs/INSTALACAO_MAESTRO.md) — guia completo Mac/Linux/Windows + Docker.

### 2. Instalar app TestesQAMobile

Via Play Store (Android emulator com Google Play Services) ou App Store (iOS).

### 3. Iniciar emulator/device

```bash
emulator -avd Pixel_8_API_34 &
```

### 4. Rodar flows

```bash
# Todos
maestro test flows/

# Só essenciais (filtro por tag)
maestro test --include-tags essencial flows/

# Avançados
maestro test --include-tags avancado flows/

# Individual
maestro test flows/03-calculadora.yaml

# Com debug output (gera log + screenshots)
maestro test flows/ --debug-output ./debug
```

### 5. Maestro Studio (gravar próprio flow)

```bash
maestro studio
```

## Pra entrega da Atividade 4

1. **Fork** do repo público da disciplina
2. Crie pasta `exercicios/04-suite-maestro-cross-platform/aluno-<seu-github-username>/`
3. **Copie estes 10 flows** como base
4. **Estenda com mais 5 flows próprios** cobrindo categorias remanescentes (UI, Compatibilidade, Conectividade, Instalação, Interrupção, Localização, Acessibilidade, Segurança)
5. Push + abra PR
6. CI roda autograder; J.A.R.V.I.S. comenta status

## Convenção testID

Após v1.1 do app, todos elementos críticos terão `testID`. Ver `docs/TESTID_CONVENTION.md` no app (publicado em release notes da v1.1). Substituir `tapOn:text` por `tapOn:id` quando possível pra flows mais estáveis.

## Pitfalls comuns

- ❌ Path errado da entrega → CI ignora
- ❌ Flow sem `appId` → critério 2 falha
- ❌ Usar texto traduzido (PT/EN) sem `optional: true` → quebra em devices localizados
- ❌ Sleep fixo (`waitForTimeout`) → use `waitForAnimationToEnd`
- ❌ Não testar local antes do PR → CI frustra

## Recursos

- [Maestro Docs (oficial)](https://maestro.mobile.dev)
- [Maestro YAML Reference](https://maestro.mobile.dev/api-reference/commands)
- [`../../../docs/INSTALACAO_MAESTRO.md`](../../../docs/INSTALACAO_MAESTRO.md) — instalação
- [`../../../docker/`](../../../docker/) — Docker alternativa
