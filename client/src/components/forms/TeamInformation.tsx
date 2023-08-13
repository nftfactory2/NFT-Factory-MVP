'use client';
import EditableSection from '@/common/EditableSection';
import React, { useState } from 'react';

const TeamInformationForm: React.FC = () => {
  const [members, setMembers] = useState<string>('');
  const [twitterUrl, setTwitterUrl] = useState<string>('');
  const [linkedUrl, setLinkedinUrl] = useState<string>('');

  return (
    <div>
      <h2>Team Information</h2>
      <EditableSection
        title={'Members & their Roles'}
        placeholder={'Start Typing'}
        onChangeHandler={(value: string): void => {
          setMembers(value);
        }}
        subTitle='Please provide the names each team member and their roles'
      />
      <EditableSection
        title={'Twitter'}
        placeholder={'https:###'}
        onChangeHandler={(value: string): void => {
          setTwitterUrl(value);
        }}
        subTitle='Please provide the twitter link for each team member'
      />
      <EditableSection
        title={'LinkedIn'}
        placeholder={'https:###'}
        onChangeHandler={(value: string): void => {
          setLinkedinUrl(value);
        }}
        subTitle='Please provide the Linkedin link for each team member'
      />
    </div>
  );
};

export default TeamInformationForm;
