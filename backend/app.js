const firebase = require("firebase/app");
const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  doc,
  setDoc,
} = require("firebase/firestore");
const Obniz = require("obniz");

const firebaseConfig = {
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var obniz = new Obniz("3339-6992");

obniz.onconnect = async function () {
  console.log("start");
  obniz.io3.output(true);

  obniz.i2c0.start({ mode: "master", sda: 2, gnd: 1, scl: 0, clock: 100000 });

  obniz.i2c0.onerror = function (err) {
    console.error(err);
  };

  obniz.repeat(async function () {
    console.log("通信中");
    // センサーへウェイクアップ信号を送る
    obniz.i2c0.write(0x5c, [0x00]); // wakeup この0x00は意味なし
    await obniz.wait(100);
    console.log("test");

    obniz.i2c0.write(0x5c, [0x03, 0x00, 0x04]); // read register

    await obniz.wait(100);

    var data = await obniz.i2c0.readWait(0x5c, 6);

    console.log("read " + data);

    // 取得データから温度・湿度を算出

    var temperature;

    var humidity;

    var time = new Date();
    var formattedTime = `${time.getFullYear()}/${padZero(
      time.getMonth() + 1
    )}/${padZero(time.getDate())}/${padZero(time.getHours())}:${padZero(
      time.getMinutes()
    )}`; //2023/07/15/13:00のように出力する

    function padZero(value) {
      return value.toString().padStart(2, "0");
    } //桁が１桁の場合に前に0を追加する

    humidity = ((data[2] << 8) + data[3]) * 0.1;

    temperature = ((data[4] << 8) + data[5]) * 0.1;

    // obnizのディスプレイに温度・湿度を表示

    obniz.display.clear();

    obniz.display.print("t = " + temperature.toFixed(1) + " C");
    obniz.display.print("   ");

    obniz.display.print("h = " + humidity.toFixed(1) + " %");

    sendToDatabase(temperature, humidity, formattedTime);
  }, 108000000); // AM2320のサンプリング間隔は2秒以上必要
  //3時間間隔で計測
};

// called on offline

obniz.onclose = async function () {};

async function sendToDatabase(temperature, humidity, formattedTime) {
  console.log(temperature, humidity, formattedTime);
  try {
    const mapRef = doc(db, "data", "FcAaHJm8IZu2RPGmql4u"); 
    const time = formattedTime
    const map = {};// 現時刻の名前のマップを作成
    map[time] = {
      temp: temperature,
      hum: humidity,
    };
    await setDoc(mapRef, map);

    console.log("データが正常に追加されました。");
  } catch (error) {
    console.error("データの追加中にエラーが発生しました:", error);
  }
}
