import groupArray from 'group-array';
// import DataSeriesLaneDirectionClass from './dataSeriesClass';

/**
 *
 */
class GroupVehiclesTogether {
  /**
   * @param {!Array<Object>} rawData The data that is returned from the mongoDB query. It is an array of Objects sorted by date
   * @param {Object} queryRaw The query that is passed to mongoDB. Always contains the dates.
   */
  constructor(rawData, queryRaw) {
    this.rawData = rawData;
    this.queryRaw = queryRaw;
    this.plotCategories = ['type', 'direction', 'lane'];
    this.groupedNestedObject = this.createObjectGroup();

    this.firstLevelKeys = this.getFirstLevelKeys();
    this.secondLevelKeys = this.getSecondLevelKeys(); // undefined if plotCategories < 2
    this.thirdLevelkeys = this.getThirdLevelkeys(); // undefined if plotCategories < 3
    this.groupedArray = [];
    this.labelTest = this.labelTestCreation();
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
    if (this.plotCategories.length >= 2) {
      this.firstLevelKeys.forEach((key) => {
        result.push(Object.keys(this.groupedNestedObject[key]));
      });
      return result;
    }
    return undefined;
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
    if (this.plotCategories.length >= 3) {
      this.firstLevelKeys.forEach((key1) => {
        this.secondLevelKeys.forEach((key2) => {
          const temp = [];
          key2.forEach((key22) => {
            temp.push(Object.keys(this.groupedNestedObject[key1][key22]));
          });
          result.push(temp);
          // console.log('L3.5 values', Object.keys(this.groupedNestedObject[key1]));
        });
      });
      return result;
    }
    return undefined;
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

  // labelTestCreation() {
  //   this.plotCategories.forEach((category) => {
  //     if (category)
  //   })
  // }
}

export default GroupVehiclesTogether;
