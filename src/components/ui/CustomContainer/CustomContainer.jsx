import { Container } from "react-bootstrap";

const CustomContainer = ({ children, lg }) => {
  return (
    <Container
      style={{
        height: "100%",
        maxWidth: lg ? "1400px" : '1320px',
        padding:'0 10px '
      }}
    >
      {children}
    </Container>
  );
};

export default CustomContainer;
