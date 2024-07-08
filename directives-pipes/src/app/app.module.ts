import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskDirectivesComponent } from './task-directives/task-directives.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { AppendPipe } from './custom-pipes/append.pipe';
import { AppendGeneratePipe } from './custom-pipes/append-generate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskDirectivesComponent,
    PipesComponent,
    AppendPipe,
    AppendGeneratePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
