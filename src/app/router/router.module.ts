import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from '../pages/page-one/page-one.component';
import { PageTwoComponent } from '../pages/page-two/page-two.component';
import {LocalizeRouterModule} from 'localize-router';

const routes: Routes = [
    { path: 'page-one', component: PageOneComponent },
    { path: 'page-two', component: PageTwoComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            onSameUrlNavigation: 'reload',
            anchorScrolling: 'enabled',
            scrollPositionRestoration: 'enabled'
        }
    )],
    exports: [RouterModule],
    declarations: []
})
export class AppRouterModule { }

export const routingComponents = [
    PageOneComponent,
    PageTwoComponent
];