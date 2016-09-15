'use strict';

class Cube {
    constructor(data) {
        this.data = data;
    }

    get() {
        return new Cube(this.data).data;
    }

    accumulate(key) {
        return new Cube(this.data.reduce((acc, cur) => {
            return acc.concat(cur[key]);
        }, []));
    }
};

module.exports = Cube;