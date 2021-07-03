var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './ReactCrudOps.module.scss';
import { SPOperations } from '../Services/SPServices';
import { Dropdown } from 'office-ui-fabric-react';
var ReactCrudOps = /** @class */ (function (_super) {
    __extends(ReactCrudOps, _super);
    function ReactCrudOps(props) {
        var _this = _super.call(this, props) || this;
        _this._spOps = new SPOperations();
        _this.state = { listTitles: [] };
        return _this;
    }
    ReactCrudOps.prototype.componentDidMount = function () {
        var _this = this;
        this._spOps.GetAllList(this.props.context).then(function (result) {
            _this.setState({ listTitles: result });
        });
    };
    ReactCrudOps.prototype.render = function () {
        var option = [];
        return (React.createElement("div", { className: styles.reactCrudOps },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("span", { className: styles.title }, "Welcome to C# Corner!"),
                        React.createElement("p", { className: styles.subTitle }, "Crud Operations in SPO list using REST(spHttpClient)")),
                    React.createElement("div", { id: "dv_parent", className: styles.myStyles },
                        React.createElement(Dropdown, { options: this.state.listTitles, className: styles.dropdown, placeholder: "***Please select your List****" }))))));
    };
    return ReactCrudOps;
}(React.Component));
export default ReactCrudOps;
//# sourceMappingURL=ReactCrudOps.js.map