import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ConfigAlgoComponent} from "../../config-algo/config-algo.component";
import {UserRepo} from "../../../../repo/repo/UserRepo";
import {Algo} from "../../../../repo/model/User";

@Component({
  selector: 'app-config-edit',
  templateUrl: './config-edit.component.html',
  styleUrls: ['./config-edit.component.css']
})
export class ConfigEditComponent implements OnInit {


  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  // Keep track of list of generated components for removal purposes
  components: ComponentRef<any>[] = [];


  constructor(private componentFactoryResolver: ComponentFactoryResolver, private userRepo: UserRepo) {
  }


  ngOnInit() {


    let algo: Algo[] = this.userRepo.getSessionUserAlgo();
    algo.forEach(value => {

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ConfigAlgoComponent);
      const component = this.container.createComponent(componentFactory);
      // component.instance.algo = value.value
      // component.instance.id = value.id
      component.instance.algo = value
      this.components.push(component);


    })

    //JSON.stringify(data)

  }

  success: string = ""

  onsubmit() {
    let algo: Algo[] = []

    this.components.forEach(value => {
      console.log(value.instance.algo)
      if (value.instance.algo.value.length > 0) {
        algo.push(value.instance.algo)
      }
    })
    this.userRepo.saveUserAlgo(algo).subscribe(value => {
      // this.success = value.toString()
    }, error1 => {
      //this.success = error1.toString()
    })


  }

  types = ["ma", "falldaily", "volumex", "falllong", "rsi"]

  createcomp(type: string) {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ConfigAlgoComponent);
    const component = this.container.createComponent(componentFactory);

    component.instance.algo = {
      id: type,
      value: ""
    }
    this.components.push(component);
  }


}
