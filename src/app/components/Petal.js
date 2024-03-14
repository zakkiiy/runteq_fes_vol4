const Petal = ({ left, delay }) => {
  const top = Math.random() * window.innerHeight;

  const petalStyle = {
    width: '10px',
    height: '10px',
    backgroundColor: 'pink',
    position: 'absolute',
    left: left,
    top: `${top}px`,
    animation: `sakura-blow 3s linear ${delay}s infinite`,
  };

  return <div style={petalStyle}></div>;
};

export default Petal;
