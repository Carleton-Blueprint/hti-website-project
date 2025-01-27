'use client';

import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ModalsProvider>
        {children}
      </ModalsProvider>
      <Notifications />
    </>
  );
}
