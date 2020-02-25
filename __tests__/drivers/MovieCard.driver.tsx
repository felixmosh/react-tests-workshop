import { getByTestId } from '@testing-library/react';
import * as React from 'react';

export class MovieCardDriver {
  private component: HTMLElement;

  public get = {
    title: () => {
      return getByTestId(this.component, 'movie-title').textContent;
    },
  };

  constructor(element: HTMLElement) {
    this.component = element;
  }
}
