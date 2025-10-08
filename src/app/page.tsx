"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import LogoFooter from '@/components/sections/layouts/footer/LogoFooter';

const theme: SiteTheme = {
  styleVariant: "funAndTrendy",
  colorTemplate: 1,
  textAnimation: "slide"
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-b-1759928097249-e1fb9813.jpg"
          logoAlt="BarneyCoin Logo"
          brandName="BarneyCoin"
          navItems={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "Footer", id: "footer"}]}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <VoidHero
          title="Welcome to BarneyCoin"
          description="A playful and friendly introduction to cryptocurrency"
          primaryButtonText="Buy Now"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about">
        <BaseAbout
          title="About BarneyCoin"
          descriptions={["BarneyCoin makes crypto approachable and fun for everyone.", "Join our community and learn about the exciting world of cryptocurrencies."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          steps={[
            { position: 'left', image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/a-flat-cartoon-portrait-of-an-anthropomo-1759928090278-f4143603.jpg', title: 'Step 1', description: 'Create a wallet for BarneyCoin.' },
            { position: 'center', image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/a-flat-cartoon-portrait-of-an-anthropomo-1759928093041-e16553c8.jpg', title: 'Step 2', description: 'Buy BarneyCoin via our website.' },
            { position: 'right', image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/a-flat-cartoon-portrait-of-an-anthropomo-1759928095083-844f4403.jpg', title: 'Step 3', description: 'Store and trade BarneyCoin securely.' }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics
          title="Tokenomics Overview"
          description="BarneyCoin has a strong foundation with a transparent mechanism."
          kpiItems={[
            { value: '100M', description: 'Total Supply', longDescription: 'Total tokens that will ever exist.', icon: 'Globe' },
            { value: '50%', description: 'Market Cap', longDescription: 'The circulating market cap of the token.', icon: 'Globe' },
            { value: '0.01$', description: 'Current Price', longDescription: 'Current trading price of BarneyCoin.', icon: 'Globe' }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <LogoFooter
          columns={[
            { title: 'Resources', items: [{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }] },
            { title: 'Community', items: [{ label: 'Join Discord', onClick: () => {} }, { label: 'Telegram', onClick: () => {} }] },            
            { title: 'Company', items: [{ label: 'About Us', onClick: () => {} }, { label: 'Contact', onClick: () => {} }] }
          ]}
          copyrightText="© 2023 BarneyCoin"
        />
      </div>
    </SiteThemeProvider>
  );
}
