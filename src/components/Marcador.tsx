'use client';

import { VscDebugBreakpointLog } from 'react-icons/vsc';

export default function Marcador({ size = 30 }: { size?: number }) {
  return <VscDebugBreakpointLog size={size} style={{ margin: '0 10px 0 0' }} />;
}
