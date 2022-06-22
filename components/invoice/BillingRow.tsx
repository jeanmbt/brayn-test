import { StyledBox, StyledTypography } from "../../styles/componentStyles";

export const BillingRow = (props: any) => {
  const { title, label, margin } = props;
  return (
    <StyledBox sx={{ marginTop: margin }}>
      <StyledTypography>{title}</StyledTypography>
      {label}
    </StyledBox>
  );
};
