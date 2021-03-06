// @flow

import * as React from 'react'

import styles from './style'

import type { Props } from './props'

const Badge = ({ badge }: Props) =>
  badge > 0 &&
    <span style={styles.badge}>{badge}</span>

export default Badge
