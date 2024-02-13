/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {customElement} from 'lit/decorators.js';

import {IconButton} from './internal/icon-button.js';
import {styles} from './internal/outlined-styles.js';
import {styles as sharedStyles} from './internal/shared-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-outlined-icon-button': MdOutlinedIconButton;
  }
}

/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
@customElement('md-outlined-icon-button')
export class MdOutlinedIconButton extends IconButton {
  static override styles = [sharedStyles, styles];

  protected override getRenderClasses() {
    return {
      ...super.getRenderClasses(),
      'outlined': true,
    };
  }
}
