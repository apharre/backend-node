import groupArray from 'group-array';
// import DataSeriesLaneDirectionClass from './dataSeriesClass';

class GroupVehiclesTogether {
  /**
   *
   */
  constructor(rawData, queryRaw) {
    this.rawData = rawData;
    this.queryRaw = queryRaw;
    this.plotCategories = ['type']; // 'direction 'lane'
    this.groupedNestedObject = this.createObjectGroup();

    this.firstLevelKeys = this.getFirstLevelKeys();
    // this.secondLevelKeys = this.getSecondLevelKeys();
    // this.thirdLevelkeys = this.getThirdLevelkeys();
    this.groupedArray = [];
  }

  getFirstLevelKeys() {
    return Object.keys(this.groupedNestedObject);
  }

  createObjectGroup() {
    return groupArray(this.rawData, ...this.plotCategories);
  }

  destructureObjectGroup() {
    const keys = Object.keys(this.groupedNestedObject);
    console.log('keys', keys);
  }

  getSecondLevelKeys() {
    const result = [];
    this.firstLevelKeys.forEach((key) => {
      result.push(Object.keys(this.groupedNestedObject[key]));
    });
    return result;
  }

  getThirdLevelkeys() {
    // console.log('L3', this.groupedNestedObject[0].commuter);
    // console.log('L3', this.groupedNestedObject[0].bus);
    // console.log('L3', this.groupedNestedObject[0].truck);
    // console.log('L3', this.groupedNestedObject[0].motorcycle);
    // console.log('L3', this.groupedNestedObject[1].commuter);
    // console.log('L3', this.groupedNestedObject[1].bus);
    // console.log('L3', this.groupedNestedObject[1].truck);
    // console.log('L3', this.groupedNestedObject[1].motorcycle);
    const result = [];
    this.firstLevelKeys.forEach((key1) => {
      this.secondLevelKeys.forEach((key2) => {
        const temp = [];
        key2.forEach((key22) => {
          // console.log('L3 keys', key1, key2, key22);
          // console.log('L3 values', Object.keys(this.groupedNestedObject[key1][key22]));
          temp.push(Object.keys(this.groupedNestedObject[key1][key22]));
          // console.log('temp', temp);
        });
        result.push(temp);
        // console.log('L3.5 values', Object.keys(this.groupedNestedObject[key1]));
      });
    });
    return result;
  }

  // getLabelCategories() {

  // }

  /**
   * groupedNestedObject =
   * {
   * commuter: {
   * '0': { '1': [Array], '2': [Array], '3': [Array] },
   * '1': { '1': [Array], '3': [Array] }
   * },
   * bus: {
   * '0': { '1': [Array], '2': [Array], '3': [Array] },
   *  '1': { '2': [Array], '3': [Array], '4': [Array] }
   * },
   * truck: { '0': { '1': [Array], '2': [Array] }, '1': { '1': [Array] } },
   * motorcycle: {
   * '0': { '1': [Array], '3': [Array] },
   * '1': { '2': [Array], '4': [Array] }
   *   }
   * }

   */
}

export default GroupVehiclesTogether;
