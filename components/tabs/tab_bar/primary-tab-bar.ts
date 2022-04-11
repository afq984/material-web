/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {html, TemplateResult} from 'lit';
import {customElement} from 'lit/decorators';

import {PrimaryTabBar} from './lib/primary-tab-bar';
import {styles as tabbarStyles} from './lib/primary-tab-bar-styles.css';
import {styles as sharedStyles} from './lib/shared-styles.css';

declare global {
  interface HTMLElementTagNameMap {
    'md-primary-tab-bar': MdPrimaryTabBar;
  }
}

@customElement('md-primary-tab-bar')
export class MdPrimaryTabBar extends PrimaryTabBar {
  static override styles = [sharedStyles, tabbarStyles];

  protected override renderTabScroller(): TemplateResult {
    return html`<md-tab-scroller class="md3-tab-bar__scroller"><slot></slot></md-tab-scroller>`;
  }
}
