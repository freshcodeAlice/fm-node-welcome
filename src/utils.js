const sum = (...args) => args.reduce((accum, elem) => accum+elem, 0);

exports.sum = sum;