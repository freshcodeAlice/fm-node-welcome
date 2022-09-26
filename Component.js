const {MyMath} = require('./MyMath.js');


class Component {

    render() {
        const p = MyMath.sub(3,1);
        return 'Test Component'
    }
}

exports.Component = Component;