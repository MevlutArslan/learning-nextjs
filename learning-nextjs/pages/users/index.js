import styles from '../../styles/User.module.css';
import Link from 'next/link';

// runs at build time before the component is rendered
export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    return {
        props: {
            users: data
        }
    }
}


const UserHome = ({users}) => {
    return ( 
        <div>
            <h1> User Home </h1>
            {users.map(user => (
                <Link key={user.id} href={"/users/" + user.id}>
                    <a className={styles.single}>
                        <h3>
                            {user.name}
                        </h3>
                    </a>
                </Link>
            ))
            }
        </div>
     );
}
 
export default UserHome;