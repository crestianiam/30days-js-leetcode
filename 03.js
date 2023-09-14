const expect = (val) => {
    let original = val
    return ({
        toBe: (val) => {
            if (val === original) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: (val) => {
            if (val !== original) {
                return true;
            } else {
                throw new Error("Equal");
            }
        },
    }
    )
};

console.log(expect(5).notToBe(null))
console.log(expect(5).toBe(null))