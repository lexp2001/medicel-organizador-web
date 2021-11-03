/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboards/project'
    },
    
    {
        id   : 'events',
        title: 'Faenas',
        type : 'basic',
        icon : 'heroicons_outline:cog',
        link : '/events'
    },

    {
        id   : 'testeo',
        title: 'Testeo',
        type : 'basic',
        icon : 'mat_outline:health_and_safety',
        link : '/example'
    },

    {
        id   : 'promociones',
        title: 'Trabajadores',
        type : 'basic',
        icon : 'heroicons_outline:user-group',
        link : '/example'
    },

    {
        id   : 'consejos',
        title: 'Informes',
        type : 'basic',
        icon : 'heroicons_outline:document-duplicate',
        link : '/example'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
