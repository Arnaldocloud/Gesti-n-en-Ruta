/// <reference types="nativewind/types" />
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { VENDOR_METRICS, ROUTE_CLIENTS, RouteClient, ClientStatus } from '../data/mockData';
import RegisterModal from '../components/RegisterModal';

// ─── Filter tabs ─────────────────────────────────────────────────────────────
type Filter = 'todos' | 'pendiente' | 'visitado';

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'todos', label: 'Todos' },
  { key: 'pendiente', label: 'Pendientes' },
  { key: 'visitado', label: 'Visitados' },
];

// ─── Helper ───────────────────────────────────────────────────────────────────
function fmt(n: number) {
  return `$${n.toFixed(2)}`;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function OnlineBadge({ isOnline }: { isOnline: boolean }) {
  return (
    <View
      className={`flex-row items-center px-3 py-1 rounded-full ${
        isOnline ? 'bg-emerald-500/20' : 'bg-amber-500/20'
      }`}
    >
      {/* Pulsing dot — simulated with a solid dot (no Animated needed for demo) */}
      <View
        className={`w-2 h-2 rounded-full mr-2 ${
          isOnline ? 'bg-emerald-400' : 'bg-amber-400'
        }`}
      />
      <Text
        className={`text-xs font-bold ${
          isOnline ? 'text-emerald-300' : 'text-amber-300'
        }`}
      >
        {isOnline ? 'Online' : 'Offline'}
      </Text>
    </View>
  );
}

function MetricCard({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <View className="flex-1 bg-white/10 rounded-2xl px-3 py-3 mx-1">
      <Text className="text-white/60 text-xs mb-1">{label}</Text>
      <Text className={`text-lg font-bold ${accent}`}>{value}</Text>
    </View>
  );
}

function Header() {
  const m = VENDOR_METRICS;
  const total = m.pendingClients + m.visitedClients;
  const progress = total > 0 ? m.visitedClients / total : 0;

  return (
    <View className="bg-blue-700 pt-12 px-5 pb-5">
      {/* Row 1: name + badge */}
      <View className="flex-row items-center justify-between mb-1">
        <View>
          <Text className="text-white/70 text-xs font-medium tracking-widest uppercase">
            Ruta del Día
          </Text>
          <Text className="text-white text-xl font-bold">{m.vendorName}</Text>
        </View>
        <OnlineBadge isOnline={m.isOnline} />
      </View>

      {/* Metric cards */}
      <View className="flex-row mt-4 -mx-1">
        <MetricCard
          label="Ventas hoy"
          value={fmt(m.todaySales)}
          accent="text-white"
        />
        <MetricCard
          label="Cobrado"
          value={fmt(m.todayCollected)}
          accent="text-emerald-300"
        />
        <MetricCard
          label="Clientes"
          value={`${m.visitedClients}/${total}`}
          accent="text-amber-300"
        />
      </View>

      {/* Progress bar */}
      <View className="mt-4">
        <View className="flex-row justify-between mb-1">
          <Text className="text-white/60 text-xs">Progreso de ruta</Text>
          <Text className="text-white/60 text-xs">
            {Math.round(progress * 100)}%
          </Text>
        </View>
        <View className="h-2 bg-white/20 rounded-full overflow-hidden">
          <View
            className="h-2 bg-emerald-400 rounded-full"
            style={{ width: `${progress * 100}%` }}
          />
        </View>
      </View>
    </View>
  );
}

function ClientCard({
  client,
  onPress,
}: {
  client: RouteClient;
  onPress: () => void;
}) {
  const isPending = client.status === 'pendiente';
  const isHighPriority = client.priority === 'alta';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      className={`mx-4 mb-3 rounded-2xl overflow-hidden ${
        isPending ? 'bg-white' : 'bg-gray-100'
      }`}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: isPending ? 0.1 : 0.04,
        shadowRadius: 4,
        elevation: isPending ? 3 : 1,
      }}
    >
      {/* Priority stripe */}
      {isHighPriority && isPending && (
        <View className="h-1 bg-red-400 w-full" />
      )}

      <View className="flex-row items-center px-4 py-4">
        {/* Avatar */}
        <View
          className={`w-11 h-11 rounded-full items-center justify-center mr-3 ${
            isPending
              ? isHighPriority
                ? 'bg-red-100'
                : 'bg-blue-100'
              : 'bg-gray-200'
          }`}
        >
          <Text className="text-xl">
            {isPending ? (isHighPriority ? '🔴' : '🔵') : '✅'}
          </Text>
        </View>

        {/* Info */}
        <View className="flex-1">
          <View className="flex-row items-center gap-2 flex-wrap">
            <Text
              className={`text-base font-semibold ${
                isPending ? 'text-gray-900' : 'text-gray-500'
              }`}
              numberOfLines={1}
            >
              {client.name}
            </Text>
            {isHighPriority && isPending && (
              <View className="bg-red-100 px-2 py-0.5 rounded-full">
                <Text className="text-red-600 text-xs font-bold">Urgente</Text>
              </View>
            )}
          </View>
          <Text className="text-gray-400 text-xs mt-0.5" numberOfLines={1}>
            📍 {client.address}
          </Text>
          {client.pendingDebt != null && client.pendingDebt > 0 && (
            <Text className="text-amber-600 text-xs font-semibold mt-1">
              💳 Saldo: {fmt(client.pendingDebt)}
            </Text>
          )}
        </View>

        {/* Status badge */}
        <View
          className={`ml-2 px-3 py-1 rounded-full ${
            isPending ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        >
          <Text
            className={`text-xs font-bold ${
              isPending ? 'text-white' : 'text-gray-600'
            }`}
          >
            {isPending ? 'Pendiente' : 'Visitado'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// ─── Main Screen ─────────────────────────────────────────────────────────────
export default function HomeScreen() {
  const [filter, setFilter] = useState<Filter>('todos');
  const [modalVisible, setModalVisible] = useState(false);
  const [preselectedClient, setPreselectedClient] = useState<string | undefined>(undefined);

  const filteredClients = ROUTE_CLIENTS.filter((c) => {
    if (filter === 'todos') return true;
    return c.status === filter;
  });

  // Sort: pending high-priority first, then pending normal, then visited
  const sortedClients = [...filteredClients].sort((a, b) => {
    if (a.status === 'pendiente' && b.status === 'visitado') return -1;
    if (a.status === 'visitado' && b.status === 'pendiente') return 1;
    if (a.status === 'pendiente' && b.status === 'pendiente') {
      if (a.priority === 'alta' && b.priority !== 'alta') return -1;
      if (a.priority !== 'alta' && b.priority === 'alta') return 1;
    }
    return 0;
  });

  const handleClientPress = (clientId: string) => {
    setPreselectedClient(clientId);
    setModalVisible(true);
  };

  const handleCTAPress = () => {
    setPreselectedClient(undefined);
    setModalVisible(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar barStyle="light-content" backgroundColor="#1D4ED8" />

      {/* ── Header ── */}
      <Header />

      {/* ── Filter tabs ── */}
      <View className="flex-row px-4 pt-4 pb-2 gap-2">
        {FILTERS.map((f) => {
          const count =
            f.key === 'todos'
              ? ROUTE_CLIENTS.length
              : ROUTE_CLIENTS.filter((c) => c.status === f.key).length;
          const active = filter === f.key;
          return (
            <TouchableOpacity
              key={f.key}
              onPress={() => setFilter(f.key)}
              className={`flex-row items-center px-4 py-2 rounded-full border ${
                active
                  ? 'bg-blue-600 border-blue-600'
                  : 'bg-white border-gray-200'
              }`}
            >
              <Text
                className={`text-sm font-semibold ${
                  active ? 'text-white' : 'text-gray-600'
                }`}
              >
                {f.label}
              </Text>
              <View
                className={`ml-2 px-1.5 py-0.5 rounded-full ${
                  active ? 'bg-white/20' : 'bg-gray-100'
                }`}
              >
                <Text
                  className={`text-xs font-bold ${
                    active ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  {count}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* ── Client list ── */}
      <FlatList
        data={sortedClients}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 4, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ClientCard
            client={item}
            onPress={() => handleClientPress(item.id)}
          />
        )}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center py-16">
            <Text className="text-4xl mb-3">🎉</Text>
            <Text className="text-gray-500 font-semibold text-base">
              ¡Todos los clientes visitados!
            </Text>
          </View>
        }
      />

      {/* ── CTA Button (floating) ── */}
      <View
        className="absolute bottom-0 left-0 right-0 px-5 pb-8 pt-4"
        style={{ backgroundColor: 'rgba(243,244,246,0.95)' }}
      >
        <TouchableOpacity
          onPress={handleCTAPress}
          activeOpacity={0.88}
          className="bg-blue-600 py-4 rounded-2xl flex-row items-center justify-center"
          style={{
            shadowColor: '#1D4ED8',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.45,
            shadowRadius: 12,
            elevation: 10,
          }}
        >
          <Text className="text-white text-xl mr-2">＋</Text>
          <Text className="text-white text-lg font-bold tracking-wide">
            Registrar Venta / Cobro
          </Text>
        </TouchableOpacity>
      </View>

      {/* ── Modal ── */}
      <RegisterModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        preselectedClientId={preselectedClient}
      />
    </SafeAreaView>
  );
}
