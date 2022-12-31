import * as React from 'react';
import classNames from 'classnames';

interface ERC721AttributesBoostNumbersProps {
  className?: string;
  classNameItem?: string;
  classNameLabel?: string;
  classNameValue?: string;
  attributes?: any[];
}

export const ERC721AttributesBoostNumbers = ({
  className,
  classNameItem,
  classNameLabel,
  classNameValue,
  attributes,
}: ERC721AttributesBoostNumbersProps) => {
  const containerClassName = classNames(
    className,
    'ERC721AttributesBoostNumbers'
  );

  const [filteredAttributes, setFilteredAttributes] = React.useState<any[]>();
  React.useEffect(() => {
    if (Array.isArray(attributes)) {
      const boostNumbers = attributes.filter(
        (attribute) => attribute.display_type === 'boost_number'
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

export default ERC721AttributesBoostNumbers;
