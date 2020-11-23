import React from 'react';
import styled from '@emotion/styled';

import Feature from 'app/components/acl/feature';
import Tooltip from 'app/components/tooltip';
import {IconFire} from 'app/icons';
import {t} from 'app/locale';

const UnhandledTag = () => (
  <Feature features={['unhandled-issue-flag']}>
    <Tooltip title={t('An unhandled error was detected in this Issue.')}>
      <UnhandledTagWrapper>
        <StyledIconFire size="xs" color="red300" />
        {t('Unhandled')}
      </UnhandledTagWrapper>
    </Tooltip>
  </Feature>
);

export default UnhandledTag;

const UnhandledTagWrapper = styled('div')`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
`;

const StyledIconFire = styled(IconFire)`
  margin-right: 3px;
`;
