import * as React from 'react';
import { useContractRead, erc721ABI } from 'wagmi';

interface ERC721OwnerOfProps {
  className?: string;
  address: string;
  tokenId: string | number;
  isLink: boolean;
}

export const ERC721OwnerOf = ({
  address,
  tokenId = 0,
  isLink = false,
}: ERC721OwnerOfProps) => {
  const txRead = useContractRead({
    address: address,
    abi: erc721ABI,
    functionName: 'ownerOf',
    // @ts-ignore
    args: [tokenId],
  });

  if (!txRead.data || !txRead.isSuccess) return null;
  if (isLink) {
    return (
      <a
        href={`https://goerli-optimism.etherscan.io/address/${txRead.data.toString()}`}
        target="_blank"
        className="link"
        rel="noreferrer"
      >
        {txRead.data.toString()}
      </a>
    );
  }
  return <span className="">{txRead.data.toString()}</span>;
};

export default ERC721OwnerOf;
