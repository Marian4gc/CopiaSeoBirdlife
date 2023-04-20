import AllData from "../results/AllData";

function UsersList() {


  const token = localStorage.getItem("loggedAppUser");
  const role = localStorage.getItem("role");

  console.log(token)

  try {

    // useEffect(() => {

    if (role == ['ROLE_ADMIN,ROLE_USER']) {
      console.log(role[1])
      const axiosRequest = async () => {

        await axios.get(DASHBOARD_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
          //    .then((response) => response.json())
          .then(data => console.log(data.data))
      }

    } else {
      return <h1>no está autorizado</h1>
    }

    axiosRequest()

    // }, [])


  } catch {

    console.log('Algo salio mal...')

  }

  return (
    <div>
      <h1>ESTAS EN LA USERLIST</h1>
      <AllData />
    </div>
  )
}

export default UsersList