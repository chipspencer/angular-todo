
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './containers/App/app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule, ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { reducers } from './store/reducers';
import { State } from './store/app.state';
import { SidebarContainer } from './containers/Sidebar/sidebar.container';
import { ContentContainer } from './containers/Content/content.container';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { TodoComponent } from './components/todo/todo.component';
import { ProjectGroupContainer } from './containers/ProjectGroup/project-group.container';
import { HeaderContainer } from './containers/Header/header.container';

 
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['todos']})(reducer);
}
const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    SidebarContainer,
    ContentContainer,
    SearchbarComponent,
    TodoComponent,
    ProjectGroupContainer,
    HeaderContainer
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
