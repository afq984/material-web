/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {customElement} from 'lit/decorators.js';

import {FilledField} from './internal/filled-field.js';
import {styles as filledStyles} from './internal/filled-styles.js';
import {styles as sharedStyles} from './internal/shared-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-filled-field': MdFilledField;
  }
}

/**
 * TODO(b/228525797): add docs
 * @final
 * @suppress {visibility}
 */
@customElement('md-filled-field')
export class MdFilledField extends FilledField {
  static override styles = [sharedStyles, filledStyles];
}
