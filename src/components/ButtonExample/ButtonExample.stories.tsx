import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonExample from "./ButtonExample";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Example",
  component: ButtonExample,
} as ComponentMeta<typeof ButtonExample>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonExample> = (args) => <ButtonExample {...args} ></ButtonExample>;

export const ButtonTest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonTest.args = {
  children:"Hello storybook!",
  backgroundColor:"pink",
  color:'white',
  width:"800px",
  height:"300px"
};
