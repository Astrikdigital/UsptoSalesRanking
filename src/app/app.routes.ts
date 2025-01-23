import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', redirectTo: 'sales/sales-summary', pathMatch: 'full' }, 
    {        
        path: 'sales',
        loadComponent: () => import('./tracker/tracker.component').then(m => m.TrackerComponent),
        children: [  
            {
                path: 'sales-summary',
                loadComponent: () => import('./tracker/components/sales-summary/sales-summary.component').then(m => m.SalesSummaryComponent),   
            },  
            
        ]      
    },
    
    {
        path: 'admin',
        loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
        children: [  
            {
                path: 'agent',
                loadComponent: () => import('./admin/components/agent/agent.component').then(m => m.AgentComponent),   
            }, 
            {
                path: 'agent-sales',
                loadComponent: () => import('./admin/components/agent-sales/agent-sales.component').then(m => m.AgentSalesComponent),   
            },      
            
            {
                path: 'sale-closing',
                loadComponent: () => import('./admin/components/sale-closing/sale-closing.component').then(m => m.SaleClosingComponent),   
            },

            {
                path: 'Team',
                loadComponent: () => import('./admin/components/team/team.component').then(m => m.TeamComponent),   
            },
        ]
    }
];
