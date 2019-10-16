/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus, knowsProgramming, config) {
     let coef = 1.625;
     if (knowsProgramming){
       coef = 1;
     }
      return Math.ceil(800*coef/config[focus]);
  }
  