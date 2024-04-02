function Card(props) {
  const { title, backgroundColor, children } = props;

  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: '0px 0px 4px grey',
        // backgroundColor 가있으면 backgroundColor 컬라값으로 없으면 white로 바꿈
        backgroundColor: backgroundColor || 'white',
      }}
    >
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

export default Card;