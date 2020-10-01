import { Component} from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent {

  classeTitulo(){
    return ['titulo']
  }

  classeContainer(){
    return ['config-container']
  }

  classeLinks(){
    return ['links']
  }

}
