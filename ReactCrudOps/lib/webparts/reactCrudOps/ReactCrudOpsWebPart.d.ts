import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IReactCrudOpsWebPartProps {
    description: string;
}
export default class ReactCrudOpsWebPart extends BaseClientSideWebPart<IReactCrudOpsWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ReactCrudOpsWebPart.d.ts.map