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
        id   : 'fiscalizaciones',
        title: 'Fiscalizaciones',
        type : 'basic',
        icon : 'heroicons_outline:document-search',
        link : '/apps/calendar'
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
        title: 'Promociones',
        type : 'basic',
        icon : 'mat_outline:label',
        link : '/example'
    },

    {
        id   : 'consejos',
        title: 'Consejos',
        type : 'basic',
        icon : 'heroicons_outline:chat',
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
