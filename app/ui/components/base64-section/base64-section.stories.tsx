import Base64Section, { Base64Section__Header } from "./base64-section.component.tsx";
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
      <div style={{ maxWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Base64Section>;

export default meta;

export const Basic = {
  render: () => (
    <div style={{ backgroundColor: "#f5f5f5", padding: "20px" }}>
      <Base64Section>
        {sampleText}
      </Base64Section>
    </div>
  ),
};

// Template cho Base64Section__Header
export const Header = {
  render: () => <Base64Section__Header />,
  name: "Base64Section Header",
};

// Template với theme tối
export const DarkTheme = {
  render: () => (
    <div style={{ backgroundColor: "#313539", padding: "20px" }}>
      <div>
        <Base64Section__Header />
      </div>
    </div>
  ),
  name: "Dark Theme",
};

// Template với chiều rộng cố định
export const FixedWidth = {
  render: () => (
    <div style={{ width: "400px", border: "1px solid #e0e0e0" }}>
      <Base64Section__Header />
    </div>
  ),
  name: "Fixed Width 400px",
};

// Template với chiều rộng nhỏ
export const MobileWidth = {
  render: () => (
    <div style={{ width: "320px", border: "1px solid #e0e0e0" }}>
      <Base64Section__Header />
    </div>
  ),
  name: "Mobile Width 320px",
};
