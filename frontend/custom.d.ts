import 'react';

declare module 'react' {
  // eslint-disable-next-line no-unused-vars
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}
