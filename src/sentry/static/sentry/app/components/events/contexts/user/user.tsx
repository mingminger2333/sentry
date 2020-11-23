import React from 'react';

import UserAvatar from 'app/components/avatar/userAvatar';
import ErrorBoundary from 'app/components/errorBoundary';
import ContextBlock from 'app/components/events/contexts/contextBlock';
import KeyValueList from 'app/components/events/interfaces/keyValueList/keyValueList';
import {removeFilterMaskedEntries} from 'app/components/events/interfaces/utils';
import {AvatarUser as UserType} from 'app/types';
import {defined} from 'app/utils';

import getUnknownData from '../getUnknownData';

import getUserKnownData from './getUserKnownData';
import {UserIgnoredDataType, UserKnownDataType} from './types';

type Props = {
  data: Data;
};

type Data = {
  data: {[key: string]: string};
} & UserType;

const userKnownDataValues = [
  UserKnownDataType.ID,
  UserKnownDataType.EMAIL,
  UserKnownDataType.USERNAME,
  UserKnownDataType.IP_ADDRESS,
  UserKnownDataType.NAME,
];

const userIgnoredDataValues = [UserIgnoredDataType.DATA];

const User = ({data}: Props) => {
  const getKeyValueData = (val: object) => Object.keys(val).map(key => [key, val[key]]);

  return (
    <div className="user-widget">
      <div className="pull-left">
        <UserAvatar user={removeFilterMaskedEntries(data)} size={48} gravatar={false} />
      </div>
      <ContextBlock data={getUserKnownData(data, userKnownDataValues)} />
      <ContextBlock
        data={getUnknownData(data, [...userKnownDataValues, ...userIgnoredDataValues])}
      />
      {defined(data?.data) && (
        <ErrorBoundary mini>
          <KeyValueList data={getKeyValueData(data.data)} isContextData />
        </ErrorBoundary>
      )}
    </div>
  );
};

export default User;
