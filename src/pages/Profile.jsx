import { useQuery } from '@apollo/react-hooks';
import { API, Auth } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../graphql/queries';

export function Profile() {

    const { id } = useParams()
    const [user, setUser] = useState(null)
    // const { data, loading, error } = useQuery(getUser, { variables: { id } })
    
    useEffect(async () => {
        const res = await Auth.currentSession()
        console.log(res);
        console.log(id);
        try {
            //   const user = await API.graphql({ query: getUser, variables: { id }});
            //   setUser(user)
            // console.log(data);
        } catch (err) {
            console.log(err);
        }
    }, [])


    return (
        <section className="member-details flex column align-center justify-center">
            {user ?
                (<div>
                    <h3>Hello {user.username}</h3>
                </div>) :
                <h3>Loading</h3>
            }
            {/* <NavLink className="link-btn" to="/">Go Back</NavLink> */}
        </section>
    )
}