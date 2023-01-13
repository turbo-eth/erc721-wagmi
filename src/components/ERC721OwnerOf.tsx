import * as React from 'react';

import classNames from 'classnames';

import useERC721Read from '../hooks/useERC721Read';

interface ERC721OwnerOfProps extends ContractReadOptions {
  className?: string;
  tokenId: string;
}

export const ERC721OwnerOf = ({
  className,
  tokenId,
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
  const { data, isError, isLoading } = useERC721Read({
    chainId,
    address,
    functionName: 'ownerOf',
    args: args || [tokenId],
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

export default ERC721OwnerOf;
