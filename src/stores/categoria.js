import { ref } from 'vue';
import { defineStore } from 'pinia';

import CategoriaService from '@/services/categorias';
const categoriaService = new CategoriaService();

export const useCategoriaStore = defineStore('categoria', () => {
  const categorias = ref([]);

  async function getCategorias() {
    categorias.value = await categoriaService.getCategorias();
  }

  async function createCategoria(categoria) {
    await categoriaService.createCategoria(categoria);
    getCategorias();
  }

  return { categorias, getCategorias, createCategoria };
});
