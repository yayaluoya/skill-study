#### Promise

Promise 对象表示异步操作最终的完成（或失败）以及其结果值。

一个 Promise 是一个代理，它代表一个在创建 promise 时不一定已知的值。它允许你将处理程序与异步操作的最终成功值或失败原因关联起来。这使得异步方法可以像同步方法一样返回值：异步方法不会立即返回最终值，而是返回一个 promise，以便在将来的某个时间点提供该值。

一个 Promise 必然处于以下几种状态之一：

待定（pending）：初始状态，既没有被兑现，也没有被拒绝。
已兑现（fulfilled）：意味着操作成功完成。
已拒绝（rejected）：意味着操作失败。
一个待定的 Promise 最终状态可以是已兑现并返回一个值，或者是已拒绝并返回一个原因（错误）。当其中任意一种情况发生时，通过 Promise 的 then 方法串联的处理程序将被调用。如果绑定相应处理程序时 Promise 已经兑现或拒绝，这处理程序将被立即调用，因此在异步操作完成和绑定处理程序之间不存在竞态条件。

如果一个 Promise 已经被兑现或拒绝，即不再处于待定状态，那么则称之为已敲定（settled）。

<img src="../images/promises.png">

你还会听到使用已解决（resolved）这个术语来描述 Promise——这意味着该 Promise 已经敲定（settled），或为了匹配另一个 Promise 的最终状态而被“锁定（lock-in）”，进一步解决或拒绝它都没有影响。原始 Promise 提案中的 States and fates 文档包含了更多关于 Promise 术语的细节。在口语中，“已解决”的 Promise 通常等价于“已兑现”的 Promise，但是正如“States and fates”所示，已解决的 Promise 也可以是待定或拒绝的。

#### Promise 并发
Promise 类提供了四个静态方法来促进异步任务的并发：

Promise.all()
在所有传入的 Promise 都被兑现时兑现；在任意一个 Promise 被拒绝时拒绝。

Promise.allSettled()
在所有的 Promise 都被敲定时兑现。

Promise.any()
在任意一个 Promise 被兑现时兑现；仅在所有的 Promise 都被拒绝时才会拒绝。

Promise.race()
在任意一个 Promise 被敲定时敲定。换句话说，在任意一个 Promise 被兑现时兑现；在任意一个的 Promise 被拒绝时拒绝。