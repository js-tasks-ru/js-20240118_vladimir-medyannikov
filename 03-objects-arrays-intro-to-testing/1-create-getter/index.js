/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const properties = path.split(".");
    return function (object) {
        let value = object;
        for (let property of properties) {
            if (!Object.hasOwn(value, property)) return;
            value = value[property];
        }
        return value;
    };
}
