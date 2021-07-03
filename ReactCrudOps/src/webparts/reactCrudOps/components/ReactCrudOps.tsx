import * as React from 'react';
import styles from './ReactCrudOps.module.scss';
import { IReactCrudOpsProps } from './IReactCrudOpsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IReactCrudOpsState } from './IReactCrudOpsState';
import { SPOperations } from '../Services/SPServices';
import { Dropdown,IDropdownOption } from 'office-ui-fabric-react';


export default class ReactCrudOps extends React.Component<IReactCrudOpsProps, IReactCrudOpsState, {}> {
  public _spOps: SPOperations;
  constructor(props: IReactCrudOpsProps) {
    super(props);
    this._spOps = new SPOperations();
    this.state = { listTitles: [] };
  }
  public componentDidMount(){
    this._spOps.GetAllList(this.props.context).then((result:IDropdownOption[])=>{
      this.setState({listTitles:result});
    });
  }
  public render(): React.ReactElement<IReactCrudOpsProps> {
    let option: IDropdownOption[] = [];
    return (
      <div className={styles.reactCrudOps}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to C# Corner!</span>
              <p className={styles.subTitle}>Crud Operations in SPO list using REST(spHttpClient)</p>
            </div>
            <div id="dv_parent" className={styles.myStyles}>
              <Dropdown 
                  options={this.state.listTitles} 
                  className={styles.dropdown}
                  placeholder="***Please select your List****">             
              </Dropdown>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
