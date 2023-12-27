import type { Schema, Attribute } from '@strapi/strapi';

export interface PageAbout extends Schema.Component {
  collectionName: 'components_page_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    Description: Attribute.Text & Attribute.Required;
    Pictures: Attribute.Media & Attribute.Required;
    PressHighlights: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.about': PageAbout;
    }
  }
}
