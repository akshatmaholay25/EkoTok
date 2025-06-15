// This file is used to declare custom JSX intrinsic elements for web components.
// It helps TypeScript understand tags like <dotlottie-player>.

declare namespace JSX {
  interface IntrinsicElements {
    'dotlottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      src?: string;
      background?: string;
      speed?: string | number;
      style?: React.CSSProperties;
      loop?: boolean;
      autoplay?: boolean;
      controls?: boolean;
      // You can add other specific props for dotlottie-player here if needed
      // Check the documentation for @dotlottie/player-component for all available props
    }, HTMLElement>;
  }
}
