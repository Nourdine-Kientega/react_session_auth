import HeaderPart from './HeaderComponent';
import FooterPart from './FooterComponent';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const LayoutComponent = ({ children }: LayoutProps) => {
  return (
    <div>
      <HeaderPart />
      <main>
        {children}
      </main>
      <FooterPart />
    </div>
  )
}

export default LayoutComponent;