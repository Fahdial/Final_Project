// Action creator
// A.C = function biasa yang dia terhubung dengan reducer melalui connect
// Harus return object yang memiliki property 'type'

import axios from 'axios'
import swal from 'sweetalert2'
// import API from '../services'

export const onLoginUser = (USERNAME, PASSWORD) => {

    return dispatch => {
        axios.get(`http://localhost:2000/users`, {
            params: {
              username: USERNAME
            }
          }).then(res => {
              if (!res.data.length) {
                swal.fire("Error", "User not found", "error");
              } else {
                axios.get(`http://localhost:2000/users`, {
                    params: {
                      username: USERNAME,
                      password: PASSWORD
                    }          
          }).then(res => {
              if (!res.data.length) {
                      swal.fire("Error", "Wrong password!", "error");
              } else { //kalau res.data.length tidak false atau menjadi true 
                swal.fire("Success", "Login Successfully", "success");
                // res.data [0] mengambil index yang paling pertama, yang isinya dalah sebuah object?
                let { id, username } = res.data[0];
                localStorage.setItem(
                  "userData",JSON.stringify({id, username})
                );
                dispatch({
                  type: "LOGIN_SUCCESS", payload: {id,username}
                      });
              }
            });
        }
      });
  };
};
    
export const onLogoutUser = () => {
    // Menghapus data di local storage
    localStorage.removeItem('userData')

    // Menghapus data di redux, tidak memerlukan payload
    return {
        type: 'LOGOUT_SUCCESS'
    }
}