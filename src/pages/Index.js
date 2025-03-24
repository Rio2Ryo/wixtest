import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionCustomComponents4 from '../components/custom-components/IndexSectionCustomComponents4';
import IndexSectionCustomComponents1 from '../components/custom-components/IndexSectionCustomComponents1';
import IndexSectionCustomComponents9 from '../components/custom-components/IndexSectionCustomComponents9';
import IndexSectionCustomComponents10 from '../components/custom-components/IndexSectionCustomComponents10';
import IndexSectionCustomComponents8 from '../components/custom-components/IndexSectionCustomComponents8';
import IndexSectionFeaturesWhitePattern11 from '../components/features-white-pattern/IndexSectionFeaturesWhitePattern11';
import IndexSectionCustomComponents3 from '../components/custom-components/IndexSectionCustomComponents3';
import IndexSectionCustomComponents6 from '../components/custom-components/IndexSectionCustomComponents6';
import IndexSectionCustomComponents7 from '../components/custom-components/IndexSectionCustomComponents7';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionCustomComponents4 />
      <IndexSectionCustomComponents1 />
      <IndexSectionCustomComponents9 />
      <IndexSectionCustomComponents10 />
      <IndexSectionCustomComponents8 />
      <IndexSectionFeaturesWhitePattern11 />
      <IndexSectionCustomComponents3 />
      <IndexSectionCustomComponents6 />
      <IndexSectionCustomComponents7 />
    </React.Fragment>
  );
}

