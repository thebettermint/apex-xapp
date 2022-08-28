import React from 'react';
import {
  Walletalt,
  Vector,
  Receiptalt,
  Nut,
  Magnifyingglass,
  Caretdoubleright,
  Checksquare,
  Currencycircledollar,
  Placeholder,
  Chartline,
  Gearsix,
} from '../Icons';

export const categories = {
  primary: [
    {
      category: 'overview',
      icon: Chartline,
      route: '/overview',
      iconProps: {
        height: 24,
        width: 24,
        strokeWidth: 2.25,
      },
    },
    {
      category: 'invoices',
      icon: Receiptalt,
      route: '/invoices',
      iconProps: {
        height: 24,
        width: 24,
        strokeWidth: 3,
      },
    },
    {
      category: 'payroll',
      icon: Currencycircledollar,
      route: '/payroll',
      iconProps: {
        height: 24,
        width: 24,
        strokeWidth: 2.5,
      },
    },
    {
      category: 'checks',
      icon: Checksquare,
      route: '/checks',
      iconProps: {
        height: 24,
        width: 24,
        strokeWidth: 2.5,
      },
    },
    {
      category: 'advanced',
      icon: Nut,
      route: '/advanced',
      iconProps: {
        height: 24,
        width: 24,
        strokeWidth: 2.75,
      },
    },
    {
      category: 'settings',
      icon: Gearsix,
      route: '/settings',
      iconProps: {
        height: 24,
        width: 24,
        strokeWidth: 2.25,
      },
    },
  ],
  secondary: [
    {
      category: 'search',
      icon: Magnifyingglass,
      route: '/search',
      iconProps: {
        height: 24,
        width: 24,
        strokeWidth: 3,
      },
    },
    {
      category: 'collapse',
      icon: Caretdoubleright,
      route: '/collapse',
      iconProps: {
        height: 24,
        width: 24,
        strokeWidth: 2.5,
      },
    },
  ],
  bottom: [
    {
      category: 'wallets',
      icon: Walletalt,
      route: '/wallets',
      iconProps: {
        height: 24,
        width: 24,
        strokeWidth: 2.5,
      },
    },
    {
      category: 'user',
      icon: Placeholder,
      route: '/user',
      iconProps: {
        height: 28,
        width: 28,
        strokeWidth: 1,
      },
    },
  ],
};
