<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'AddUser',
  async created() {
    //var field = document.getElementById('password');
    //var confirmField = document.getElementById('confirm');
    //var fortify = new Fortify(field, confirmField);
    let getCookie = document.cookie
    let cookie = getCookie.split('Session=')
    let ulrParams = new URLSearchParams(window.location.search)

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .post('http://localhost:5000/api/v1/deleteuser', {
            cookies: cookie[1],
            id: ulrParams.get('id'),
          })
          .catch((err) => {
            console.log(err)
          })
          .then((res) => {
            if (res === undefined) {
              window.location.href = '/user-management?statusMessage=failed-delete'
            } else {
              if (res.status == 200) {
                window.location.href = '/user-management?statusMessage=success-delete'
              } else {
                window.location.href = '/user-management?statusMessage=failed-delete'
              }
            }
          })
      }
    })
  },
}
</script>
