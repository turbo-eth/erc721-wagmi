import * as React from 'react';

import { useContractRead } from 'wagmi';
import { erc721ABI } from 'wagmi';

interface ERC721ImageBase64Props {
  className?: string;
  alt?: string;
  address: string;
  tokenId: string;
}

export const ERC721ImageBase64 = ({
  className,
  alt,
  address,
  tokenId,
}: ERC721ImageBase64Props) => {
  const txRead = useContractRead({
    address: address,
    abi: erc721ABI,
    functionName: 'tokenURI',
    // @ts-ignore
    args: [tokenId],
  });

  const [imgSrc, setImgSrc] = React.useState();
  React.useEffect(() => {
    if (txRead.data) {
      // @ts-ignore
      (async () => {
        if (txRead.data) {
          const data = await fetch(txRead.data as unknown as string);
          const json = await data.json();
          setImgSrc(json.image);
        }
      })();
    }
  }, [txRead.data]);

  if (!txRead.data || !txRead.isSuccess) return null;
  return <img className={className} alt={alt} src={imgSrc} />;
};

export default ERC721ImageBase64;
