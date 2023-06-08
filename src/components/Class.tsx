import React, { PureComponent} from "react";

// 装饰器 为组件添加age属性
function addAge (Target: Function)  {
    Target.prototype.age = 111
}

// 使用装饰器
@addAge
class Class extends PureComponent {
    age?: number;

    render() {
        return <h2>I'm Component Class --- {this.age}</h2>
    }
}

export default Class