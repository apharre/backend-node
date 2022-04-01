function convertUSTtoHourMinSec(USTArray) {
  const result = [];
  USTArray.forEach((timestamp) => {
    const newDate = new Date(timestamp * 1000);
    const time = newDate.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    result.push(time);
  });
  return result;
}

function convertUSTtoDate(USTArray) {
  const result = [];
  USTArray.forEach((timestamp) => {
    const newDate = new Date(timestamp * 1000);
    const time = newDate.toLocaleString([], {
      month: "2-digit",
      day: "2-digit",
    });
    result.push(time);
  });
  return result;
}

function convertUSTtoDateTime(USTArray) {
  const result = [];
  USTArray.forEach((timestamp) => {
    const newDate = new Date(timestamp * 1000);
    const time = newDate.toLocaleString([], {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    result.push(time);
  });
  return result;
}

// function breakArrayIntoTenTicks(timeArray) {
//   const min = timeArray[0];
//   const max = timeArray[timeArray.length - 1];
//   const step = (max - min) / 10;
//   const result = [min];
//   for (let i = 0; i <= 7; i += 1) {
//     result.push(result[i] + step);
//   }
//   result.push(max);
//   return result;
// }

function chartFormattingOptions(speed) {
  const yMin = speed[0];
  const yMax = speed[speed.length - 1];
  // const xMin = time[0];
  // const xMax = time[time.length - 1];

  return {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Apharre Line Chart",
      },
    },
    scales: {
      y: {
        suggestedMin: yMin,
        suggestedMax: yMax,
        stepSize: 5,
      },
      x: {
        // suggestedMin: xMin,
        // suggestedMax: xMax,
        ticks: {
          maxTicksLimit: 10,
          autoSkip: true,
          display: true,
        },
      },
    },
  };
}

export {
  convertUSTtoHourMinSec,
  convertUSTtoDate,
  convertUSTtoDateTime,
  chartFormattingOptions,
};
