# Guia passo a passo — Atividade 2 (Setup + Suíte Unitária)

> Manual prático ~1-2h. Escolha **iOS OU Android** (não ambos).

---

## Caminho A — iOS (XCTest)

### A1. Pré-requisitos

- macOS (XCode só roda em Mac)
- **Xcode 16+** — Mac App Store (download grande, ~10GB)
- Simulator funcional

```bash
xcodebuild -version
# Xcode 16.2 ou superior
```

### A2. Criar projeto

1. Xcode → File → New → Project
2. iOS → **App** → Next
3. Product Name: `MeuApp` · Interface: SwiftUI · Language: Swift · ✅ Include Tests
4. Save

Estrutura criada automaticamente:
```
MeuApp/
├── MeuApp/
│   ├── MeuAppApp.swift
│   └── ContentView.swift
├── MeuAppTests/
│   └── MeuAppTests.swift
└── MeuApp.xcodeproj
```

### A3. Adicionar `Utilities.swift`

File → New → File → Swift File → `Utilities.swift` em `MeuApp/`:

```swift
import Foundation

enum Utilities {
    static func isValidEmail(_ s: String) -> Bool {
        let pattern = #"^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"#
        return s.range(of: pattern, options: .regularExpression) != nil
    }
    
    static func daysBetween(_ start: Date, _ end: Date) -> Int {
        let calendar = Calendar.current
        return calendar.dateComponents([.day], from: start, to: end).day ?? 0
    }
    
    static func formatCurrencyBRL(_ value: Decimal) -> String {
        let formatter = NumberFormatter()
        formatter.numberStyle = .currency
        formatter.locale = Locale(identifier: "pt_BR")
        return formatter.string(from: value as NSDecimalNumber) ?? ""
    }
    
    static func capitalizeWords(_ s: String) -> String {
        s.capitalized
    }
    
    static func average(_ numbers: [Double]) -> Double {
        guard !numbers.isEmpty else { return 0 }
        return numbers.reduce(0, +) / Double(numbers.count)
    }
}
```

### A4. Escrever testes

Substituir conteúdo de `MeuAppTests/MeuAppTests.swift`:

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
    
    func test_daysBetween_sameDay_returnsZero() {
        let now = Date()
        XCTAssertEqual(Utilities.daysBetween(now, now), 0)
    }
    
    func test_formatCurrencyBRL_oneThousand_containsR$() {
        let s = Utilities.formatCurrencyBRL(1000)
        XCTAssertTrue(s.contains("R$"))
    }
    
    func test_average_emptyArray_returnsZero() {
        XCTAssertEqual(Utilities.average([]), 0)
    }
}
```

### A5. Rodar (Cmd+U no Xcode)

5 testes devem ficar verdes. Screenshot.

### A6. CLI (opcional pra README)

```bash
xcodebuild test \
  -scheme MeuApp \
  -destination 'platform=iOS Simulator,name=iPhone 16,OS=18.0'
```

---

## Caminho B — Android (JUnit + Kotlin)

### B1. Pré-requisitos

- **Android Studio** Iguana 2024.1+ — <https://developer.android.com/studio>
- **JDK 17** (Android Studio bundleia)
- AVD configurado (Tools → Device Manager → Create Device → Pixel 8 API 34)

```bash
./gradlew --version
# Gradle 8.x + JDK 17
```

### B2. Criar projeto

1. Android Studio → New Project → **Empty Activity**
2. Name: `MeuApp` · Package: `com.example.meuapp` · Language: Kotlin · Min SDK: API 24
3. Finish

### B3. Adicionar `Utilities.kt`

`app/src/main/java/com/example/meuapp/Utilities.kt`:

```kotlin
package com.example.meuapp

import java.text.NumberFormat
import java.util.Locale
import java.util.concurrent.TimeUnit

object Utilities {
    private val emailRegex = Regex("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$")

    fun isValidEmail(s: String): Boolean = emailRegex.matches(s)

    fun daysBetween(startMillis: Long, endMillis: Long): Long =
        TimeUnit.MILLISECONDS.toDays(endMillis - startMillis)

    fun formatCurrencyBRL(value: Double): String =
        NumberFormat.getCurrencyInstance(Locale("pt", "BR")).format(value)

    fun capitalizeWords(s: String): String =
        s.split(" ").joinToString(" ") { it.replaceFirstChar { ch -> ch.uppercaseChar() } }

    fun average(numbers: List<Double>): Double =
        if (numbers.isEmpty()) 0.0 else numbers.sum() / numbers.size
}
```

### B4. Escrever testes

`app/src/test/java/com/example/meuapp/UtilitiesTest.kt`:

```kotlin
package com.example.meuapp

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

    @Test
    fun daysBetween_sameDay_returnsZero() {
        val now = System.currentTimeMillis()
        assertEquals(0L, Utilities.daysBetween(now, now))
    }

    @Test
    fun formatCurrencyBRL_oneThousand_containsR$() {
        val s = Utilities.formatCurrencyBRL(1000.0)
        assertTrue(s.contains("R$"))
    }

    @Test
    fun average_emptyList_returnsZero() {
        assertEquals(0.0, Utilities.average(emptyList()), 0.001)
    }
}
```

### B5. Rodar

Android Studio → Run → All Tests OU CLI:

```bash
./gradlew testDebugUnitTest
```

5 testes verdes. Screenshot.

---

## Passo final — README + entrega

Copia `template-relatorio.md` desta pasta pra `README.md` na raiz do seu projeto.

Tirar screenshot dos testes verdes:
- iOS: Test Navigator (Cmd+6) com 5 ✓ verdes
- Android: Run window com 5 PASSED

Entrega via fork + PR — ver guia *"Como entregar atividades pelo GitHub"* no Canvas.

---

## Troubleshooting

### iOS

| Problema | Solução |
|---|---|
| Build falha — "No such module 'XCTest'" | Confere que tem target `MeuAppTests` no projeto |
| Simulator não abre | Xcode → Window → Devices and Simulators → criar manual |
| Cmd+U não roda nada | Verifica scheme — Edit Scheme → Test → adiciona `MeuAppTests` |

### Android

| Problema | Solução |
|---|---|
| `Could not find org.junit:junit:4.x` | `app/build.gradle` → adicionar `testImplementation 'junit:junit:4.13.2'` |
| `Cannot resolve symbol 'Test'` | Confere `import org.junit.Test` no topo |
| Build sync infinito | Tools → Invalidate Caches and Restart |
| Gradle wrapper not found | `gradle wrapper` no projeto raiz |

## Dicas de IA assistida

Prompts úteis:

> "Implemente Utilities.swift com 5 funções: isValidEmail (regex), daysBetween (Calendar), formatCurrencyBRL (NumberFormatter ptBR), capitalizeWords, average."

> "Escreva 5 testes XCTest pra Utilities — 1 happy + 1 edge por função importante."

> "Como configurar JaCoCo coverage no Android Studio com Gradle?"

⚠️ Valide cada bloco — IA mistura JUnit 4 vs 5 frequentemente, e APIs Swift mudam por versão Xcode.
