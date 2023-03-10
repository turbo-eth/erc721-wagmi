import * as React from 'react';
import useERC721Metadata from 'useERC721Metadata';

interface ERC721TokenNameProps {
  className?: string;
  address: `0x${string}`;
  tokenId: string;
}

export const ERC721TokenName = ({
  className,
  address,
  tokenId,
}: ERC721TokenNameProps) => {
  const tokenData = useERC721Metadata({
    address,
    tokenId,
  });

  if (!tokenData) return null;
  return <span className={className}>{tokenData?.name}</span>;
};
