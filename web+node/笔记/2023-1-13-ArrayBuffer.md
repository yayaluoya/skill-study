#### ArrayBuffer 字节数组

ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区。

相当于是一段连续内存区域。
因为更加底层，所以较大的数据用它来操作会更快

虽然和 JavaScript 的普通数组看起来差不多，但是实际上差别大了，因为 js 的数组不是真正的数组，真正的数组指的就是一片连续的内存，大小是不可变的，而 js 的数组更加类似于链表这种数据结构。

它是一个字节数组，通常在其他语言中称为“byte array”。你不能直接操作 ArrayBuffer 中的内容；而是要通过类型化数组对象或 DataView 对象来操作，它们会将缓冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。

#### 类型化数组

TypedArray

es6 的 Int8Array,Int16Array 等等
node 端在 es6 之前实现的 Buffer，和 es6 的等等

都是从 TypedArray 那里继承，但 TypedArray 是一个抽象类，不能直接用。

它们都是操作 ArrayBuffer 的，因为 ArrayBuffer 是不可以直接操作的。

node 的 Buffer 类的实例类似于整数数组，但 Buffer 的大小是固定的、且在 V8 堆外分配物理内存。 Buffer 的大小在被创建时确定，且无法调整。

要注意 ArrayBuffer 是以 Byte 为单位的，不是以 bit 为单位的，在逻辑表示中 bit 是没有意义的，它只在存储时有意义，要用多个字节才能表示逻辑上的意义，比如 8 位的 Byte，所以说计算机的最小逻辑存储单位为 Byte
