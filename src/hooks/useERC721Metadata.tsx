// @ts-nocheck
import { erc721ABI } from 'wagmi';
import { useState, useEffect } from 'react';
import { useContractRead } from 'wagmi';

interface ERC721Metadata {
  name: string;
  description: string;
  image: string;
  attributes: Array<{
    trait_type: string;
    value: string;
  }>;
}

// @ts-ignore
export function useERC721Metadata({
  address,
  tokenId,
}: {
  address: string;
  tokenId: string;
}): ERC721Metadata | undefined {
  const [tokenData, setTokenData] = useState<ERC721Metadata | undefined>();
  const txRead = useContractRead({
    address: address,
    abi: erc721ABI,
    functionName: 'tokenURI',
    args: [tokenId],
  });

  useEffect(() => {
    if (txRead.data) {
      async function fetchData() {
        // You can await here
        if (txRead?.data?.startsWith('ipfs://')) {
          const data = await fetch(
            `https://ipfs.io/ipfs/${txRead?.data?.split('ipfs://')[1]}`
          );
          console.log(data, 'data');
          setTokenData(await data.json());
        } else {
          const data = await fetch(txRead?.data as unknown as URL);
          setTokenData(await data.json());
        }
      }
      fetchData();
    }
  }, [txRead.data]);

  return tokenData;
}

export default useERC721Metadata;
