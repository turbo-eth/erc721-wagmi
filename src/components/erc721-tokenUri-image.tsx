import * as React from 'react';

import classNames from 'classnames';
import useERC721Metadata from '../useERC721Metadata';
import { BigNumberish } from 'ethers';

interface ERC721TokenImageProps {
  className?: string;
  alt?: string;
  address: `0x${string}`;
  tokenId: BigNumberish;
}

export const ERC721TokenImage = ({
  className,
  alt,
  address,
  tokenId,
}: ERC721TokenImageProps) => {
  const classes = classNames(className);
  const tokenData = useERC721Metadata({
    address,
    tokenId,
  });
  const [imgSrc, setImgSrc] = React.useState<string>();
  React.useEffect(() => {
    if (tokenData?.image.startsWith('ipfs://')) {
      setImgSrc(
        `https://cloudflare-ipfs.com/ipfs/${
          tokenData?.image.split('ipfs://')[1]
        }`
      );
    } else {
      setImgSrc(tokenData?.image);
    }
  }, [tokenData?.image]);
  if (!tokenData) return null;
  return <img className={classes} alt={alt} src={imgSrc} />;
};

export default ERC721TokenImage;
