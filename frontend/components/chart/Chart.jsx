import React, { useEffect, useState } from "react";
import db from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  const [documentData, setDocumentData] = useState(null);
  const [timeArray, setTimeArray] = useState([]);
  const [tempArray, setTempArray] = useState([]);
  const [humArray, setHumArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "data", "fbpLUhlgcJKWUSPkguTi");

        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setDocumentData(data);

          // 時刻、temo、humの値を配列に格納
          const times = Object.keys(data).sort(); // 時刻の配列
          const temps = times.map((time) => data[time].temp); // tempの値の配列
          const hums = times.map((time) => data[time].hum); // humの値の配列

          setTimeArray(times);
          setTempArray(temps);
          setHumArray(hums);
          console.log(times); // 時刻の配列を表示
          console.log(temps); // tempの値の配列を表示
          console.log(hums); // humの値の配列を表示
        } else {
          console.log("指定されたドキュメントが存在しません。");
        }
      } catch (error) {
        console.error("データの取得中にエラーが発生しました:", error);
      }
    };

    fetchData();
  }, []);

  console.log(documentData); // データの中身をコンソールに表示

  const tempData = {
    labels: timeArray,
    datasets: [
      {
        label: "This year",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "round",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "square",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#eee",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 1,
        pointRadius: 1,
        pointHitRadius: 10,
        data: tempArray,
      },
      {
        label: "Last year",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(255, 99, 132,0.4)",
        borderColor: "rgba(255, 99, 132,1)",
        borderCapStyle: "round",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "square",
        pointBorderColor: "rgba(255, 99, 132,1)",
        pointBackgroundColor: "#eee",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(255, 99, 132,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 1,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [29,31,32,32,31,29,27,26,25,28],
      },
    ],
  };
  const humData = {
    labels: timeArray,
    datasets: [
      {
        label: "This year",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "round",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "square",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#eee",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 1,
        pointRadius: 1,
        pointHitRadius: 10,
        data: humArray,
      },
      {
        label: "Last year",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(255, 99, 132,0.4)",
        borderColor: "rgba(255, 99, 132,1)",
        borderCapStyle: "round",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "square",
        pointBorderColor: "rgba(255, 99, 132,1)",
        pointBackgroundColor: "#eee",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(255, 99, 132,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 1,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [3, 10, 21, 31, 34, 40, 48,54],
      },
    ],
  };
  const tempOptions = {
    plugins: {
      title: {
        display: true,
        text: "Temperature Chart", // タイトルのテキストを設定
        font: {
          size: 32, // フォントサイズを指定
        },
      },
      
    },
  };
  const humOptions = {
    plugins: {
      title: {
        display: true,
        text: "Humidity Chart", // タイトルのテキストを設定
        font: {
          size: 32, // フォントサイズを指定
        },
      },
      
    },
  };
  return (
    <div>
      <div>
        <Line data={tempData} options={tempOptions}/>
      </div>
      <div>
        <Line data={humData} options={humOptions}/>
      </div>
    </div>
  );
}
