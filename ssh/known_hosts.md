这个文件存在的目标主机的公钥，这里要区分免登录的那个公钥。

因为 ssh 是安全连接，所有目标主机需要提供一个公钥来使用，但是它没有 ssl 的那种第三方验证，所有就在第一次连接这个主机的时候存一次它的公钥来保证后续的连接不存在中间人代理。

这种方法有一个漏洞，就是第一次连接的时候如果就存在中间人的话那这个防御就形同虚设了。