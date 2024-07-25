import { ref } from 'vue';
import { defineStore } from 'pinia';

import AcessorioService from '@/services/acessorio';
const acessorioService = new AcessorioService();

export const useAcessorioStore = defineStore('acessorio', () => {
  const acessorios = ref([]);

  async function getAcessorios() {
    acessorios.value = await acessorioService.getAcessorios();
  }

  async function createAcessorio(acessorio) {
    await acessorioService.createAcessorio(acessorio);
    getAcessorios();
  }

  return { acessorios, getAcessorios, createAcessorio };
});
