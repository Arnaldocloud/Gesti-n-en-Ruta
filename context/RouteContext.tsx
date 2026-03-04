import React, { createContext, useState, useContext } from 'react';

export type Client = {
  id: string;
  name: string;
  address: string;
  loanTotal: number;
  balance: number;
  quota: number;
  status: 'Al día' | 'Atrasado' | 'Pendiente';
};

const INITIAL_CLIENTS: Client[] = [
  { id: '1', name: 'Juan Pérez', address: 'Bodega Central, Sur', loanTotal: 1000, balance: 450, quota: 15, status: 'Al día' },
  { id: '2', name: 'María Gómez', address: 'Av. Las Palmas, Local 4', loanTotal: 500, balance: 120, quota: 10, status: 'Al día' },
  { id: '3', name: 'Carlos Ruiz', address: 'Mercado Mayorista', loanTotal: 2000, balance: 1800, quota: 40, status: 'Atrasado' },
  { id: '4', name: 'Ana Salazar', address: 'Sector Norte, Tienda', loanTotal: 800, balance: 400, quota: 20, status: 'Pendiente' },
];

type RouteContextType = {
  clients: Client[];
  activeClientIndex: number;
  setActiveClientIndex: (index: number) => void;
  registerPayment: (clientId: string, amount: number) => void;
  setOfflineMode: (enabled: boolean) => void;
  isOfflineMode: boolean;
};

const RouteContext = createContext<RouteContextType | undefined>(undefined);

export function RouteProvider({ children }: { children: React.ReactNode }) {
  const [clients, setClients] = useState<Client[]>(INITIAL_CLIENTS);
  const [activeClientIndex, setActiveClientIndex] = useState(0);
  const [isOfflineMode, setOfflineMode] = useState(false);

  const registerPayment = (clientId: string, amount: number) => {
    setClients(currentClients => 
      currentClients.map(client => {
        if (client.id === clientId) {
          const newBalance = Math.max(0, client.balance - amount);
          return {
            ...client,
            balance: newBalance,
            status: newBalance === 0 ? 'Al día' : client.status
          };
        }
        return client;
      })
    );
  };

  return (
    <RouteContext.Provider value={{
      clients,
      activeClientIndex,
      setActiveClientIndex,
      registerPayment,
      isOfflineMode,
      setOfflineMode
    }}>
      {children}
    </RouteContext.Provider>
  );
}

export function useRouteContext() {
  const context = useContext(RouteContext);
  if (context === undefined) {
    throw new Error('useRouteContext must be used within a RouteProvider');
  }
  return context;
}
