import * as React from 'react';
import { IReactCrudOpsProps } from './IReactCrudOpsProps';
import { IReactCrudOpsState } from './IReactCrudOpsState';
import { SPOperations } from '../Services/SPServices';
export default class ReactCrudOps extends React.Component<IReactCrudOpsProps, IReactCrudOpsState, {}> {
    _spOps: SPOperations;
    constructor(props: IReactCrudOpsProps);
    componentDidMount(): void;
    render(): React.ReactElement<IReactCrudOpsProps>;
}
//# sourceMappingURL=ReactCrudOps.d.ts.map