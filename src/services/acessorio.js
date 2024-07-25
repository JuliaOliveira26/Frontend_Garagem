import axios from 'axios';

export default class AcessorioService {
  async getAcessorios() {
    const response = await axios.get('/acessorios/');
    return response.data.results;
  }

  async createAcessorio(acessorios) {
    const response = await axios.post('/acessorios/', acessorios);
    return response.data;
  }
}