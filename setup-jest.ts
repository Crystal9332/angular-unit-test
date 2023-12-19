// /* global mocks for jsdom */
// import { TestBed } from '@angular/core/testing';
import '@testing-library/jest-dom/extend-expect';
// // import 'zone.js/dist/zone-testing';
// import {
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting
// } from '@angular/platform-browser-dynamic/testing';

import 'jest-preset-angular/setup-jest';
const mock = () => {
  let storage: { [key: string]: string } = {};
  return {
    getItem: (key: string) => (key in storage ? storage[key] : null),
    setItem: (key: string, value: string) => (storage[key] = value || ''),
    removeItem: (key: string) => delete storage[key],
    clear: () => (storage = {})
  };
};
Object.defineProperty(window, 'google', {
  value: {
    maps: {
      places: mock()
    }
  }
});
Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ['-webkit-appearance']
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: (prop) => {
      return '';
    }
  })
});
// /* output shorter and more meaningful Zone error stack traces */
// // Error.stackTraceLimit = 2;

// beforeAll(() => {
//   TestBed.initTestEnvironment(
//     BrowserDynamicTestingModule,
//     platformBrowserDynamicTesting()
//   );
// });
