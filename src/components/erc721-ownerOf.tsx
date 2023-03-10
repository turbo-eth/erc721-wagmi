import * as React from 'react';

import classNames from 'classnames';
import { useErc721OwnerOf } from 'core';
import { BigNumber } from 'ethers';

interface ERC721OwnerOfProps {
  className?: string;
  tokenId: string;
  address: `0x${string}`;
  abi?: any;
  functionName?: string;
  chainId?: number;
  args?: readonly [BigNumber] | undefined;
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

export const ERC721OwnerOf = ({
  className,
  chainId,
  address,
  args,
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
}: ERC721OwnerOfProps) => {
  const classes = classNames(className, 'ERC721OwnerOf');
  const { data, isError, isLoading } = useErc721OwnerOf({
    chainId,
    address,
    args: args,
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
  if (isError || isLoading) return null;
  return <span className={classes}>{String(data)}</span>;
};
