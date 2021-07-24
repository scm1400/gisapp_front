import axios from 'axios'; 
import authHeader from './auth-header';

const BOARD_API_BASE_URL = "http://localhost:8080/api/board"; 

class BoardService {


    getBoards() {
        return axios.get(BOARD_API_BASE_URL, { headers: authHeader() });
    }
    createBoard(board) {
        return axios.post(BOARD_API_BASE_URL, board, { headers: authHeader() });
    }
    getOneBoard(no) {
        return axios.get(BOARD_API_BASE_URL + "/" + no, { headers: authHeader() });
    }
    
}

export default new BoardService();