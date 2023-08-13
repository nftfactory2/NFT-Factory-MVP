import React from 'react';
import SideBar from '@/common/navs/side/SideNavigation';
import Apply from './apply/page';
import Button from '@/common/Button';
import {
  SectionOneForm,
  SecondSectionForm,
} from '@/components/forms/ProjectDetails';
import TeamInformationForm from '@/components/forms/TeamInformation';
import SalesPlanForm from '@/components/forms/SalesPlan';
import ArtworkDetailsForm from '@/components/forms/ArtworkDetails';

const LaunchPad = () => {
  return (
    <div className='flex h-screen'>
      <SideBar />
      <div className='flex-1 flex-col'>
        <Apply />
      </div>
    </div>
  );
};

export default LaunchPad;
