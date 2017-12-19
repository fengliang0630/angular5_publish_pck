import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from '../component/shared.component';
import { SharedPipe } from '../pipe/shared.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponent, SharedPipe],
  exports: [SharedComponent, SharedPipe]
})
export class SharedModule { }
