# Chat com Socket.IO (Projeto de Estudo)

Projeto de estudo para praticar comunicação em tempo real com Socket.IO e organização básica de front/back.

## Objetivo
Construir um chat simples em tempo real para estudo:
- fluxo de eventos no Socket.IO
- conexão cliente/servidor
- envio e broadcast de mensagens
- renderização dinâmica no frontend

## Stack
**Backend**
- Node.js
- Express
- Socket.IO
- EJS (apenas para renderizar HTML)

**Frontend**
- HTML
- CSS
- JavaScript
- jQuery

## O que foi implementado
- Servidor HTTP com Express
- WebSocket com Socket.IO
- Conexão cliente/servidor
- Envio de mensagens do cliente para o servidor
- Broadcast de mensagens para outros clientes
- Renderização de mensagens no frontend
- Estrutura básica de UI (form + área de mensagens)

## Observações
- As mensagens são armazenadas **em memória** no servidor.
- Ao reiniciar o servidor, o histórico é perdido (não há persistência em banco/arquivo).

## Como executar
1. Instale as dependências:
   ```bash
   npm install
