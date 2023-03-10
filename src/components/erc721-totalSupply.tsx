import * as React from 'react';

import { useErc721TotalSupply } from 'core';

interface ERC721TotalSupplyProps {
  className?: string;
  tokenId: string;
  address: `0x${string}`;
  abi?: any;
  functionName?: string;
  chainId?: number;
  args?: any[];
  cacheOnBlock?: boolean;
  watch?: boolean;
  cacheTime?: number;
  enabled?: boolean;
  isDataEqual?: (a: any, b: any) => boolean;
  structuralSharing?: (a: any, b: any) => boolean;
  scopeKey?: string;
  staleTime?: number;
  suspense?: boolean;
  select?: () => void;
  overrides?: {
    [key: string]: any;
  };
  onSuccess?: () => void;
  onError?: () => void;
  onSettled?: () => void;
}

export const ERC721TotalSupply = ({
  className,
  chainId,
  address,
  cacheOnBlock,
  cacheTime,
  enabled,
  scopeKey,
  staleTime,
  suspense,
  overrides,
  onSuccess,
  onError,
  onSettled,
}: ERC721TotalSupplyProps) => {
  const txRead = useErc721TotalSupply({
    chainId,
    address,
    cacheOnBlock,
    cacheTime,
    enabled,
    scopeKey,
    staleTime,
    suspense,
    overrides,
    onSuccess,
    onError,
    onSettled,
  });

  if (!txRead.data || !txRead.isSuccess) return null;
  return <span className={className}>{txRead.data.toString()}</span>;
};
