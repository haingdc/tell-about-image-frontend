import type { Meta, StoryObj } from "@storybook/react";
import { type ChangeEvent, type ReactElement, useState } from "react";
import * as Icons from "./index.ts";
import "./icons.stories.css";

const meta: Meta<typeof IconGrid> = {
  component: IconGrid,
};

export default meta;
type Story = StoryObj<typeof IconGrid>;

// This story uses a render function to fully control how the component renders.
export const Example: Story = {
  render: () => (
    <div>
      <IconGrid />
    </div>
  ),
};

const iconColors = [
  "#000000", // Black
  "#DC2626", // Red
  "#2563EB", // Blue
  "#059669", // Green
  "#7C3AED", // Purple
  "#EA580C", // Orange
];

function IconGrid() {
  const [copiedIcon, setCopiedIcon] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColor, setSelectedColor] = useState(iconColors[5]); // Default black color

  // Get all icon names
  const iconNames = Object.keys(Icons).filter(
    (key) => key !== "default" && !key.startsWith("__") && key !== "IconName",
  );

  // Filter icons based on search
  const filteredIcons = iconNames.filter((name) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Copy icon name to clipboard
  const copyIconName = (iconName: string) => {
    // Using type assertion for clipboard API
    const nav = navigator as Navigator & {
      clipboard: { writeText: (text: string) => Promise<void> };
    };
    if (nav.clipboard) {
      void nav.clipboard.writeText(iconName)
        .then(() => {
          setCopiedIcon(iconName);
          setTimeout(() => setCopiedIcon(""), 2000);
        })
        .catch((err: unknown) => console.error("Failed to copy:", err));
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setSearchQuery(target.value || "");
  };

  return (
    <div className="icon-grid">
      <h1 className="icon-grid__title">Icons Gallery</h1>

      <div className="icon-grid__controls">
        {/* Search */}
        <div className="icon-grid__search">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search icons..."
            className="icon-grid__search-input"
          />
        </div>

        {/* Color Selection */}
        <div className="icon-grid__colors">
          <label className="icon-grid__color-label">Icon Color:</label>
          <div className="icon-grid__color-options">
            {iconColors.map((color) => (
              <button
                key={color}
                type="button"
                className={`icon-grid__color-btn ${
                  selectedColor === color ? "selected" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Results counter */}
      <p className="icon-grid__counter">
        Showing {filteredIcons.length} of {iconNames.length} icons
      </p>

      {/* Icons grid */}
      <div className="icon-grid__container">
        {filteredIcons.map((iconName) => {
          const IconComponent = Icons[iconName as keyof typeof Icons] as () =>
            ReactElement;
          return (
            <div
              key={iconName}
              className="icon-grid__item"
              onClick={() => copyIconName(iconName)}
            >
              <div className="icon-grid__icon" style={{ color: selectedColor }}>
                <IconComponent />
              </div>
              <span className="icon-grid__name">{iconName}</span>

              {copiedIcon === iconName && (
                <div className="icon-grid__copied">
                  Copied!
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Empty state */}
      {filteredIcons.length === 0 && (
        <div className="icon-grid__empty">
          <p className="icon-grid__empty-text">
            No icons found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
