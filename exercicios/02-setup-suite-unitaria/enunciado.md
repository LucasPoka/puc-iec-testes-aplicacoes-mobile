# Atividade 2 — Setup + Suíte Unitária Mínima (10 pts)

**Disciplina:** Testes de Aplicações Mobile
**Entrega:** até **11/06/2026** (2 semanas)
**Modalidade:** individual
**Tempo estimado:** **~1-2 horas**

---

## Por que essa atividade

Aula 2 cobriu **setup completo de ambiente mobile** (Xcode/Android Studio) + **testes unitários** (XCTest/JUnit/Jest+RNTL). Esta atividade exercita o mínimo viável: ter ambiente funcional + suíte unitária verde.

## Tarefa (3 passos em ~1-2h)

### 1. Escolher 1 plataforma + fazer setup (~30min)

Escolha **1** (não precisa ambas — bonus se fizer):

| Plataforma | Setup mínimo |
|---|---|
| **iOS** | Xcode 16+ instalado + 1 simulator funcional (ex: iPhone 16) |
| **Android** | Android Studio + JDK 17 + 1 AVD funcional (ex: Pixel 8 API 34) |

Confirma com `xcrun simctl list devices` (iOS) ou `emulator -list-avds` (Android).

### 2. Criar projeto + 5 funções utilitárias (~20min)

**iOS:** Xcode → New Project → **App** (Swift, iOS). Adicionar arquivo `Utilities.swift` com 5 funções:

```swift
import Foundation

enum Utilities {
    static func isValidEmail(_ s: String) -> Bool { /* implementação */ }
    static func daysBetween(_ start: Date, _ end: Date) -> Int { /* ... */ }
    static func formatCurrencyBRL(_ value: Decimal) -> String { /* ... */ }
    static func capitalizeWords(_ s: String) -> String { /* ... */ }
    static func average(_ numbers: [Double]) -> Double { /* ... */ }
}
```

**Android:** Android Studio → New Project → **Empty Activity** (Kotlin). Adicionar arquivo `Utilities.kt` em `app/src/main/java/<package>/`:

```kotlin
object Utilities {
    fun isValidEmail(s: String): Boolean { /* ... */ }
    fun daysBetween(start: Long, end: Long): Long { /* ... */ }
    fun formatCurrencyBRL(value: Double): String { /* ... */ }
    fun capitalizeWords(s: String): String { /* ... */ }
    fun average(numbers: List<Double>): Double { /* ... */ }
}
```

> Implementar cada função é trivial — foco da atividade é **testar**, não fazer função complexa.

### 3. Escrever 5 testes unitários (~40min)

Pra cada função, mínimo **1 happy path + 1 edge case**. Mas pode ser só **5 testes no total** (não precisa 2 por função).

**iOS — XCTest:**

```swift
import XCTest
@testable import MeuApp

final class UtilitiesTests: XCTestCase {
    func test_isValidEmail_happyPath() {
        XCTAssertTrue(Utilities.isValidEmail("aluno@puc.br"))
    }
    
    func test_isValidEmail_emptyString_returnsFalse() {
        XCTAssertFalse(Utilities.isValidEmail(""))
    }
    
    func test_daysBetween_sameDay_returnsZero() { /* ... */ }
    func test_formatCurrencyBRL_oneThousand_returnsCorrectFormat() { /* ... */ }
    func test_average_emptyArray_returnsZero() { /* ... */ }
}
```

**Android — JUnit:**

```kotlin
import org.junit.Test
import org.junit.Assert.*

class UtilitiesTest {
    @Test
    fun isValidEmail_happyPath() {
        assertTrue(Utilities.isValidEmail("aluno@puc.br"))
    }
    
    @Test
    fun isValidEmail_emptyString_returnsFalse() {
        assertFalse(Utilities.isValidEmail(""))
    }
    
    // ... mais 3 testes
}
```

Rodar testes (`Cmd+U` no Xcode ou Run em Android Studio). **Todos têm que passar (verde).**

### 4. README + screenshot + entrega (~10min)

`README.md` com:
- Nome da atividade + seu nome
- Plataforma escolhida (iOS ou Android) + versões (Xcode 16.2 / Android Studio Iguana)
- Comando pra rodar testes (`xcodebuild test -scheme MeuApp -destination 'platform=iOS Simulator,name=iPhone 16'` OU `./gradlew testDebugUnitTest`)
- Screenshot de testes verdes (5/5 passing)
- 1 referência

---

## Critérios de avaliação

| Critério | Pontos |
|---|---|
| Setup funcional (testes rodam em máquina limpa via README) | 3 |
| 5 funções implementadas | 2 |
| 5 testes verdes (rodando + passando) | 4 |
| README + screenshot | 1 |

**Total: 10 pts**

> 🎁 **Bonus** (não conta pra máxima, considerado em arredondamento):
> - Setup nas 2 plataformas (iOS + Android) com 2 suítes
> - Coverage ≥70% (Xcode coverage ou JaCoCo) com print
> - Mock com MockK (Android) ou test double XCTest (iOS) em pelo menos 1 teste
> - GitHub Actions com workflow `tests.yml` rodando + verde no PR
> - Testes parametrizados (`@ParameterizedTest` JUnit5 ou XCTContext em XCTest)

---

## Recomendado: use IA pra acelerar

Vimos na aula 1. Use Cursor / Gemini CLI / Claude Code:

> "Implemente `isValidEmail` em Swift usando regex simples."

> "Crie 5 testes XCTest pra Utilities, cobrindo happy path + edge case."

> "Configure JaCoCo no `build.gradle` Android pra gerar coverage."

⚠️ **Valida cada bloco antes de colar.** IA às vezes mistura APIs antigas (XCTest pre-iOS 16) ou JUnit 4 vs 5.

---

## Entrega via GitHub (fork + PR)

1. Fork do repo público: <https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile>
2. Branch `entrega/atividade-2-<seu-nome>` no seu fork
3. **Criar pasta** `exercicios/02-setup-suite-unitaria/<seu-nome>/` no SEU fork (não no upstream)
4. Colocar dentro: projeto Xcode ou Android Studio + README.md + screenshot
5. Commit + push pro seu fork
6. Submeter no Canvas com link do commit

**Detalhes do workflow:** ver página *"Como entregar atividades pelo GitHub"* no Canvas módulo Início.

> **Tamanho do repo:** não comite `Pods/`, `DerivedData/`, `.gradle/`, `build/`, `local.properties`. Use `.gitignore` padrão (Xcode template ou Android Studio template já tem).

## O que você NÃO precisa fazer

- Não precisa **app inteiro** (só projeto template + 1 classe Utilities testada)
- Não precisa **UI tests** (só unit) — vai ter atividade pra isso depois
- Não precisa Mock / Stub formais (bonus)
- Não precisa CI Actions (bonus)
- Não precisa **ambas** plataformas (1 só — bonus se fizer)

## Material de apoio (todos no GitHub público)

- **[template-relatorio.md](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/template-relatorio.md)** — README modelo
- **[guia-passo-a-passo.md](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/guia-passo-a-passo.md)** — comandos + troubleshooting
- **[Material aula 2](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/tree/main/material-de-apoio/aula-02)** (XCTest, JUnit5, MockK, Bach SBTM)
- **[Slide aula 2](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/slides/aula-02/aula-02-setup-manual-unit.pdf)**
