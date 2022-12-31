import * as React from 'react';
import { useERC721Metadata } from '../hooks/useERC721Metadata';

interface ERC721AttributesProps {
  className?: string;
  classNameLabel?: string;
  classNameValue?: string;
  address: string;
  tokenId: string;
}

export const ERC721Attributes = ({
  classNameLabel,
  classNameValue,
  address,
  tokenId,
}: ERC721AttributesProps) => {
  const tokenData = useERC721Metadata({
    address,
    tokenId,
  });

  if (!tokenData) return null;
  return tokenData?.attributes?.map((attribute) => (
    <Attribute
      classNameLabel={classNameLabel}
      classNameValue={classNameValue}
      name={attribute?.trait_type}
      value={attribute?.value}
    />
  ));
};

function Attribute({ name, value, classNameLabel, classNameValue }: any) {
  return (
    <div className="flex justify-between">
      <span className={classNameLabel}>{name}</span>
      <span className={classNameValue}>{value}</span>
    </div>
  );
}

export default ERC721Attributes;
