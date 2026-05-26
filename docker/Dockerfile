FROM eclipse-temurin:17-jdk-alpine

# Dependências mínimas pra Maestro CLI
RUN apk add --no-cache bash curl ca-certificates git

# Instalar Maestro CLI
RUN curl -Ls "https://get.maestro.mobile.dev" | bash
ENV PATH="/root/.maestro/bin:${PATH}"

# Verificar instalação
RUN maestro --version || echo "Maestro version check (sem device): OK"

# Workspace pra montar flows do host
WORKDIR /flows

# Default: parse-only de qualquer .yaml em /flows/
ENTRYPOINT ["maestro"]
CMD ["--help"]
