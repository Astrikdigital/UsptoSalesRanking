import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', redirectTo: 'ranking', pathMatch: 'full' }, 
    {
        
        path: 'ranking',
        loadComponent: () => import('./components/ranking/ranking.component').then(m => m.RankingComponent),   
    },
];
