import type { Meta, StoryObj } from '@storybook/react';
import WelcomeDone from '../WelcomeDone';

const meta = {
  title: 'Pages/WelcomeDone',
  component: WelcomeDone,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WelcomeDone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkMode: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

// 반응형 테스트를 위한 다양한 뷰포트 크기
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

// 애니메이션 시작 전 상태
export const PreAnimation: Story = {
  parameters: {
    // 애니메이션을 일시 중지하기 위한 CSS
    backgrounds: {
      default: 'light',
    },
    css: {
      global: `
        * {
          animation-duration: 0s !important;
          transition-duration: 0s !important;
        }
      `,
    },
  },
}; 