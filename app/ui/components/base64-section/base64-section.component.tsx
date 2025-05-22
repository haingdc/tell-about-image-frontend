import "./base64-section.component.css";
import "./google-chrome-tabs-like.css";
import "pedals-gears-wc";
import { CopyDocument, X } from "@/app/ui/icons/index.ts";

export function Base64Section__Header() {
  return (
    <div>
      <div className="sd-tabs">
        <input
          className="sd-tab-radio"
          name="tabs"
          tabIndex={1}
          type="radio"
          id="tabone"
          checked={true}
        />
        <label className="sd-tab-label" htmlFor="tabone">
          <div className="sd-tab-icon">
          </div>

          <div className="sd-tab-desc">Tab One</div>
          <div className="sd-tab-icon sd-tab-close">
            <X />
          </div>
        </label>
        <div className="sd-tab-content" tabIndex={1}>
          <h2>Tab One Content</h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
        </div>
      </div>
    </div>
  );
}
export default function Base64Section() {
  return (
    <div>
      <div className="tabs">
        <div className="tab-bar">
          <div className="tab-item">
            <input
              className="tab-radio"
              name="tabs"
              tabIndex={1}
              type="radio"
              id="tabone"
              checked={true}
            />
            <label className="tab-label" htmlFor="tabone">
              <div className="tab-icon">
                <CopyDocument />
              </div>
            </label>
          </div>
          <lit-button className="lit-button">Img</lit-button>
        </div>
        <div className="tab-content">
          <div className="wrapper-base64-text">
            <h2>Tab One Content</h2>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
