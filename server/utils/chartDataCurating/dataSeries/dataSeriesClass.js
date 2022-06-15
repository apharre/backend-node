class DataSeriesLaneDirectionClass {
  constructor(seriesLabel, seriesData) {
    this.seriesLabel = seriesLabel;
    this.data = seriesData;
    // this.test = this.verifyData();
  }

  verifyData() {
    // console.log('Label:', this.seriesLabel);
    // console.log('Data:', this.seriesData);
    this.reduceDataToXYSpeed();
  }

  reduceDataToXYSpeed() {
    // for every vehicle in the data array,
    // remove everything except for date (x) and speed (y)
    // replace the object with an array [x, y]
    for (let i = 0; i < this.data.length; i += 1) {
      // var a = new Date(UNIX_timestamp * 1000);
      const temp = [this.data[i].date, this.data[i].speed];
      // const temp = [convertUnixToUTC, this.data[i].speed];

      this.data[i] = temp;
    }
    console.log('Label 2:', this.label);
    console.log('Data 2:', this.data);
  }
}

export default DataSeriesLaneDirectionClass;
