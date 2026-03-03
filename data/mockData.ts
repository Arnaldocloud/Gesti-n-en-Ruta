export type ClientStatus = 'pendiente' | 'visitado';

export interface RouteClient {
    id: string;
    name: string;
    address: string;
    status: ClientStatus;
    pendingDebt?: number;   // saldo pendiente
    lastSale?: number;      // última venta
    priority: 'alta' | 'normal';
}

export interface VendorMetrics {
    vendorName: string;
    todaySales: number;
    todayCollected: number;
    pendingClients: number;
    visitedClients: number;
    isOnline: boolean;
}

export const VENDOR_METRICS: VendorMetrics = {
    vendorName: 'Carlos Mendoza',
    todaySales: 450.00,
    todayCollected: 300.00,
    pendingClients: 4,
    visitedClients: 3,
    isOnline: true,
};

export const ROUTE_CLIENTS: RouteClient[] = [
    {
        id: '1',
        name: 'Comercial Los Andes',
        address: 'Av. Amazonas y Patria, Quito',
        status: 'visitado',
        pendingDebt: 0,
        lastSale: 150.00,
        priority: 'normal',
    },
    {
        id: '2',
        name: 'Fiambrería El Sol',
        address: 'Calle Sucre 14-52, Ambato',
        status: 'visitado',
        pendingDebt: 200.00,
        lastSale: 85.00,
        priority: 'alta',
    },
    {
        id: '3',
        name: 'Bodega Don Miguel',
        address: 'Mercado Central, Riobamba',
        status: 'visitado',
        pendingDebt: 0,
        lastSale: 120.00,
        priority: 'normal',
    },
    {
        id: '4',
        name: 'Minimarket La Esperanza',
        address: 'Cdla. La Pradera, Guayaquil',
        status: 'pendiente',
        pendingDebt: 75.00,
        lastSale: 90.00,
        priority: 'alta',
    },
    {
        id: '5',
        name: 'Distribuidora Santa Rosa',
        address: 'Av. 6 de Diciembre, Quito',
        status: 'pendiente',
        pendingDebt: 0,
        lastSale: 200.00,
        priority: 'normal',
    },
    {
        id: '6',
        name: 'Tienda El Progreso',
        address: 'Barrio El Calvario, Loja',
        status: 'pendiente',
        pendingDebt: 50.00,
        lastSale: 60.00,
        priority: 'normal',
    },
    {
        id: '7',
        name: 'Supermercado Familiar',
        address: 'Av. Universitaria, Cuenca',
        status: 'pendiente',
        pendingDebt: 320.00,
        lastSale: 180.00,
        priority: 'alta',
    },
];
