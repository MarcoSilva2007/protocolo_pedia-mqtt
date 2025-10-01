+-----------------+           +-----------------+           +------------------+
|                 |  Publish  |                 |           |                  |
|   Publisher     +---------->+     Broker      +<----------+    Subscriber    |
| (Exemplo: sensor|           |  (Servidor que  |  Subscribe| (Exemplo: App ou |
|  de temperatura)|           |  gerencia msgs) |           |   dashboard)     |
+-----------------+           +-----------------+           +------------------+
         |                            |                            ^
         |                            |                            |
         |                            |                            |
         +--------------------------------------------------------+
                             Mensagens via tópicos MQTT
