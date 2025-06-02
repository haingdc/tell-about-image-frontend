import Base64Section from "./base64-section.component.tsx";
import "./base64-section.component.css";
// @ts-ignore: build not working, detect issue in the future
import sampleText from "./sample-base64-data.txt?raw"; // Vite syntax
import { type Meta } from "@storybook/react";

const meta = {
  title: "UI/Components/Base64Section",
  component: Base64Section,
  parameters: {
    layout: "none",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: 500,
          backgroundColor: "light-dark(var(--gray-0), #333b3c)",
          padding: "20px",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Base64Section>;

export default meta;

export const Basic = {
  render: () => <Base64Section>{sampleText}</Base64Section>,
};

export const Empty = {
  render: () => <Base64Section></Base64Section>,
};

export const ReadMore = {
  render: () => <Base64Section readMore>{sampleText}</Base64Section>,
};
