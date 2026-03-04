import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { router } from 'expo-router';
import { Lock, Mail } from 'lucide-react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Navigate to the main application tabs
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 justify-center px-8"
      >
        <View className="items-center mb-12">
          {/* Mock Logo Container */}
          <View className="w-24 h-24 bg-blue-50 rounded-3xl items-center justify-center mb-6 shadow-sm">
            <Text className="text-4xl text-blue-600 font-bold">RC</Text>
          </View>
          <Text className="text-3xl font-bold text-gray-900 mb-2">Bienvenido</Text>
          <Text className="text-gray-500 text-center">Accede a tu plataforma de gestión de rutas y cobranzas.</Text>
        </View>

        <View className="space-y-4 mb-8">
          {/* Email Input */}
          <View className="flex-row items-center bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100">
            <Mail color="#9CA3AF" size={20} />
            <TextInput
              className="flex-1 ml-3 text-base text-gray-900"
              placeholder="Correo electrónico"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Password Input */}
          <View className="flex-row items-center bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100">
            <Lock color="#9CA3AF" size={20} />
            <TextInput
              className="flex-1 ml-3 text-base text-gray-900"
              placeholder="Contraseña"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>

        {/* Login Button */}
        <TouchableOpacity 
          onPress={handleLogin}
          activeOpacity={0.8}
          className="bg-[#007AFF] py-4 rounded-2xl items-center shadow-sm"
        >
          <Text className="text-white font-bold text-lg">Ingresar</Text>
        </TouchableOpacity>

        {/* Forgot Password */}
        <TouchableOpacity className="mt-6 items-center">
          <Text className="text-[#007AFF] font-medium">¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
