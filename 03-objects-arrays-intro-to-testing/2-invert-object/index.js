/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (!obj) {return undefined;}
  const newObject = {};
  for (let i in obj) {
    newObject[obj[i]] = i;
  }
  return newObject;
}
