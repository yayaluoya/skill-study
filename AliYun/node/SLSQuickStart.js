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
const projectName = "oss-log-yayaluoya-test-1234567890";
// 必选，Logstore名称。
const logstoreName = "logstore_test";

// 创建Project。
function createProject() {
  const param = {
    projectDetail: {
      projectName,
      description: "description about project",
    },
  };

  sls.createProject(param, function (err, data) {
    if (err) {
      console.error("error:", err);
    } else {
      console.log("创建project", data);
    }
  });
}

// 创建Logstore。
function createLogStore() {
  const param = {
    projectName,
    logstoreDetail: {
      logstoreName: logstoreName,
      // 必选，设置数据保存时长，单位为天。如果ttl配置为3650，表示永久保存。
      ttl: 3,
      // 必选，设置Shard数量。
      shardCount: 2,
    },
  };

  sls.createLogstore(param, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("创建LogStore", data);
    }
  });
}
// 创建LogStore索引。
function createIndex() {
  const param = {
    projectName,
    logstoreName,
    indexDetail: {
      line: {
        token: [";"],
        include_keys: ["key2", "key3"],
        caseSensitive: false,
      },
    },
  };

  sls.createIndex(param, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("为logStore创建索引成功", data);
    }
  });
}
// 写入日志。
function writeLog() {
  const param = {
    projectName,
    logStoreName: logstoreName,
    logGroup: {
      // 必选，写入的日志数据。
      logs: [
        {
          time: Math.floor(new Date().getTime() / 1000),
          contents: [
            { key: "a", value: "1" },
            { key: "a", value: "2" },
            { key: "a", value: "3" },
          ],
        },
      ],
      topic: "vv",
      source: "127.0.0.1",
    },
  };

  sls.putLogs(param, function (err, data) {
    if (err) {
      console.error("error:", err);
    } else {
      console.log("写入日志成功", data);
    }
  });
}

// 查询日志。
function queryLog() {
  // 查询最近一个小时的日志
  const to = Math.floor(new Date().getTime() / 1000);
  const from = to - 3600;

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
    topic: "",
    // 可选，查询的关键词，不输入则查询全部日志数据。
    query: "",
  };

  sls.getLogs(param, function (err, data) {
    if (err) {
      console.error("error:", err);
    } else {
      console.log("查询近一个小时的日志", data);
    }
  });
}
// 运行function。
createProject();

setTimeout(() => {
  createLogStore();
}, 10 * 1000);

setTimeout(() => {
  createIndex();
}, 20 * 1000);

setTimeout(() => {
  writeLog();
}, 80 * 1000);

setTimeout(() => {
  queryLog();
}, 90 * 1000);
