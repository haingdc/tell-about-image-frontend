import type { Meta, StoryObj } from "@storybook/react";
import UploadComponent from "./upload.component.tsx";
// @ts-ignore: css modules
import styles from "./upload.component.stories.module.css";

const meta: Meta<typeof UploadComponent> = {
  title: "UI/Components/Upload",
  component: UploadComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    handleFileSelect: { action: "file selected" },
  },
  decorators: [
    (Story, context) => (
      <div
        className={styles.storyContainer}
        data-container-size={context.parameters.containerSize}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof UploadComponent>;

export const SmallContainer: Story = {
  args: {
    selectedFile: null,
    ref: null,
    handleFileSelect: (event) => {
      console.log("File selected:", event.target.files?.[0]?.name);
    },
  },
  parameters: {
    containerSize: "small",
  },
};

export const LargeContainer: Story = {
  args: {
    selectedFile: null,
    ref: null,
    handleFileSelect: (event) => {
      console.log("File selected:", event.target.files?.[0]?.name);
    },
  },
  parameters: {
    containerSize: "large",
  },
};

export const SmallContainerWithFile: Story = {
  args: {
    selectedFile: new File([""], "example.png", { type: "image/png" }),
    ref: null,
    handleFileSelect: (event) => {
      console.log("File selected:", event.target.files?.[0]?.name);
    },
  },
  parameters: {
    containerSize: "small",
  },
};

export const LargeContainerWithFile: Story = {
  args: {
    selectedFile: new File([""], "example.png", { type: "image/png" }),
    ref: null,
    handleFileSelect: (event) => {
      console.log("File selected:", event.target.files?.[0]?.name);
    },
  },
  parameters: {
    containerSize: "large",
  },
};
