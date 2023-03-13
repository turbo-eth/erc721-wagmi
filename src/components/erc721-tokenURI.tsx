import * as React from 'react';
import useERC721Metadata from '../useERC721Metadata';

interface ERC721TokenURIProps {
  className?: string;
  address: `0x${string}`;
  tokenId: string;
}

export const ERC721TokenURI = ({ address, tokenId }: ERC721TokenURIProps) => {
  const tokenData = useERC721Metadata({
    address,
    tokenId,
  });

  if (!tokenData) return null;
  return (
    <code>
      <pre>{`${JSON.stringify(tokenData)}`}</pre>
    </code>
  );
};

export default ERC721TokenURI;
