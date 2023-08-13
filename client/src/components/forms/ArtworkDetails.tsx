'use client';
import React, { useState } from 'react';
import DropdownSelect from '@/common/Dropdown';
import EditableSection from '@/common/EditableSection';

const ArtworkDetailsForm: React.FC = () => {
  const [mintDate, setMintDate] = useState<string | number>('');
  const [mintSupply, setMintSupply] = useState<number>(0);
  const [mintPrice, setMintPrice] = useState<number | string>(0);

  return (
    <div>
      <h2>Artwork Details</h2>
      <DropdownSelect
        item={['nft', 'crypto']}
        title={'NFT Type'}
        subTitle='Select NFT type'
        onChangeHandler={(value: string | number): void => {
          setMintDate(value);
        }}
      />
      <EditableSection
        title={'Mint Date'}
        placeholder={'Placeholder'}
        onChangeHandler={(value: string): void => {
          setMintDate(value);
        }}
        subTitle='Please provide expected NFT minting date'
      />
      <DropdownSelect
        item={['100', '200', '300']}
        title={'Mint Price'}
        subTitle='Please share your best estimate'
        onChangeHandler={(value: string | number): void => {
          setMintPrice(value);
        }}
      />
      <EditableSection
        title={'Mint Supply'}
        placeholder={'123456'}
        onChangeHandler={(value: string): void => {
          setMintSupply(parseInt(value));
        }}
      />
    </div>
  );
};

export default ArtworkDetailsForm;
