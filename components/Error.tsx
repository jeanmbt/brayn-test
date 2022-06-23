import { Container } from "@mui/material";

export const Error = (props: any) => {
  const { errorMessage } = props;
  return (
    <Container sx={{ textAlign: "center", marginTop: 5 }}>
      <>
        there was an error:
        {errorMessage}
      </>
    </Container>
  );
};
