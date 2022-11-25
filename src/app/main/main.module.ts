import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutes } from './main.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule, } from 'ng-zorro-antd/dropdown';
import { NzModalContainerComponent, NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule, } from 'ng-zorro-antd/form';
import { NzInputModule, } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

   


@NgModule({
  declarations: [MainComponent],  
  imports: [
    CommonModule,
    MainRoutes,
    ReactiveFormsModule,
    FormsModule,
    NzCarouselModule,
    NzLayoutModule,
    NzDividerModule,
    NzIconModule,
    NzDropDownModule,
    NzModalModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzProgressModule,
    NzMessageModule,
    NzCardModule,
    NzTableModule,
    NzDescriptionsModule,
    NzDrawerModule,
    NzDividerModule,
    NzSelectModule,
    NzUploadModule,
    NzAvatarModule
  ]
})
export class MainModule { }
