import { useSelector } from "react-redux";

const UserInfo = () => {
    const {user, loading, error} = useSelector((state)=> state.github);

    if(loading) return <div>Cargando...</div>;
    if(error) return <div>{`Error:${error}`}</div>
    if(!user) return null;

    return (
        <div>
            <h3>{user.name}</h3>
            <p>Usuario: {user.login}</p>
            <p>Seguidores: {user.followers}</p>
            <p>Repositorios: {user.public_repos}</p>
            <img src={user.avatar_url} alt={user.name} width={100} />
        </div>
    );
};

export default UserInfo;