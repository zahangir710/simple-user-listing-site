import "./Card.css";
function Card({ user }) {
  const { name, email, id, address, username, image } = user;
  return (
    <div className="card">
      <img src={image} alt="user-image" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{email}</p>
      </div>
    </div>
  );
}

export default Card;
