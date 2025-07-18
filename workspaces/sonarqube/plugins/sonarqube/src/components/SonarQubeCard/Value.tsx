/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => {
  return {
    value: {
      fontSize: '1.5rem',
      fontWeight: theme.typography.fontWeightMedium,
    },
    compact: {
      lineHeight: '1.0',
    },
  };
});

export const Value = (props: { value?: string; compact?: boolean }) => {
  const classes = useStyles();
  return (
    <Typography
      component="span"
      className={props.compact ? classes.compact : ''}
      classes={{ root: classes.value }}
    >
      {props.value}
    </Typography>
  );
};
