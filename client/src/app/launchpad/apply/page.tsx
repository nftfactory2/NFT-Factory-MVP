'use client';
import React, { useState } from 'react';
import ArtworkDetailsForm from '@/components/forms/ArtworkDetails';
import Button from '@/common/Button';
import {
  SecondSectionForm,
  SectionOneForm,
} from '@/components/forms/ProjectDetails';
import SalesPlanForm from '@/components/forms/SalesPlan';
import TeamInformationForm from '@/components/forms/TeamInformation';
import GetStarted from '@/components/forms/GetStarted';

const Apply: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleNextPage = () => {
    if (currentPage < 6) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const isLastPage = currentPage === 6;

  const previewCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <GetStarted />;
      case 2:
        return <SectionOneForm />;
      case 3:
        return <SecondSectionForm />;
      case 4:
        return <TeamInformationForm />;
      case 5:
        return <ArtworkDetailsForm />;
      case 6:
        return <SalesPlanForm />;
      default:
        return;
    }
  };
  return (
    <div>
      {previewCurrentPage()}
      {currentPage === 1 ? (
        <div className='flex justify-content-between items-center'>
          <Button handleClick={handleNextPage}>Proceed</Button>
          <Button as='link' href='/guide'>
            Guide
          </Button>
        </div>
      ) : (
        <Button handleClick={handleNextPage}>
          {isLastPage ? <p>Submit</p> : <p> Proceed</p>}
        </Button>
      )}
    </div>
  );
};

export default Apply;
