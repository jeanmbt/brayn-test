import { StyledBox } from "../../styles/componentStyles";

export const BillTo = (props: any) => {
  const { debitor } = props;
  return (
    <>
      <StyledBox>{debitor.name}</StyledBox>
      <StyledBox>{debitor.email}</StyledBox>
      <StyledBox>{debitor.phone}</StyledBox>
      <StyledBox>
        {debitor.street}
        {debitor.postcode}, {debitor.location}
      </StyledBox>
    </>
  );
};
