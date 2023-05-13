import styled from '@emotion/styled';
import { layoutType } from './type';

const Layout = ({ children }: layoutType) => {
  return <LayoutWrapStyle>{children}</LayoutWrapStyle>;
};

const LayoutWrapStyle = styled.div`
  margin: 0 auto;
  max-width: 430px;
  height: 100vh;
`;

export default Layout;
