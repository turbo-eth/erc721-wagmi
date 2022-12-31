// @ts-nocheck
import * as React from 'react';
import { useERC721Metadata } from '../hooks/useERC721Metadata';

interface ERC721TokenURIProps {
  className?: string;
  address: string;
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

function Attribute({ name, value }) {
  return (
    <div className="flex justify-between">
      <span className="">{name}</span>
      <span className="">{value}</span>
    </div>
  );
}

export default ERC721TokenURI;
