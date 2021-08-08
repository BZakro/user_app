import { API, Auth } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '..';
import { getUser, listUsers } from '../graphql/queries';

export function Profile() {

    const { id } = useParams()
    const [user, setUser] = useState(null)
    
    useEffect(async () => {
        try {
              const res = await client.query({ query: getUser, variables: { id }});
              setUser(res.data.getUser)
        } catch (err) {
            console.log(err);
        }
    }, [])

    const onLogout = async () => {
        const res = await Auth.signOut()
        console.log(res);
    }


    return (
        <section className="member-details flex column align-center justify-center">
            {user ?
                (<div>
                    <h3>Hello {user.username}</h3>
                </div>) :
                <h3>Loading</h3>
            }
            {/* <NavLink className="link-btn" to="/">Go Back</NavLink> */}
            <button onClick={onLogout}>Logout</button>
        </section>
    )
}