import axios from 'axios';

export default class CategoriaService {
  async getCategorias() {
    const response = await axios.get('/categorias/');
    return response.data.results;
  }

  async createCategoria(categorias) {
    const response = await axios.post('/categorias/', categorias);
    return response.data;
  }
}