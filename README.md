# cypress_maximum_call_stack

Maximum call stack demo for issues:

<https://github.com/percy/percy-cypress/issues/325>

<https://github.com/cypress-io/cypress/issues/15101>


## Specs
- Distributor ID: Ubuntu
- Description:    Ubuntu 20.04.1 LTS
- Release:        20.04
- Codename:       focal
- node 15.14.0
- npm 7.7.6
- cypress 7.1.0
- percy/cypress 3.1.0

![image](https://user-images.githubusercontent.com/178548/115593358-cbaa2e80-a2aa-11eb-9766-1d75d168b773.png)

```
    at _deconstructPacket (/home/iondrimba/.cache/Cypress/7.1.0/Cypress/resources/app/packages/socket/node_modules/socket.io-parser/dist/binary.js:40:32)
    at _deconstructPacket (/home/iondrimba/.cache/Cypress/7.1.0/Cypress/resources/app/packages/socket/node_modules/socket.io-parser/dist/binary.js:32:26)
    at Object.deconstructPacket (/home/iondrimba/.cache/Cypress/7.1.0/Cypress/resources/app/packages/socket/node_modules/socket.io-parser/dist/binary.js:16:17)
    at Encoder.encodeAsBinary (/home/iondrimba/.cache/Cypress/7.1.0/Cypress/resources/app/packages/socket/node_modules/socket.io-parser/dist/index.js:81:41)
    at Encoder.encode (/home/iondrimba/.cache/Cypress/7.1.0/Cypress/resources/app/packages/socket/node_modules/socket.io-parser/dist/index.js:43:29)
    at Client._packet (/home/iondrimba/.cache/Cypress/7.1.0/Cypress/resources/app/packages/socket/node_modules/socket.io/dist/client.js:167:44)
    at Socket.packet (/home/iondrimba/.cache/Cypress/7.1.0/Cypress/resources/app/packages/socket/node_modules/socket.io/dist/socket.js:161:21)
    at /home/iondrimba/.cache/Cypress/7.1.0/Cypress/resources/app/packages/socket/node_modules/socket.io/dist/socket.js:270:18
    at /home/iondrimba/.cache/Cypress/7.1.0/Cypress/resources/app/packages/server/lib/socket-base.js:325:28
    at tryCatcher (/home/iondrimba/.cache/Cypress/7.1.0/Cypress/resources/app/packages/server/node_modules/bluebird/js/release/util.js:16:23)
    at Promise._settlePromiseFromHandler (/home/iondrimba/.cache/Cypress/7.1.0/Cypress/resources/app/packages/server/node_modules/bluebird/js/release/promise.js:547:31)
    at Promise._settlePromise (/home/iondrimba/.cache/Cypress/7.1.0/Cypress/resources/app/packages/server/node_modules/bluebird/js/release/promise.js:604:18)
    at Promise._settlePromise0 (/home/iondrimba/.cache/Cypress/7.1.0/Cypress/resources/app/packages/server/node_modules/bluebird/js/release/promise.js:649:10)
    at Promise._settlePromises (/home/iondrimba/.cache/Cypress/7.1.0/Cypress/resources/app/packages/server/node_modules/bluebird/js/release/promise.js:725:18)
    at _drainQueueStep (/home/iondrimba/.cache/Cypress/7.1.0/Cypress/resources/app/packages/server/node_modules/bluebird/js/release/async.js:93:12)
    at _drainQueue (/home/iondrimba/.cache/Cypress/7.1.0/Cypress/resources/app/packages/server/node_modules/bluebird/js/release/async.js:86:9)
    at Async._drainQueues (/home/iondrimba/.cache/Cypress/7.1.0/Cypress/resources/app/packages/server/node_modules/bluebird/js/release/async.js:102:5)
    at Immediate.Async.drainQueues [as _onImmediate] (/home/iondrimba/.cache/Cypress/7.1.0/Cypress/resources/app/packages/server/node_modules/bluebird/js/release/async.js:15:14)
    at processImmediate (internal/timers.js:461:21)

```
