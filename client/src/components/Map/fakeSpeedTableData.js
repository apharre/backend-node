// class cameraInfo {
//   constructor(name, percentChange, direction) {
//     this.name = name;
//     this.percentChange = percentChange;
//     this.direction = direction;
//   }
// }

// function nsew(direction) {
//   if (direction === "EW") {
//     return ["East", "West"];
//   }
//   return ["North", "South"];
// }

// function fakeSpeedTableData(cameras) {
//   /**
//    * _id: "627d85d6a10ff15df8f334f3"
//    * direction: "EW"
//    * lat: 39.725469
//    * lng: -105.109817
//    * name: "6th Ave and Kipling"
//    * status: "normal"
//    * vehicle_collection: "6th-ave-and-kipling"
//    */
//   const speedChanges = {};
//   // eslint-disable-next-line react/prop-types
//   // cameras.forEach((camera) => {
//   //   const compass = nsew(camera.direction);
//   //   compass.forEach((direction) => {
//   //     if (direction === "North") {
//   //       direction = "south";
//   //       continue;
//   //     }
//   //     const x = Math.floor(Math.random() * 2) === 0;
//   //     let negative;
//   //     if (x) {
//   //       negative = -1;
//   //     } else {
//   //       negative = 1;
//   //     }
//   //     speedChanges[camera.name] =
//   //       (Math.floor(Math.random() * 45) / 10) * negative;
//   //     });
//   // });

//   const sortedCameras = Object.keys(speedChanges).map(function (key) {
//     return [key, speedChanges[key]];
//   });

//   // Sort the array based on the second element
//   sortedCameras.sort(function (first, second) {
//     return Math.abs(second[1]) - Math.abs(first[1]);
//   });

//   return sortedCameras;
// }

// export default fakeSpeedTableData;
