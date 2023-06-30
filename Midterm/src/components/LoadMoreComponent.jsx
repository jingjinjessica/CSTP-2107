import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export default function LoadMoreComponent({ pagination, setPagination }) {
  const handleLoadMore = () => {
    setPagination({ ...pagination, page: pagination.page + 1 });
  };

  return (
    <Container
      maxWidth="xs"
      sx={{ display: "flex", justifyContent: "center", pb: 4 }}
    >
      <Button variant="outlined" onClick={handleLoadMore}>
        Load More
      </Button>
    </Container>
  );
}
