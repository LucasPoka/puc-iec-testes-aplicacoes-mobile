# Docker Maestro — TAM PUC IEC

Imagem Docker com Maestro CLI pré-instalado. Use pra **parse-only** (validação de flows) ou execução em **Linux com emulator no host**. Em Mac/Windows com Docker Desktop, prefira instalação nativa do Maestro (limitação de USB/emulator passthrough).

## Build

```bash
cd docker
docker-compose build
```

## Comandos comuns

### Validar sintaxe dos flows starter (parse-only)

```bash
docker-compose run --rm maestro-check
```

### Rodar todos os flows starter contra emulator do host (Linux)

```bash
# 1. Subir emulator no host (fora do Docker)
emulator -avd Pixel_8_API_34 &

# 2. Confirmar emulator detectado
adb devices

# 3. Rodar via Docker
docker-compose run --rm maestro test /flows/
```

### Rodar flow específico

```bash
docker-compose run --rm maestro test /flows/01-launch.yaml
```

### Rodar contra **seus próprios flows**

Edite `docker-compose.yml` e troque o volume:

```yaml
volumes:
  - ../caminho/pra/seus/flows:/flows:ro
```

Ou monte ad-hoc:

```bash
docker run --rm --network=host \
  -v $(pwd)/meus-flows:/flows:ro \
  puc-iec-tam/maestro:local test /flows/
```

## Limitações

- ❌ **iOS Simulator** não funciona via Docker (host-only macOS)
- ⚠️ **USB device físico**: apenas Linux com `--device=/dev/bus/usb` (não Docker Desktop)
- ⚠️ **Emulator dentro do container**: requer KVM (Linux) — imagens com emulator embutido são lentas
- ⚠️ **Mac/Windows**: `network_mode: host` não funciona como em Linux; use parse-only

## Quando preferir nativo

Veja [`../docs/INSTALACAO_MAESTRO.md`](../docs/INSTALACAO_MAESTRO.md) para instalação direta sem Docker.
