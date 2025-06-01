import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index.ts";
import "./button.stories.css";
import { CopyDocument } from "@/app/ui/icons/index.ts";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "UI/Components/Button",
  component: Button,
  parameters: {
    layout: "none",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonTable: Story = {
  render: () => {
    const handleClick = action("button-click");

    return (
      <table className="variant-table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th scope="col">default</th>
            <th scope="col">primary</th>
            <th scope="col">secondary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="rowgroup" rowSpan={4}>enabled</th>
            <th scope="row">default</th>
            <td>
              <Button onClick={() => handleClick("default")}>Button</Button>
            </td>
            <td>
              <Button intent="primary" onClick={() => handleClick("primary")}>Button</Button>
            </td>
            <td>
              <Button intent="secondary" onClick={() => handleClick("secondary")}>Button</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">medium</th>
            <td>
              <Button size="medium" onClick={() => handleClick("default medium")}>Button</Button>
            </td>
            <td>
              <Button intent="primary" size="medium" onClick={() => handleClick("primary medium")}>
                Button
              </Button>
            </td>
            <td>
              <Button
                intent="secondary"
                size="medium"
                onClick={() => handleClick("secondary medium")}
              >
                Button
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">small</th>
            <td>
              <Button size="small" onClick={() => handleClick("default small")}>Button</Button>
            </td>
            <td>
              <Button intent="primary" size="small" onClick={() => handleClick("primary small")}>
                Button
              </Button>
            </td>
            <td>
              <Button
                intent="secondary"
                size="small"
                onClick={() => handleClick("secondary small")}
              >
                Button
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">icon</th>
            <td>
              <Button size="icon" onClick={() => handleClick("default icon")}>
                <CopyDocument />
              </Button>
            </td>
            <td>
              <Button intent="primary" size="icon" onClick={() => handleClick("primary icon")}>
                <CopyDocument />
              </Button>
            </td>
            <td>
              <Button intent="secondary" size="icon" onClick={() => handleClick("secondary icon")}>
                <CopyDocument />
              </Button>
            </td>
          </tr>

          <tr>
            <th scope="rowgroup" rowSpan={4}>disabled</th>
            <th scope="row">default</th>
            <td>
              <Button disabled onClick={() => handleClick("disabled default")}>Button</Button>
            </td>
            <td>
              <Button intent="primary" disabled onClick={() => handleClick("disabled primary")}>
                Button
              </Button>
            </td>
            <td>
              <Button intent="secondary" disabled onClick={() => handleClick("disabled secondary")}>
                Button
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">medium</th>
            <td>
              <Button size="medium" disabled onClick={() => handleClick("disabled default medium")}>
                Button
              </Button>
            </td>
            <td>
              <Button
                intent="primary"
                size="medium"
                disabled
                onClick={() => handleClick("disabled primary medium")}
              >
                Button
              </Button>
            </td>
            <td>
              <Button
                intent="secondary"
                size="medium"
                disabled
                onClick={() => handleClick("disabled secondary medium")}
              >
                Button
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">small</th>
            <td>
              <Button size="small" disabled onClick={() => handleClick("disabled default small")}>
                Button
              </Button>
            </td>
            <td>
              <Button
                intent="primary"
                size="small"
                disabled
                onClick={() => handleClick("disabled primary small")}
              >
                Button
              </Button>
            </td>
            <td>
              <Button
                intent="secondary"
                size="small"
                disabled
                onClick={() => handleClick("disabled secondary small")}
              >
                Button
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">icon</th>
            <td>
              <Button size="icon" disabled onClick={() => handleClick("disabled default icon")}>
                <CopyDocument />
              </Button>
            </td>
            <td>
              <Button
                intent="primary"
                size="icon"
                disabled
                onClick={() => handleClick("disabled primary icon")}
              >
                <CopyDocument />
              </Button>
            </td>
            <td>
              <Button
                intent="secondary"
                size="icon"
                disabled
                onClick={() => handleClick("disabled secondary icon")}
              >
                <CopyDocument />
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  },
};
