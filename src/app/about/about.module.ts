import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { aboutRoutingModule } from './about.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';  
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTableModule} from 'ng-zorro-antd/table';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    aboutRoutingModule,
    ReactiveFormsModule,
    NzInputModule,
    NzGridModule,
    NzFormModule,
    NzButtonModule,
    NzCardModule,
    NzInputModule,
    NzIconModule,
    NzModalModule,
    NzCheckboxModule,
    NzMessageModule,
    NzPaginationModule,
    NzSelectModule,
    ReactiveFormsModule,
    NzDescriptionsModule,
    FormsModule,
    NzDatePickerModule,
    NzTabsModule,
    NzUploadModule,
    NzDescriptionsModule,
    NzFormModule,
    NzDescriptionsModule,
    NzTableModule,
    NzDropDownModule,
    NzDrawerModule,
    NzAvatarModule,
    NzCollapseModule,
    NzAvatarModule,
    NzLayoutModule
    
  ]
})    
export class aboutModule { }
