import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ReactCrudOpsWebPartStrings';
import ReactCrudOps from './components/ReactCrudOps';
import { IReactCrudOpsProps } from './components/IReactCrudOpsProps';

export interface IReactCrudOpsWebPartProps {
  description: string;
}

export default class ReactCrudOpsWebPart extends BaseClientSideWebPart<IReactCrudOpsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReactCrudOpsProps> = React.createElement(
      ReactCrudOps,
      {
        description: this.properties.description,
        context: this.context,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
