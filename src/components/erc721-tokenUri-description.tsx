import * as React from 'react';
import useERC721Metadata from 'useERC721Metadata';

interface ERC721TokenDescriptionProps {
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

export const ERC721TokenDescription = ({
  className,
  address,
  tokenId,
}: ERC721TokenDescriptionProps) => {
  const tokenData = useERC721Metadata({
    address,
    tokenId,
  });

  if (!tokenData) return null;
  return <p className={className}>{tokenData?.description}</p>;
};

export default ERC721TokenDescription;
