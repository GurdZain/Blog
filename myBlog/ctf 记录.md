#CTF 回忆录
---


### 1.xss 绕过 csp 获取 http-only 的 cookie。

dom的 id 可以成为全局变量。

编码绕过技巧，\x3c

xss 获取同源页面源码，获取 phpinfo 页面，里面存有 cookie。

### 2.bypass openbase
