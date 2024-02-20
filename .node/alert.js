const { exec } = require('child_process');

/**
 * @typedef {object} Item
 * @property {string} title 提示标题
 * @property {string} content 提示内容
 * @property {number} spaceTime 间隔时间
 */

/** @type {Item[]} */
const configs = [
  {
    title: '喝水',
    content: '喝水时间到了，喝口水吧!',
    spaceTime: 1000 * 60 * 30,
  },
  {
    title: '走一走',
    content: '不要坐太久了，站起来走走吧！',
    spaceTime: 1000 * 60 * 40,
  },
];

configs.forEach(startItem);

/**
 * 开始一个项目
 * @param {Item} item
 */
function startItem(item) {
  setTimeout(() => {
    console.log(item.title);
    sendMsg(item.content);
  }, item.spaceTime);
}

/**
 * 发送一个消息
 * @param {*} str
 */
function sendMsg(str) {
  exec(`msg * "${str}"`);
}
