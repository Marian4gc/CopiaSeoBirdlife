import Swal from 'sweetalert2';
import AllData from "../results/AllData";

function UsersList() {
  const token = localStorage.getItem("loggedAppUser");
  const role = localStorage.getItem("role");

  console.log(token)

  if (role == ['ROLE_ADMIN,ROLE_USER']) {
    console.log(role[1])
    const axiosRequest = async () => {
      try {
        const response = await axios.get(DASHBOARD_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    axiosRequest();
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No estás autorizado',
      confirmButtonText: 'OK'
    }).then(() => {
      window.location.href = '/login';
    });
    return;
  }

  return (
    <div>
      <h1 className='text-center'>Bienvenid@ Admin</h1>
      <AllData />
    </div>
  );
}

export default UsersList;
