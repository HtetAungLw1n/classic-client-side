import { Suspense } from 'react';

const Loadable = <T extends import('react').ComponentType<any>>(
  Component: import('react').LazyExoticComponent<T> | T,
) => {
  return (props: import('react').ComponentProps<T>) => (
    <Suspense fallback={''}>
      <Component {...(props as import('react').ComponentProps<T>)} />
    </Suspense>
  );
};

export default Loadable;
