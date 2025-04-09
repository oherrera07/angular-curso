import { Routes } from '@angular/router';
import { ListTasksComponent } from '../../components/list-tasks/list-tasks.component';
import { NewComponent } from '../../components/new/new.component';

export const routes: Routes = [
    {
        path:'',
        component: ListTasksComponent
    },
    {
        path:'create',
        component: NewComponent
    }
];
