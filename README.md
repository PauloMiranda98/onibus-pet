# Sistema de monitoramento do ônibus escolar da Universidade Federal do Ceará - Quixadá

## Detalhes do Sistema

Backend construido em Typescript e rodando com Node.js.
O banco escolhido para armazenamento dos dados coletados em uso é o MongoDB.
Todas as partes do sistema estão até agora hospedadas em servidores Google na Nuvem.

## Métodos

### GET /
Retorna versão estável do sistema e sistuação em terpo real de conexão com o banco de dados.

Formato de retorno:
```javascript
{
"version":"<string>", //versão em produção
"databse":"<string>" //status de coneção (connected, disconnected, connecting, disconnecting)
}
```

### GET /trajectory
retorna todos os movimentos registrados no banco.

Formato de retorno:
```javascript
{[
  {
    "lat":"<string>", //latitude
    "lon":"<string>", //longitude
    "time":"<string>" //horario de envio
  }, ...
]}
```
> caso não haja nenhum movimento ainda registrado no banco o status de retorno será 404.

### GET /trajectory/bus/<id_onibus_selecionado>
retorna todos movimentos respectivos ao onibus passado como parâmetro.

Formato de retorno:
```javascript
{
  nameID : "<string>",
  movements: [
    {
      "lat":"<string>", //latitude
      "lon":"<string>", //longitude
      "time":"<string>" //horario de envio
    }, ...
]}
```
> caso não haja nenhum movimento respectivo ao ônibus ainda registrado no banco o status retorno será 404.

### POST /trajectory/<id_onibus_responsavel>
armazena em banco o dado de movimento referente ao ônibus passado como parâmetro.

Formato de envio:
```javascript
{
"lat":"<string>", //latitude
"lon":"<string>", //longitude
"time":"<string>", //horario de envio
"velocity":"<double>" //velocidade(opcional)
}
```
> resposta 200 para inserção realizada com sucesso, resposta 400 para requisições de formato inválido.

