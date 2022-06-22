import { Toolbar, Box } from "@mui/material";
import TopicIcon from "@mui/icons-material/Topic";
import { blueGrey } from "@mui/material/colors";
import Link from "next/link";

export const Header = () => {
  return (
    <Toolbar style={{ height: "1em", borderBottom: `0.2em solid ${blueGrey[50]}` }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          margin: 0,
        }}
      >
        <Link href="/" passHref>
          <Box
            style={{
              height: "2em",
              width: "2em",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
              zIndex: 1,
            }}
          >
            <TopicIcon />
          </Box>
        </Link>
      </Box>
    </Toolbar>
  );
};
