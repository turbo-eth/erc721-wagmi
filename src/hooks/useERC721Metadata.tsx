import { useEffect, useState } from 'react';

import { BigNumberish } from 'ethers';

import useERC721Read from './useERC721Read';

interface ERC721Metadata {
  name: string;
  description: string;
  image: string;
  attributes: Array<{
    trait_type: string;
    value: string;
  }>;
}

export function useERC721Metadata({
  address,
  tokenId,
}: {
  address: string;
  tokenId: BigNumberish;
}): ERC721Metadata | undefined {
  const [tokenData, setTokenData] = useState<ERC721Metadata | undefined>();
  const txRead = useERC721Read({
    address: address,
    args: [tokenId],
    functionName: 'tokenURI',
  });

  useEffect(() => {
    if (txRead.data) {
      async function fetchData() {
        // TODO: Add support for other IPFS gateways
        // In general just make this wayyy more robust
        // @ts-ignore
        if (txRead?.data?.startsWith('ipfs://')) {
          const url = `https://cloudflare-ipfs.com/ipfs/${
            // @ts-ignore
            txRead?.data?.split('ipfs://')[1]
          }`;
          const data = await fetch(url);

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
