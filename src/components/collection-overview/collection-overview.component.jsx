import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => {
  console.log('CollectionOverview', collections);
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} id={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapPropstoState = (state) =>
  createStructuredSelector({
    collections: selectCollectionForPreview,
  });

export default connect(mapPropstoState)(CollectionOverview);
