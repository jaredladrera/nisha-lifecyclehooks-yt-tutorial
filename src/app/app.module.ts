import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HookComponent } from './hooks/hook/hook.component';
import { HookChildComponent } from './hooks/hook/hook-child/hook-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HookComponent,
    HookChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
