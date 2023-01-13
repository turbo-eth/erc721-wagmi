import * as React from 'react';

import { BigNumber } from 'ethers';
import { erc721ABI, useContractRead } from 'wagmi';

interface ERC721TotalSupplyProps {
  className?: string;
  address: string;
}

export const ERC721TotalSupply = ({ address }: ERC721TotalSupplyProps) => {
  const txRead = useContractRead({
    address: address,
    abi: erc721ABI,
    functionName: 'totalSupply',
  });

  if (!txRead.data || !txRead.isSuccess) return null;
  return <span className="">{BigNumber.from(txRead.data).toString()}</span>;
};

export default ERC721TotalSupply;
