import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args}>
      <h2>Organization &rarr;</h2>
      <p>Register and list on our platform</p>
</Card>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  route: "https://nextjs.org/learn",
  children:  <><h2>Organization &rarr;</h2>
    <p>Register and list on our platform</p>
    </>
};
