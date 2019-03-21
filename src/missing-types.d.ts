declare module "@reach/skip-nav" {
  declare const SkipNavLink: React.FC<
    React.AnchorHTMLAttributes & { children?: string | JSX.Element }
  >;
  declare const SkipNavContent: React.FC<React.HTMLAttributes>;
}
