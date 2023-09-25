/** @jsxImportSource @emotion/react */

import { Box, css } from '@mui/material';

function App() {
  return (
   <Box css={wrapperCSS}>Hello World</Box>
  );
}

const wrapperCSS = css`
  border: 2px solid red;
`

export default App;
