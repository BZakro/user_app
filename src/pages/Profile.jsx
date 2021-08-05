import { useState, useParams } from 'react';
import { getUser } from '../graphql/queries';
export function Profile(){
    
  const [user, setUser] = useState()
  const {id} = useParams()

  useEffect(async () => {
        const user = await API.graphql({ query: getUser, variables: { input: id }});
        setUser(user)
    }, [])
    

  return (
      <section className="member-details flex column align-center justify-center">
      {user ?
        (<div>
          <h3>Hello {user.username}</h3>
        </div>) : 
        <h3>Loading</h3>
        }
      <NavLink className="link-btn" to="/">Go Back</NavLink>
    </section>
  )
}