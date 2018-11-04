import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/**
 * global state
 * */
import { Store } from '@ngrx/store';
import * as SearchActions from '../../search-actions';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.less']
})
export class AreaComponent implements OnInit {
  private serviceArea: boolean = true;
  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
  }

  updateArea(){
    var area = this.serviceArea?"Kitchen": "Services";
    this.store.dispatch(new SearchActions.UpdateArea(area));
  }
}
