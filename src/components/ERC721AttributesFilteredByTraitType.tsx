import * as React from 'react';

import classNames from 'classnames';

interface ERC721AttributesFilteredByTraitTypeProps {
  className?: string;
  classNameItem?: string;
  classNameLabel?: string;
  classNameValue?: string;
  attributes: any[];
  attFilter: string[];
}

export const ERC721AttributesFilteredByTraitType = ({
  className,
  classNameItem,
  classNameLabel,
  classNameValue,
  attributes,
  attFilter,
}: ERC721AttributesFilteredByTraitTypeProps) => {
  const containerClassName = classNames(
    className,
    'ERC721AttributesFilteredByTraitType'
  );

  const [filteredAttributes, setFilteredAttributes] = React.useState<any[]>();
  React.useEffect(() => {
    if (Array.isArray(attributes) && Array.isArray(attFilter)) {
      const boostNumbers = attributes.filter((attribute) =>
        attFilter.includes(attribute.trait_type)
      );
      setFilteredAttributes(boostNumbers);
    }
  }, [attributes]);

  if (!filteredAttributes) return null;

  return (
    <div className={containerClassName}>
      {filteredAttributes.map((attribute, index) => {
        return (
          <div className={classNameItem} key={index}>
            <span className={classNameLabel}>{attribute.trait_type}</span>
            <span className={classNameValue}>{attribute.value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ERC721AttributesFilteredByTraitType;
