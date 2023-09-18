/**
 * oss的日志获取
 */
const ALY = require("aliyun-sdk");
const accessKeyC = require("../.local/accessKey");

var sls = new ALY.SLS({
  accessKeyId: accessKeyC.accessKeyId,
  secretAccessKey: accessKeyC.accessKeySecret,
  //日志服务的域名。此处以杭州为例，其它地域请根据实际情况填写。
  endpoint: "http://cn-hangzhou.log.aliyuncs.com",
  //SDK版本号，固定值。
  apiVersion: "2015-06-01",
});

// 必选，Project名称。
const projectName = "oss-log-1330807560356268-cn-hangzhou";
// 必选，Logstore名称。
const logstoreName = "oss-log-store";

// 查询日志。
function queryLog() {
  const to = Math.floor(new Date().getTime() / 1000) + 10;
  const from = to - 3600 * 24 * 7;

  const param = {
    // 必选，Project名称。
    projectName,
    // 必选，Logstore名称。
    logStoreName: logstoreName,
    // 必选，开始时间，精度为秒。
    from,
    // 必选，结束时间，精度为秒。
    to,
    // 可选，指定日志主题。
    topic: "oss_access_log",
    line: 100,
    offset: 0,
    // 可选，查询的关键词，不输入则查询全部日志数据。
    query:
      '__topic__ : oss_access_log and bucket : variables-dev and request_uri : "/wuhaha1/ces/%24V_WUHAHA1_CES_inject.js HTTP/1.1"',
  };

  sls.getLogs(param, function (err, data) {
    if (err) {
      console.error("error:", err);
    } else {
      console.log("日志内容", data);
    }
  });
}
queryLog();
